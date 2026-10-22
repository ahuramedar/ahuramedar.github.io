<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { siteConfig } from '../../config/site'
import LogoMark from '../icons/LogoMark.vue'
import SearchBox from '../ui/SearchBox.vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

const router = useRouter()

const headerQuery = ref('')
const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)

const navItems = [
  { label: 'خانه', to: '/' },
  { label: 'دسته‌بندی‌ها', to: '/categories' },
  { label: 'همه محصولات', to: '/products' },
  { label: 'ارتباط با ما', to: '/contact' },
]

function submitSearch(query) {
  const q = query.trim()
  if (!q) return
  router.push({ path: '/search', query: { q } })
  mobileSearchOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
    <!-- Desktop -->
    <div class="mx-auto hidden max-w-7xl items-center gap-6 px-4 py-3 lg:flex">
      <RouterLink to="/" class="flex shrink-0 items-center gap-2">
        <LogoMark class="h-8 w-8" />
        <span class="text-lg font-bold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
      </RouterLink>

      <div class="max-w-md flex-1">
        <SearchBox v-model="headerQuery" @submit="submitSearch" />
      </div>

      <nav class="flex shrink-0 items-center gap-1">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
          class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          active-class="!text-emerald-700 dark:!text-emerald-400">
          {{ item.label }}
        </RouterLink>
      </nav>

      <ThemeToggle />
    </div>

    <!-- Mobile -->
    <div class="lg:hidden">
      <div class="flex items-center gap-2 px-4 py-3">
        <button type="button" @click="mobileMenuOpen = true" aria-label="باز کردن منو"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <RouterLink to="/" class="flex flex-1 items-center gap-2">
          <LogoMark class="h-7 w-7" />
          <span class="font-bold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
        </RouterLink>

        <button type="button" @click="mobileSearchOpen = !mobileSearchOpen" aria-label="جستجو"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <ThemeToggle />
      </div>

      <Transition enter-active-class="transition-all duration-150" enter-from-class="opacity-0 -translate-y-1"
        leave-active-class="transition-all duration-100" leave-to-class="opacity-0 -translate-y-1">
        <div v-if="mobileSearchOpen" class="border-t border-slate-200 px-4 py-3 dark:border-slate-800">
          <SearchBox v-model="headerQuery" @submit="submitSearch" />
        </div>
      </Transition>
    </div>

    <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />
  </header>
</template>
