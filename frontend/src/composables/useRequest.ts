import { ref, type Ref } from 'vue'
import { ElMessage } from 'element-plus'

interface UseRequestOptions<T> {
  immediate?: boolean
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
  errorMessage?: string
}

interface UseRequestReturn<T> {
  data: Ref<T | undefined>
  loading: Ref<boolean>
  error: Ref<Error | null>
  execute: () => Promise<void>
}

export function useRequest<T>(
  requestFn: () => Promise<T>,
  options: UseRequestOptions<T> = {}
): UseRequestReturn<T> {
  const data = ref<T>() as Ref<T | undefined>
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const execute = async (): Promise<void> => {
    loading.value = true
    error.value = null
    try {
      const result = await requestFn()
      data.value = result
      options.onSuccess?.(result)
    } catch (err) {
      error.value = err as Error
      const msg = options.errorMessage || '请求失败，请稍后重试'
      ElMessage.error(msg)
      options.onError?.(error.value)
    } finally {
      loading.value = false
    }
  }

  if (options.immediate !== false) {
    execute()
  }

  return { data, loading, error, execute }
}
