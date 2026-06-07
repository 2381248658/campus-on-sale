<!--
  @file AI 聊天输入框
  @description 支持文本输入、快捷提问、发送/停止按钮
-->
<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  /** 是否正在流式输出 */
  isStreaming?: boolean
  /** 快捷提问列表 */
  quickQuestions?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  isStreaming: false,
  quickQuestions: () => ['这个商品值不值得买？', '有什么需要注意的？', '适合什么场景？'],
})

interface Emits {
  (e: 'send', text: string): void
  (e: 'stop'): void
}

const emit = defineEmits<Emits>()

const inputText = ref('')

/** 发送消息 */
const handleSend = () => {
  const text = inputText.value.trim()
  if (!text || props.isStreaming) return
  emit('send', text)
  inputText.value = ''
}

/** 快捷提问 */
const handleQuickQuestion = (question: string) => {
  if (props.isStreaming) return
  emit('send', question)
}

/** 回车发送 */
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}
</script>

<template>
  <div class="ai-chat-input">
    <!-- 快捷提问 -->
    <div v-if="quickQuestions.length" class="quick-questions">
      <button
        v-for="q in quickQuestions"
        :key="q"
        class="quick-btn"
        :disabled="isStreaming"
        @click="handleQuickQuestion(q)"
      >
        {{ q }}
      </button>
    </div>

    <!-- 输入区域 -->
    <div class="input-row">
      <textarea
        v-model="inputText"
        class="chat-textarea"
        placeholder="问问 AI 关于这个商品..."
        rows="1"
        :disabled="isStreaming"
        @keydown="handleKeydown"
      />
      <!-- 发送 / 停止按钮 -->
      <button
        v-if="!isStreaming"
        class="send-btn"
        :disabled="!inputText.trim()"
        @click="handleSend"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </button>
      <button v-else class="stop-btn" @click="emit('stop')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="12" height="12" rx="2" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ai-chat-input {
  padding: 12px 16px;
  border-top: 1px solid $lineColor;
  background: #fafbfc;
  border-radius: 0 0 $borderRadius $borderRadius;
}

.quick-questions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.quick-btn {
  padding: 4px 12px;
  font-size: 12px;
  color: $campusColor;
  background: $campusColorLight;
  border: 1px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  transition: all $transitionDurationFast $transitionEasing;
  white-space: nowrap;

  &:hover {
    background: #d6e8f5;
    border-color: $campusColor;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.input-row {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.chat-textarea {
  flex: 1;
  resize: none;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 1.5;
  border: 1px solid $borderColor;
  border-radius: $borderRadiusSmall;
  outline: none;
  font-family: inherit;
  transition: border-color $transitionDurationFast;
  max-height: 80px;
  overflow-y: auto;

  &:focus {
    border-color: $campusColor;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: $insTextColor;
  }
}

.send-btn,
.stop-btn {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $borderRadiusSmall;
  border: none;
  cursor: pointer;
  transition: all $transitionDurationFast $transitionEasing;
}

.send-btn {
  background: $campusColor;
  color: #fff;

  &:hover:not(:disabled) {
    background: $campusColorHover;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.stop-btn {
  background: $priceColor;
  color: #fff;

  &:hover {
    opacity: 0.85;
  }
}
</style>
