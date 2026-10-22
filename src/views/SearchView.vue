<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { searchProducts } from '../utils/catalog'
import Breadcrumb from '../components/common/Breadcrumb.vue'
import SearchBox from '../components/ui/SearchBox.vue'
import ProductGrid from '../components/products/ProductGrid.vue'
import EmptyState from '../components/common/EmptyState.vue'

const route = useRoute()
const router = useRouter()

const query = ref(typeof route.query.q === 'string' ? route.query.q : '')

watch(
  () => route.query.q,
  (q) => {
    query.value = typeof q === 'string' ? q : ''
  },
)

function onSubmit(q) {
  router.replace({ path: '/search', query: { q } })
}

const results = computed(() => searchProducts(query.value))
const breadcrumbItems = [{ label: 'خانه', to: '/' }, { label: 'جستجو' }]
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <h1 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">جستجوی محصولات</h1>

    <div class="mt-6 max-w-md">
      <SearchBox v-model="query" @submit="onSubmit" placeholder="جستجوی نام قطعه..." />
    </div>

    <div class="mt-8">
      <template v-if="query.trim()">
        <p class="mb-6 text-sm text-slate-500 dark:text-slate-400">
          نتایج جستجو برای «{{ query }}»
        </p>
        <ProductGrid v-if="results.length" :products="results" />
        <EmptyState
          v-else
          title="محصولی مطابق جستجوی شما پیدا نشد."
          description="عبارت دیگری را امتحان کنید یا از میان دسته‌بندی‌ها محصول مورد نظر خود را پیدا کنید."
        />
      </template>
      <EmptyState
        v-else
        title="عبارت مورد نظر خود را جستجو کنید."
        description="می‌توانید بر اساس نام قطعه یا دسته‌بندی جستجو کنید."
      />
    </div>
  </div>
</template>
