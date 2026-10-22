<script setup>
import { ref, computed } from 'vue'
import { getCategoryBySlug, getProductsByCategoryId, searchProducts } from '../utils/catalog'
import Breadcrumb from '../components/common/Breadcrumb.vue'
import SearchBox from '../components/ui/SearchBox.vue'
import ProductGrid from '../components/products/ProductGrid.vue'
import EmptyState from '../components/common/EmptyState.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const props = defineProps({
  slug: { type: String, required: true },
})

const category = computed(() => getCategoryBySlug(props.slug))
const categoryProducts = computed(() => (category.value ? getProductsByCategoryId(category.value.id) : []))

const query = ref('')
const visibleProducts = computed(() =>
  query.value.trim() ? searchProducts(query.value, categoryProducts.value) : categoryProducts.value,
)

const breadcrumbItems = computed(() => [
  { label: 'خانه', to: '/' },
  { label: 'دسته‌بندی‌ها', to: '/categories' },
  { label: category.value ? category.value.title : '' },
])
</script>

<template>
  <div v-if="category" class="mx-auto max-w-7xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <h1 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{{ category.title }}</h1>
    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ category.description }}</p>

    <div class="mt-6 max-w-md">
      <SearchBox v-model="query" :placeholder="`جستجو در ${category.title}...`" />
    </div>

    <div class="mt-8">
      <ProductGrid v-if="visibleProducts.length" :products="visibleProducts" />
      <EmptyState
        v-else-if="query.trim()"
        title="محصولی مطابق جستجوی شما پیدا نشد."
        description="عبارت دیگری را در همین دسته‌بندی امتحان کنید."
      />
      <EmptyState
        v-else
        title="این دسته‌بندی هنوز محصولی ندارد."
        description="به‌زودی محصولات جدید در این بخش اضافه خواهند شد."
      />
    </div>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-16">
    <EmptyState title="دسته‌بندی مورد نظر پیدا نشد." description="ممکن است این دسته‌بندی حذف شده یا آدرس اشتباه باشد.">
      <BaseButton to="/categories" variant="outline" class="mt-2">بازگشت به دسته‌بندی‌ها</BaseButton>
    </EmptyState>
  </div>
</template>
