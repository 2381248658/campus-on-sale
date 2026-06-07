/**
 * @file SSE 流式请求封装
 * @description 基于 fetch + ReadableStream 实现 SSE 流式请求，支持取消、错误处理
 */

/** SSE 配置选项 */
export interface SSEOptions {
  /** 请求 URL */
  url: string
  /** 请求方法，默认 POST */
  method?: 'POST' | 'GET'
  /** 请求头 */
  headers?: Record<string, string>
  /** 请求体 */
  body?: unknown
  /** 每次接收到 token 时的回调 */
  onToken?: (token: string) => void
  /** 流式输出完成时的回调 */
  onComplete?: (fullText: string) => void
  /** 发生错误时的回调 */
  onError?: (error: Error) => void
  /** AbortController，用于取消请求 */
  signal?: AbortSignal
}

/** SSE 流式请求 */
export async function sseRequest(options: SSEOptions): Promise<void> {
  const { url, method = 'POST', headers = {}, body, onToken, onComplete, onError, signal } = options

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    if (!response.body) {
      throw new Error('Response body is null')
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let fullText = ''

    loop: while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      buffer += decoder.decode(value, { stream: true })

      // 解析 SSE 格式：data: xxx\n\n
      const lines = buffer.split('\n')
      buffer = lines.pop() || '' // 保留不完整的最后一行

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const token = line.slice(6)
          if (token === '[DONE]') {
            // 收到结束标记，跳出循环
            break loop
          }
          fullText += token
          onToken?.(token)
        }
      }
    }

    onComplete?.(fullText)
  } catch (error) {
    // 用户主动取消不触发错误回调
    if (error instanceof Error && error.name === 'AbortError') {
      return
    }
    const normalizedError = error instanceof Error ? error : new Error(String(error))
    if (onError) {
      onError(normalizedError)
    } else {
      // 未提供回调时抛出，让调用者自行处理
      throw normalizedError
    }
  }
}
