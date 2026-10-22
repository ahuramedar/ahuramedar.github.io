<script setup>
import { useTheme } from '../../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button type="button" @click="toggleTheme"
    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
    :aria-label="isDark ? 'فعال‌سازی حالت روشن' : 'فعال‌سازی حالت تیره'">
    <svg v-if="isDark" viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8" />
      <g stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path
          d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </g>
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
      <path d="M20.5 14.7A8.5 8.5 0 1 1 9.3 3.5a7 7 0 0 0 11.2 11.2Z" stroke="currentColor" stroke-width="1.8"
        stroke-linejoin="round" />
    </svg>
  </button>
</template>