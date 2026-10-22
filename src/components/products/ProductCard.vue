<script setup>
import { computed } from 'vue'
import ImageWithFallback from '../ui/ImageWithFallback.vue'
import { formatPrice } from '../../utils/format'

const props = defineProps({
  product: { type: Object, required: true },
})

const isAvailable = computed(() => props.product.availability === 'موجود')
</script>

<template>
  <RouterLink
    :to="`/products/${product.slug}`"
    class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-150 hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
  >
    <div class="aspect-square w-full">
      <ImageWithFallback :src="product.images?.[0]" :alt="product.title" />
    </div>

    <div class="flex flex-1 flex-col gap-2 p-3.5">
      <h3 class="line-clamp-2 min-h-[2.6em] text-sm font-medium text-slate-800 dark:text-slate-100">
        {{ product.title }}
      </h3>

      <div class="mt-auto flex items-center justify-between gap-2 pt-1">
        <span class="text-[15px] font-bold text-slate-900 dark:text-white">
          {{ formatPrice(product.price) }}
          <span class="text-xs font-normal text-slate-500 dark:text-slate-400">تومان</span>
        </span>
      </div>

      <div class="flex items-center gap-1.5 text-xs">
        <span
          class="h-1.5 w-1.5 rounded-full"
          :class="isAvailable ? 'bg-emerald-600' : 'bg-red-400 dark:bg-red-400'"
        />
        <span :class="isAvailable ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'">
          {{ product.availability }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>
