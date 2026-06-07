/**
 * @file AI 流式对话 Composable
 * @description 管理 AI 对话历史、流式输出状态，提供发送消息、中断、清空等方法
 */
import { ref, readonly, type Ref, type DeepReadonly } from 'vue'
import { sseRequest } from '@/utils/sse'

/** 聊天消息 */
export interface ChatMessage {
  /** 角色：用户 / 助手 */
  role: 'user' | 'assistant'
  /** 消息内容 */
  content: string
}

/** 商品上下文（传递给 AI 的商品信息） */
export interface GoodsContext {
  /** 商品名称 */
  name: string
  /** 商品价格 */
  price: number
  /** 商品原价 */
  oldPrice?: number
  /** 商品描述 */
  desc?: string
  /** 商品分类 */
  category?: string
}

/** useStreamChat 配置选项 */
export interface UseStreamChatOptions {
  /** 商品上下文 */
  context: Ref<GoodsContext | null>
  /** AI 接口地址，默认使用环境变量 */
  apiUrl?: string
}

export function useStreamChat(options: UseStreamChatOptions) {
  const { context, apiUrl } = options

  /** 对话历史 */
  const messages = ref<ChatMessage[]>([]) as Ref<ChatMessage[]>
  /** 当前流式输出文本 */
  const streamingText = ref('')
  /** 是否正在流式输出 */
  const isStreaming = ref(false)
  /** AbortController，用于取消请求 */
  let abortController: AbortController | null = null

  /** AI 接口地址 */
  const baseUrl = apiUrl || import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
  // 去除末尾斜杠，避免拼接时产生双斜杠
  const normalizedBaseUrl = baseUrl.replace(/\/$/, '')
  const chatUrl = `${normalizedBaseUrl}/ai/chat`

  /**
   * 发送消息
   * @param text - 用户输入的文本
   */
  const sendMessage = async (text: string) => {
    if (!text.trim() || isStreaming.value) return

    // 添加用户消息
    messages.value.push({ role: 'user', content: text })

    // 准备 AI 消息占位
    messages.value.push({ role: 'assistant', content: '' })
    const aiMessageIndex = messages.value.length - 1

    // 重置流式状态
    streamingText.value = ''
    isStreaming.value = true
    abortController = new AbortController()

    await sseRequest({
      url: chatUrl,
      method: 'POST',
      body: {
        message: text,
        context: context.value,
      },
      signal: abortController.signal,
      onToken: (token) => {
        streamingText.value += token
        messages.value[aiMessageIndex].content = streamingText.value
      },
      onComplete: () => {
        isStreaming.value = false
        // 保留 streamingText，UI 可根据 isStreaming 显示打字机效果
        // 完整内容已存储在 messages 中
      },
      onError: (error) => {
        console.error('AI 对话失败:', error)
        messages.value[aiMessageIndex].content = '抱歉，发生了错误，请稍后重试。'
        isStreaming.value = false
        streamingText.value = ''
      },
    })
  }

  /**
   * 停止流式输出
   */
  const stopStreaming = () => {
    if (abortController && isStreaming.value) {
      abortController.abort()
      isStreaming.value = false
      // 用户主动中断时，streamingText 内容已同步到 messages，可清空
      streamingText.value = ''
    }
  }

  /**
   * 清空对话历史
   */
  const clearHistory = () => {
    messages.value = []
    streamingText.value = ''
    stopStreaming()
  }

  return {
    messages: readonly(messages) as DeepReadonly<Ref<ChatMessage[]>>,
    streamingText: readonly(streamingText),
    isStreaming: readonly(isStreaming),
    sendMessage,
    stopStreaming,
    clearHistory,
  }
}
