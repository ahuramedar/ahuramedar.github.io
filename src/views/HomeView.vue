<script setup>
import { ref, computed } from 'vue'
import { categories } from '../data/categories'
import { getLatestProducts, getProductsByCategoryId, searchProducts } from '../utils/catalog'
import BaseButton from '../components/ui/BaseButton.vue'
import SearchBox from '../components/ui/SearchBox.vue'
import CategoryCard from '../components/categories/CategoryCard.vue'
import ProductGrid from '../components/products/ProductGrid.vue'
import EmptyState from '../components/common/EmptyState.vue'

const homeQuery = ref('')
const latestProducts = getLatestProducts(10)
const isSearching = computed(() => homeQuery.value.trim().length > 0)
const searchResults = computed(() => (isSearching.value ? searchProducts(homeQuery.value) : []))
</script>

<template>
  <!-- Hero -->
  <section
    class="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
    <svg
      class="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/2 text-slate-200 opacity-70 dark:text-slate-800 lg:block"
      viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="currentColor" stroke-width="1.5">
        <path d="M0 80h120v60h160v40h120" />
        <path d="M0 200h80v-50h140v90h180" />
        <path d="M0 320h160v-60h100v-80h140" />
        <circle cx="120" cy="80" r="4" fill="currentColor" stroke="none" />
        <circle cx="280" cy="140" r="4" fill="currentColor" stroke="none" />
        <circle cx="80" cy="150" r="4" fill="currentColor" stroke="none" />
        <circle cx="220" cy="240" r="4" fill="currentColor" stroke="none" />
        <circle cx="160" cy="260" r="4" fill="currentColor" stroke="none" />
        <circle cx="260" cy="180" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>

    <div class="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div class="max-w-2xl">
        <h1 class="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          بردهای مورد نیاز شما
        </h1>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
          انواع بردهای الکترونیکی را سریع و آسان پیدا کنید.
        </p>

        <div class="mt-8 max-w-xl">
          <SearchBox v-model="homeQuery" size="lg" placeholder="نام قطعه را جستجو کنید..." />
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <BaseButton to="/products" size="lg" class="cursor-pointer">مشاهده محصولات</BaseButton>
          <BaseButton to="/categories" variant="outline" size="lg" class="cursor-pointer">دسته‌بندی‌ها</BaseButton>
        </div>
      </div>
    </div>
  </section>

  <template v-if="isSearching">
    <section class="mx-auto max-w-7xl px-4 py-12">
      <h2 class="text-xl font-bold text-slate-900 dark:text-white">
        نتایج جستجو برای «{{ homeQuery }}»
      </h2>
      <div class="mt-6">
        <ProductGrid v-if="searchResults.length" :products="searchResults" />
        <EmptyState v-else title="محصولی مطابق جستجوی شما پیدا نشد."
          description="عبارت دیگری را امتحان کنید یا از میان دسته‌بندی‌ها محصول مورد نظر خود را پیدا کنید." />
      </div>
    </section>
  </template>

  <template v-else>
    <section class="mx-auto max-w-7xl px-4 py-12">
      <h2 class="text-xl font-bold text-slate-900 dark:text-white">دسته‌بندی محصولات</h2>
      <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category"
          :product-count="getProductsByCategoryId(category.id).length" />
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 pb-16">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white">جدیدترین محصولات</h2>
        <RouterLink to="/products"
          class="text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400">
          مشاهده همه محصولات
        </RouterLink>
      </div>
      <div class="mt-6">
        <ProductGrid :products="latestProducts" />
      </div>
    </section>
  </template>
</template>
