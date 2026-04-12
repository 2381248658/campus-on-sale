<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'
import { ref, onMounted, onUnmounted } from 'vue'

// ============================================
// State
// ============================================

const showStick = ref<boolean>(false)
const offsetTop = 80

// ============================================
// Methods
// ============================================

const handleScroll = (): void => {
  showStick.value = window.scrollY >= offsetTop
}

// ============================================
// Lifecycle
// ============================================

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const categoryStore = useCategoryStore()
</script>

<style scoped lang="scss">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  transform: translateY(-100%);
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 1240px;
    height: 80px;
  }

  .logo {
    width: 180px;
    height: 80px;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: url('@/assets/images/logo.png') no-repeat center 10px / contain;
  }

  .app-header-nav {
    flex: 1;
    display: flex;
    padding-left: 30px;
    align-items: center;

    li {
      margin-right: 10px;
      text-align: center;
      min-width: 80px;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        color: #333;
        transition: all 0.2s;

        &:hover {
          color: $campusColor;
          border-bottom: 2px solid $campusColor;
        }
      }

      .active {
        color: $campusColor;
        border-bottom: 2px solid $campusColor;
        font-weight: bold;
      }
    }
  }

  .right {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-left: 2px solid #f2f2f2;

    a {
      display: inline-block;
      margin-left: 25px;
      font-size: 15px;
      color: #666;
      transition: all 0.2s;

      &:hover {
        color: $campusColor;
      }
    }
  }
}
</style>
