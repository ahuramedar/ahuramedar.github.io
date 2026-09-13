<script setup>
import { ref, computed, watch } from 'vue'
import { getProductBySlug, getCategoryById } from '../utils/catalog'
import { formatPrice } from '../utils/format'
import { siteConfig } from '../config/site'
import Breadcrumb from '../components/common/Breadcrumb.vue'
import ImageWithFallback from '../components/ui/ImageWithFallback.vue'
import EmptyState from '../components/common/EmptyState.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const props = defineProps({
  slug: { type: String, required: true },
})

const product = computed(() => getProductBySlug(props.slug))
const category = computed(() => (product.value ? getCategoryById(product.value.categoryId) : null))
const isAvailable = computed(() => product.value?.availability === 'موجود')

const activeImageIndex = ref(0)
watch(product, () => (activeImageIndex.value = 0))

const breadcrumbItems = computed(() => [
  { label: 'خانه', to: '/' },
  ...(category.value ? [{ label: category.value.title, to: `/categories/${category.value.slug}` }] : []),
  { label: product.value ? product.value.title : '' },
])
</script>

<template>
  <div v-if="product" class="mx-auto max-w-6xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="mt-6 grid gap-8 lg:grid-cols-2">
      <!-- Gallery -->
      <div>
        <div class="aspect-square overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <ImageWithFallback :src="product.images?.[activeImageIndex]" :alt="product.title" />
        </div>
        <div v-if="product.images && product.images.length > 1" class="mt-3 flex gap-2">
          <button
            v-for="(image, index) in product.images"
            :key="image"
            type="button"
            @click="activeImageIndex = index"
            class="h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors"
            :class="index === activeImageIndex ? 'border-emerald-600' : 'border-slate-200 dark:border-slate-800'"
          >
            <ImageWithFallback :src="image" :alt="`${product.title} - تصویر ${index + 1}`" />
          </button>
        </div>
      </div>

      <!-- Summary -->
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">{{ product.title }}</h1>
        <p class="mt-2 text-[15px] text-slate-500 dark:text-slate-400">{{ product.shortDescription }}</p>

        <div class="mt-6 flex items-center gap-1.5 text-sm">
          <span class="h-2 w-2 rounded-full" :class="isAvailable ? 'bg-emerald-600' : 'bg-red-400 dark:bg-red-400'" />
          <span :class="isAvailable ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'">
            {{ product.availability }}
          </span>
        </div>

        <div class="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
          {{ formatPrice(product.price) }}
          <span class="text-base font-normal text-slate-500 dark:text-slate-400">تومان</span>
        </div>

        <div class="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-medium text-slate-700 dark:text-slate-200">برای خرید و اطلاعات بیشتر تماس بگیرید</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <BaseButton :href="`tel:${siteConfig.phone}`" size="sm">تماس تلفنی</BaseButton>
            <BaseButton :href="siteConfig.telegramUrl" target="_blank" rel="noopener" variant="outline" size="sm">پیام در تلگرام</BaseButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Unified description & specs section -->
    <div class="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
      <h2 class="text-lg font-bold text-slate-900 dark:text-white">توضیحات و مشخصات محصول</h2>
      <p class="mt-4 max-w-3xl whitespace-pre-line text-[15px] leading-8 text-slate-700 dark:text-slate-300">{{
        product.details.trim()
      }}</p>
    </div>
  </div>

  <div v-else class="mx-auto max-w-7xl px-4 py-16">
    <EmptyState title="محصول مورد نظر پیدا نشد." description="ممکن است این محصول حذف شده یا آدرس اشتباه باشد.">
      <BaseButton to="/products" variant="outline" class="mt-2 cursor-pointer">بازگشت به محصولات</BaseButton>
    </EmptyState>
  </div>
</template>
