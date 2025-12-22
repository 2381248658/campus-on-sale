<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'

</script>

<template>
  <main class="home-container">
    <div class="container">
      <div class="home-entry">
        <HomeCategory />
        <HomeBanner />
      </div>
    </div>
    <div class="home-floor">
      <HomeNew />
      <HomeHot />
      <HomeProduct />
    </div>
  </main>
</template>

<style scoped lang="scss">
.home-container {
  animation: fadeIn 0.5s ease-in;
}

.home-entry {
  display: flex;
  position: relative;
  background-color: #fff;
  margin-bottom: 20px;
}

.home-floor {
  background-color: #f5f5f5;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
