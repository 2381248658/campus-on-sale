import type { App, DirectiveBinding, ObjectDirective } from 'vue'

// ============================================
// 使用 Base64 灰色占位图
// ============================================

const defaultImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// ============================================
// 懒加载指令类型定义
// ============================================

interface ImgLazyElement extends HTMLImageElement {
  _observer?: IntersectionObserver
}

const imgLazy: ObjectDirective<ImgLazyElement, string> = {
  mounted(el: ImgLazyElement, binding: DirectiveBinding<string>) {
    // 1. 初始显示占位色
    el.src = defaultImg

    if (!window.IntersectionObserver) {
      el.src = binding.value
      return
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // 2. 图片进入视口，执行加载
          el.src = binding.value

          // 3. 立即停止观察
          observer.unobserve(el)

          // 4. 容错处理：彻底斩断断网时的 onerror 死循环
          el.onerror = () => {
            if (el.src !== defaultImg) {
              el.src = defaultImg
            }
            // 关键：报错一次后立即销毁错误监听，防止闪烁
            el.onerror = null
          }
        }
      })
    })

    observer.observe(el)

    // 保存 observer 实例用于清理（可选）
    el._observer = observer
  },

  // 组件卸载时清理 observer
  unmounted(el: ImgLazyElement) {
    if (el._observer) {
      el._observer.disconnect()
      el._observer = undefined
    }
  },
}

// ============================================
// 插件安装
// ============================================

export default {
  install(app: App) {
    app.directive('img-lazy', imgLazy)
  },
}
