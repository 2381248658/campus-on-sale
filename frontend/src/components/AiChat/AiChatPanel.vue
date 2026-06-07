<!--
  @file AI 商品导购助手面板
  @description 可折叠浮窗，集成对话历史、流式输出、快捷提问
-->
<script setup lang="ts">
import { ref, nextTick, watch, computed } from 'vue'
import { useStreamChat, type GoodsContext } from '@/composables/useStreamChat'
import AiChatMessage from './AiChatMessage.vue'
import AiChatInput from './AiChatInput.vue'

interface Props {
  /** 商品上下文 */
  goodsContext: GoodsContext | null
}

const props = defineProps<Props>()

/** 面板展开/收起 */
const isOpen = ref(false)

/** 确认弹窗状态 */
const showClearConfirm = ref(false)

/** 对话容器引用 */
const chatContainer = ref<HTMLElement | null>(null)

/** 将 prop 转为 ref 传给 useStreamChat */
const contextRef = computed(() => props.goodsContext)

/** 记录上一个商品名称，用于检测商品切换 */
let lastGoodsName = props.goodsContext?.name || ''

/** 商品切换时自动清空对话 */
watch(
  () => props.goodsContext?.name,
  (newName) => {
    if (newName && newName !== lastGoodsName && messages.value.length > 0) {
      clearHistory()
    }
    lastGoodsName = newName || ''
  },
)

/** useStreamChat 实例 */
const { messages, isStreaming, sendMessage, stopStreaming, clearHistory } = useStreamChat({
  context: contextRef,
})

/** 切换面板 */
const togglePanel = () => {
  isOpen.value = !isOpen.value
}

/** 发送消息 */
const handleSend = (text: string) => {
  sendMessage(text)
}

/** 确认清空对话 */
const handleClearConfirm = () => {
  clearHistory()
  showClearConfirm.value = false
}

/** 取消清空 */
const handleClearCancel = () => {
  showClearConfirm.value = false
}

/** 滚动到底部 */
const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

/** 消息变化时自动滚动 */
watch(
  () => messages.value.length,
  () => scrollToBottom(),
)

/** 流式输出时持续滚动 */
watch(
  () => messages.value[messages.value.length - 1]?.content,
  () => {
    if (isStreaming.value) scrollToBottom()
  },
)
</script>

<template>
  <div class="ai-chat-panel">
    <!-- 悬浮触发按钮 -->
    <button class="trigger-btn" :class="{ active: isOpen }" @click="togglePanel">
      <svg
        v-if="!isOpen"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <svg
        v-else
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    <!-- 聊天面板 -->
    <Transition name="panel">
      <div v-if="isOpen" class="chat-panel">
        <!-- 头部 -->
        <div class="panel-header">
          <div class="header-info">
            <span class="ai-badge">AI</span>
            <div>
              <h4 class="header-title">商品导购助手</h4>
              <p class="header-sub" v-if="goodsContext?.name">
                {{ goodsContext.name }}
              </p>
            </div>
          </div>
          <button class="clear-btn" @click="showClearConfirm = true" title="清空对话">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="3 6 5 6 21 6" />
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              />
            </svg>
          </button>
        </div>

        <!-- 消息列表 -->
        <div ref="chatContainer" class="chat-messages">
          <!-- 空状态 -->
          <div v-if="!messages.length" class="empty-state">
            <div class="empty-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <p class="empty-text">你好！我是 AI 导购助手</p>
            <p class="empty-hint">可以问我关于这个商品的任何问题</p>
          </div>

          <!-- 消息列表 -->
          <template v-for="msg in messages" :key="msg.id">
            <AiChatMessage
              :message="msg"
              :is-streaming="isStreaming && msg.id === messages[messages.length - 1]?.id"
            />
          </template>
        </div>

        <!-- 输入区域 -->
        <AiChatInput :is-streaming="isStreaming" @send="handleSend" @stop="stopStreaming" />

        <!-- 清空确认弹窗 -->
        <Teleport to="body">
          <Transition name="fade">
            <div v-if="showClearConfirm" class="confirm-overlay" @click.self="handleClearCancel">
              <div class="confirm-dialog">
                <p class="confirm-text">确定要清空所有对话记录吗？</p>
                <div class="confirm-actions">
                  <button class="confirm-btn cancel" @click="handleClearCancel">取消</button>
                  <button class="confirm-btn danger" @click="handleClearConfirm">确认清空</button>
                </div>
              </div>
            </div>
          </Transition>
        </Teleport>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.ai-chat-panel {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: $zIndexFixed;
}

/* ========== 触发按钮 ========== */
.trigger-btn {
  width: 52px;
  height: 52px;
  border-radius: $borderRadiusFull;
  border: none;
  background: linear-gradient(135deg, $campusColor, #3399d4);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 91, 172, 0.35);
  transition: all $transitionDuration $transitionEasing;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 24px rgba(0, 91, 172, 0.45);
  }

  &.active {
    background: #fff;
    color: $campusColor;
    box-shadow: $cardShadow;
  }
}

/* ========== 聊天面板 ========== */
.chat-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 380px;
  height: 520px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: $borderRadius;
  box-shadow: 0 8px 40px rgba(0, 91, 172, 0.15);
  overflow: hidden;
}

/* ========== 面板头部 ========== */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, $campusColor, #1a7ab5);
  color: #fff;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: $borderRadiusFull;
  background: rgba(255, 255, 255, 0.2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.header-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.header-sub {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.8;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.clear-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  border-radius: $borderRadiusSmall;
  color: #fff;
  cursor: pointer;
  transition: background $transitionDurationFast;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* ========== 消息列表 ========== */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0d5dd;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

/* ========== 空状态 ========== */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: $insTextColor;
}

.empty-icon {
  margin-bottom: 12px;
  color: $campusColor;
  opacity: 0.4;
}

.empty-text {
  font-size: 14px;
  color: $subTextColor;
  margin: 0;
}

.empty-hint {
  font-size: 12px;
  margin-top: 4px;
}

/* ========== 面板过渡动画 ========== */
.panel-enter-active {
  animation: panel-in 0.3s $transitionEasing;
}

.panel-leave-active {
  animation: panel-in 0.25s $transitionEasing reverse;
}

@keyframes panel-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ========== 确认弹窗 ========== */
.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $zIndexFixed + 10;
}

.confirm-dialog {
  background: #fff;
  border-radius: $borderRadius;
  padding: 24px;
  width: 280px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.confirm-text {
  margin: 0 0 20px;
  font-size: 14px;
  color: $textColor;
  text-align: center;
}

.confirm-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.confirm-btn {
  padding: 8px 20px;
  border-radius: $borderRadiusSmall;
  border: none;
  font-size: 13px;
  cursor: pointer;
  transition: all $transitionDurationFast;

  &.cancel {
    background: #f0f0f0;
    color: $subTextColor;

    &:hover {
      background: #e0e0e0;
    }
  }

  &.danger {
    background: $priceColor;
    color: #fff;

    &:hover {
      opacity: 0.85;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
