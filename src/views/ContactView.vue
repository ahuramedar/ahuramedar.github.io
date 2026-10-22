<script setup>
import { siteConfig } from '../config/site'
import Breadcrumb from '../components/common/Breadcrumb.vue'

const breadcrumbItems = [{ label: 'خانه', to: '/' }, { label: 'ارتباط با ما' }]
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-8">
    <Breadcrumb :items="breadcrumbItems" />

    <h1 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">ارتباط با ما</h1>
    <p class="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
      برای اطلاع از قیمت نهایی، موجودی دقیق یا هر سوال دیگری درباره محصولات، از طریق راه‌های زیر با ما در تماس باشید.
    </p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2">
      <a :href="`tel:${siteConfig.phone}`"
        class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-600/40 dark:border-slate-800 dark:bg-slate-900">
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </span>
        <span>
          <span class="block text-sm text-slate-500 dark:text-slate-400">تماس تلفنی</span>
          <span class="block font-semibold text-slate-900 dark:text-white" dir="ltr">{{ siteConfig.phone }}</span>
        </span>
      </a>

      <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener"
        class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-600/40 dark:border-slate-800 dark:bg-slate-900">
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </span>
        <span>
          <span class="block text-sm text-slate-500 dark:text-slate-400">اینستاگرام</span>
          <span class="block font-semibold text-slate-900 dark:text-white">{{ siteConfig.instagram }}</span>
        </span>
      </a>
      
      <a :href="siteConfig.telegramUrl" target="_blank" rel="noopener"
        class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-600/40 dark:border-slate-800 dark:bg-slate-900">
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5"
            viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
          </svg>
        </span>
        <span>
          <span class="block text-sm text-slate-500 dark:text-slate-400">تلگرام</span>
          <span class="block font-semibold text-slate-900 dark:text-white">{{ siteConfig.telegram }}</span>
        </span>
      </a>
    </div>
  </div>
</template>
