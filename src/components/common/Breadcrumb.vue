<script setup>
// items: [{ label, to }] — the last item is treated as the current page (no link).
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <nav aria-label="مسیر صفحه" class="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
    <template v-for="(item, index) in items" :key="index">
      <RouterLink v-if="item.to && index !== items.length - 1" :to="item.to"
        class="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400">
        {{ item.label }}
      </RouterLink>
      <span v-else class="text-slate-700 dark:text-slate-200">{{ item.label }}</span>
      <span v-if="index !== items.length - 1" class="text-slate-300 dark:text-slate-600">/</span>
    </template>
  </nav>
</template>
