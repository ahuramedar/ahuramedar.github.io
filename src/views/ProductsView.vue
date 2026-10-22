<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'
import { categories } from '../data/categories'
import { searchProducts } from '../utils/catalog'
import Breadcrumb from '../components/common/Breadcrumb.vue'
import SearchBox from '../components/ui/SearchBox.vue'
import ProductGrid from '../components/products/ProductGrid.vue'
import EmptyState from '../components/common/EmptyState.vue'

const breadcrumbItems = [{ label: 'خانه', to: '/' }, { label: 'همه محصولات' }]

const query = ref('')
const visibleProducts = computed(() => (query.value.trim() ? searchProducts(query.value, products) : products))
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <h1 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">همه محصولات</h1>

    <div class="mt-6 max-w-md">
      <SearchBox v-model="query" placeholder="جستجو در همه محصولات..." />
    </div>

    <div class="mt-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      <RouterLink v-for="category in categories" :key="category.id" :to="`/categories/${category.slug}`"
        class="shrink-0 rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-600 transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400">
        {{ category.title }}
      </RouterLink>
    </div>

    <div class="mt-8">
      <ProductGrid v-if="visibleProducts.length" :products="visibleProducts" />
      <EmptyState v-else title="محصولی مطابق جستجوی شما پیدا نشد."
        description="عبارت دیگری را امتحان کنید یا از میان دسته‌بندی‌ها محصول مورد نظر خود را پیدا کنید." />
    </div>
  </div>
</template>
