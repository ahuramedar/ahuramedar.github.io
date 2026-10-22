<script setup>
import { formatProductCount } from '../../utils/format'

defineProps({
  category: { type: Object, required: true },
  productCount: { type: Number, default: 0 },
})
</script>

<template>
  <RouterLink :to="`/categories/${category.slug}`"
    class="group flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-start justify-between gap-3">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
        <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
        </svg>
      </div>
      <span class="text-xs text-slate-500 dark:text-slate-400">{{ formatProductCount(productCount) }}</span>
    </div>

    <div>
      <h3 class="text-base font-semibold text-slate-900 dark:text-white">{{ category.title }}</h3>
      <p class="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{{ category.description }}</p>
    </div>

    <span class="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
      مشاهده محصولات
    </span>
  </RouterLink>
</template>
