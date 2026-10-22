<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: { type: Array, required: true },
})
</script>

<template>
  <div class="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
