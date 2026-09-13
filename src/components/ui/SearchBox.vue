<script setup>
const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'جستجوی نام قطعه...' },
  size: { type: String, default: 'md' }, // 'md' | 'lg'
})
const emit = defineEmits(['update:modelValue', 'submit'])

function onSubmit() {
  emit('submit', props.modelValue)
}
</script>

<template>
  <form role="search" @submit.prevent="onSubmit" class="relative w-full">
    <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400"></span>

    <input dir="rtl" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="w-full rounded-lg border border-slate-300 bg-white pe-11 ps-4 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-500"
      :class="size === 'lg' ? 'h-14 text-base' : 'h-11'" />

    <button v-if="modelValue" type="button" @click="$emit('update:modelValue', '')" aria-label="پاک کردن جستجو"
      class="absolute inset-y-0 left-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
      <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  </form>
</template>
