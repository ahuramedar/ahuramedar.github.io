<script setup>
import { categories } from '../data/categories'
import { getProductsByCategoryId } from '../utils/catalog'
import Breadcrumb from '../components/common/Breadcrumb.vue'
import CategoryCard from '../components/categories/CategoryCard.vue'

const breadcrumbItems = [{ label: 'خانه', to: '/' }, { label: 'دسته‌بندی‌ها' }]
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <h1 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">دسته‌بندی‌ها</h1>
    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
      قطعات الکترونیکی را از میان دسته‌بندی‌های زیر پیدا کنید.
    </p>

    <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :product-count="getProductsByCategoryId(category.id).length"
      />
    </div>
  </div>
</template>
