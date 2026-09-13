<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
})

const errored = ref(false)
watch(() => props.src, () => (errored.value = false))
</script>

<template>
  <div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800">
    <img v-if="src && !errored" :src="src" :alt="alt" @error="errored = true" class="h-full w-full object-cover"
      loading="lazy" />

    <div v-else class="flex flex-col items-center gap-2 p-4 text-slate-300 dark:text-slate-600 ">
      <svg viewBox="0 0 40 40" fill="none" class="h-10 w-10" aria-hidden="true">
        <rect x="11" y="11" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2" />
        <rect x="16" y="16" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="2" />
        <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M15 11V5" />
          <path d="M20 11V5" />
          <path d="M25 11V5" />
          <path d="M15 35V29" />
          <path d="M20 35V29" />
          <path d="M25 35V29" />
          <path d="M11 15H5" />
          <path d="M11 20H5" />
          <path d="M11 25H5" />
          <path d="M35 15H29" />
          <path d="M35 20H29" />
          <path d="M35 25H29" />
        </g>
      </svg>
    </div>
  </div>
</template>
