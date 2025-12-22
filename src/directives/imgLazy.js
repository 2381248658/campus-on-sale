// 使用 Base64 灰色占位图
const defaultImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export default {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // 1. 初始显示占位色
        el.src = defaultImg

        if (!window.IntersectionObserver) {
          el.src = binding.value
          return
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
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
      },
    })
  },
}
