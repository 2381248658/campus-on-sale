<!--
  @file AI 聊天消息气泡
  @description 支持用户/AI角色区分、Markdown渲染、流式打字机光标
-->
<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import type { ChatMessage } from '@/composables/useStreamChat'

interface Props {
  message: ChatMessage
  isStreaming?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isStreaming: false,
})

/** 流式渲染节流间隔（ms） */
const STREAM_THROTTLE_MS = 80

/** 节流后的内容（流式输出时使用） */
const throttledContent = ref('')
let throttleTimer: ReturnType<typeof setTimeout> | null = null

/** 流式输出时节流更新，结束时立即同步 */
watch(
  () => props.message.content,
  (newContent) => {
    if (props.isStreaming) {
      // 流式期间：节流更新
      if (throttleTimer) return
      throttleTimer = setTimeout(() => {
        throttledContent.value = props.message.content
        throttleTimer = null
      }, STREAM_THROTTLE_MS)
    } else {
      // 非流式/结束：立即同步
      if (throttleTimer) {
        clearTimeout(throttleTimer)
        throttleTimer = null
      }
      throttledContent.value = newContent
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  if (throttleTimer) clearTimeout(throttleTimer)
})

/** 预处理 AI 输出文本，修复模型不遵循格式的换行问题 */
function preprocessMarkdown(text: string): string {
  let result = text

  // 第一步：清理加粗标记内部空格（包括跨行、前导、尾部空格）
  result = result.replace(/\*\*\s*\n\s*/g, '**')
  result = result.replace(/\*\*\s+/g, '**').replace(/\s+\*\*/g, '**')

  // 第二步：在结构关键词前插入换行（支持行首和行中位置）
  const titleKeywords = ['结论', '优势', '注意', '适合场景', '建议']
  for (const keyword of titleKeywords) {
    result = result.replace(
      new RegExp(`(?:^|(?<=[^\\n]))((?:\\*\\*)?${keyword}(?:\\*\\*)?[：:])`, 'g'),
      '\n\n$1',
    )
  }

  // 第三步：在列表项 - 前插入换行
  result = result.replace(/([^\n])(\s*-\s)/g, '$1\n$2')

  // 第四步：按行分析，标题与内容分离存储
  const lines = result.split('\n')
  interface Section {
    type: 'title' | 'content' | 'list'
    text: string
  }
  const rawSections: Section[] = []
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const isTitle = /^\*\*/.test(trimmed) || /^(结论|优势|注意|适合场景|建议)[：:]/.test(trimmed)
    const isList = /^-\s/.test(trimmed)

    if (isTitle) {
      rawSections.push({ type: 'title', text: trimmed })
    } else if (isList) {
      rawSections.push({ type: 'list', text: trimmed })
    } else if (rawSections.length > 0) {
      // 内容追加到前一个段落的原始文本（保留类型）
      rawSections[rawSections.length - 1].text += ' ' + trimmed
    } else {
      rawSections.push({ type: 'content', text: trimmed })
    }
  }

  // 第五步：重建结构 —— 将标题行内粘连的内容拆为列表项
  const finalParts: string[] = []
  for (let i = 0; i < rawSections.length; i++) {
    const sec = rawSections[i]

    if (sec.type === 'title') {
      // 匹配任意标题格式（含冒号），分离标题与正文
      const m = sec.text.match(/^(.*?[：:])([\s\S]*)$/)
      if (m && m[2].trim()) {
        finalParts.push(m[1]) // 标题部分（含冒号）
        const body = m[2].trim()
        const items = body
          .split(/(?<=[。；])/)
          .map((s) => s.trim())
          .filter(Boolean)
        if (items.length > 0) finalParts.push(items.map((item) => `- ${item}`).join('\n'))
      } else {
        finalParts.push(sec.text)
      }
    } else {
      finalParts.push(sec.text)
    }
  }

  result = finalParts.map((s, i) => (i > 0 ? '\n\n' : '') + s).join('')
  result = result.replace(/\n{3,}/g, '\n\n')

  return result.trim()
}

/** AI 消息的 Markdown 渲染（经 DOMPurify 净化，防止 XSS） */
const renderedContent = computed(() => {
  if (props.message.role === 'user') return ''
  const content = props.isStreaming ? throttledContent.value : props.message.content
  if (!content) return ''
  const preprocessed = preprocessMarkdown(content)
  const rawHtml = marked.parse(preprocessed, { async: false, breaks: true }) as string
  return DOMPurify.sanitize(rawHtml)
})

const isUser = computed(() => props.message.role === 'user')
</script>

<template>
  <div class="ai-chat-message" :class="[message.role]">
    <!-- 头像 -->
    <div class="avatar">
      <span v-if="isUser" class="avatar-icon user-icon">我</span>
      <span v-else class="avatar-icon ai-icon">AI</span>
    </div>

    <!-- 消息内容 -->
    <div class="bubble">
      <!-- 用户消息：纯文本 -->
      <template v-if="isUser">
        <p class="user-text">{{ message.content }}</p>
      </template>

      <!-- AI 消息：Markdown 渲染 -->
      <template v-else>
        <div v-if="message.content" class="markdown-body" v-html="renderedContent" />
        <!-- 流式输出时的打字机光标 -->
        <span v-if="isStreaming" class="typing-cursor" />
        <!-- 空内容时的思考动画 -->
        <div v-if="!message.content && isStreaming" class="thinking-dots">
          <span /><span /><span />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ai-chat-message {
  display: flex;
  gap: 10px;
  padding: 8px 0;
  animation: msg-fade-in 0.3s ease-out;

  &.user {
    flex-direction: row-reverse;

    .bubble {
      background: $campusColor;
      color: #fff;
      border-radius: 14px 14px 4px 14px;
    }
  }

  &.assistant {
    .bubble {
      background: #fff;
      color: $textColor;
      border-radius: 14px 14px 14px 4px;
      border: 1px solid $borderColor;
    }
  }
}

.avatar {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.avatar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: $borderRadiusFull;
  font-size: 12px;
  font-weight: 600;
}

.user-icon {
  background: $campusColorLight;
  color: $campusColor;
}

.ai-icon {
  background: linear-gradient(135deg, $campusColor, #3399d4);
  color: #fff;
}

.bubble {
  max-width: 85%;
  padding: 10px 14px;
  line-height: 1.6;
  font-size: 13px;
  word-break: break-word;
}

.user-text {
  margin: 0;
}

/* Markdown 渲染样式 */
.markdown-body {
  :deep(p) {
    margin: 0 0 8px !important;

    &:last-child {
      margin-bottom: 0 !important;
    }
  }

  :deep(ul),
  :deep(ol) {
    padding-left: 18px;
    margin: 6px 0 !important;
  }

  :deep(li) {
    margin-bottom: 4px !important;
  }

  :deep(strong) {
    color: $campusColor;
  }

  :deep(code) {
    background: $campusColorLight;
    color: $campusColor;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 12px;
  }

  :deep(blockquote) {
    margin: 8px 0;
    padding: 4px 12px;
    border-left: 3px solid $campusColor;
    background: $campusColorLight;
    border-radius: 0 6px 6px 0;
    color: $subTextColor;
  }
}

/* 打字机光标 */
.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 16px;
  background: $campusColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: cursor-blink 0.8s steps(2) infinite;
}

/* 思考动画 */
.thinking-dots {
  display: flex;
  gap: 4px;
  padding: 4px 0;

  span {
    width: 6px;
    height: 6px;
    border-radius: $borderRadiusFull;
    background: $campusColor;
    opacity: 0.3;
    animation: dot-pulse 1.4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes msg-fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cursor-blink {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes dot-pulse {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  40% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
