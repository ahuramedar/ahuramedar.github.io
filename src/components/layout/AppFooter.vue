<script setup>
import { siteConfig } from '../../config/site'
import { categories } from '../../data/categories'
import LogoMark from '../icons/LogoMark.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
    <div class="mx-auto max-w-7xl px-4 py-12">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <RouterLink to="/" class="flex items-center gap-2">
            <LogoMark class="h-8 w-8" />
            <span class="text-lg font-bold text-slate-900 dark:text-white">{{ siteConfig.shortName }}</span>
          </RouterLink>
          <p class="mt-3 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
            {{ siteConfig.description }}
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white">دسترسی سریع</h4>
          <ul class="mt-4 flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <RouterLink to="/" class="hover:text-emerald-700 dark:hover:text-emerald-400">خانه</RouterLink>
            </li>
            <li>
              <RouterLink to="/categories" class="hover:text-emerald-700 dark:hover:text-emerald-400">دسته‌بندی‌ها
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="hover:text-emerald-700 dark:hover:text-emerald-400">همه محصولات
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="hover:text-emerald-700 dark:hover:text-emerald-400">ارتباط با ما
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white">دسته‌بندی‌ها</h4>
          <ul class="mt-4 flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li v-for="category in categories.slice(0, 5)" :key="category.id">
              <RouterLink :to="`/categories/${category.slug}`"
                class="hover:text-emerald-700 dark:hover:text-emerald-400">
                {{ category.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row justify-center sm:items-center sm:justify-between dark:border-slate-800">
        <p class="text-xs text-slate-400 dark:text-slate-500">
          © {{ year }} {{ siteConfig.shortName }}. تمامی حقوق محفوظ است.
        </p>

        <div
          class="flex items-end gap-4 text-sm text-slate-500 dark:text-slate-400 flex-col md:flex-row md:items-center">

          <a :href="`tel:${siteConfig.phone}`" dir="ltr" class="hover:text-emerald-700 dark:hover:text-emerald-400"><svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="inline-block bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg> {{
              siteConfig.phone }}</a>

          <a :href="siteConfig.telegramUrl" target="_blank" rel="noopener"
            class="hover:text-emerald-700 dark:hover:text-emerald-400"> {{ siteConfig.telegram }} <svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="inline-block bi bi-telegram" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
            </svg></a>

          <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener"
            class="hover:text-emerald-700 dark:hover:text-emerald-400"> {{ siteConfig.instagram }} <svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="inline-block bi bi-telegram" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
            </svg></a>
        </div>
      </div>
    </div>
  </footer>
</template>
