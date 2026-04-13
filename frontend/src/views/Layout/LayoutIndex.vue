<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/categoryStore'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <router-view />
    <LayoutFooter />
  </div>
</template>
