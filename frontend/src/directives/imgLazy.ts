import type { App, DirectiveBinding, ObjectDirective } from 'vue'

const defaultImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

interface ImgLazyElement extends HTMLImageElement {
  _observer?: IntersectionObserver
}

const imgLazy: ObjectDirective<ImgLazyElement, string> = {
  mounted(el: ImgLazyElement, binding: DirectiveBinding<string>) {
    el.src = defaultImg

    if (!window.IntersectionObserver) {
      el.src = binding.value
      return
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          el.src = binding.value
          observer.unobserve(el)
          el.onerror = () => {
            if (el.src !== defaultImg) el.src = defaultImg
            el.onerror = null
          }
        }
      })
    })

    observer.observe(el)
    el._observer = observer
  },

  unmounted(el: ImgLazyElement) {
    if (el._observer) {
      el._observer.disconnect()
      el._observer = undefined
    }
  },
}

export default {
  install(app: App) {
    app.directive('img-lazy', imgLazy)
  },
}
