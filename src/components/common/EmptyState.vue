<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700">
    <svg viewBox="0 0 24 24" fill="none" class="h-10 w-10 text-slate-300 dark:text-slate-600" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <p class="text-base font-medium text-slate-700 dark:text-slate-200">{{ title }}</p>
    <p v-if="description" class="max-w-sm text-sm text-slate-500 dark:text-slate-400">{{ description }}</p>
    <slot />
  </div>
</template>
