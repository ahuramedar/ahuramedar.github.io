<script setup>
import { siteConfig } from '../../config/site'
import LogoMark from '../icons/LogoMark.vue'

defineProps({
  open: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

const navItems = [
  { label: 'خانه', to: '/' },
  { label: 'دسته‌بندی‌ها', to: '/categories' },
  { label: 'همه محصولات', to: '/products' },
  { label: 'ارتباط با ما', to: '/contact' },
]
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-50 bg-slate-900/50" @click="emit('close')" />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-200 ease-out"
      enter-from-class="translate-x-full"
      leave-active-class="transition-transform duration-150 ease-in"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="open"
        class="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-white shadow-xl dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-800">
          <div class="flex items-center gap-2">
            <LogoMark class="h-7 w-7" />
            <span class="font-semibold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
          </div>
          <button
            type="button"
            @click="emit('close')"
            aria-label="بستن منو"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            @click="emit('close')"
            class="rounded-lg px-4 py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
            active-class="!text-emerald-700 !bg-emerald-50 dark:!text-emerald-400 dark:!bg-emerald-500/10"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>
