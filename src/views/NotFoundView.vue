<script setup>
import BaseButton from '../components/ui/BaseButton.vue'
</script>

<template>
  <div class="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
    <span class="text-5xl font-extrabold text-emerald-600">۴۰۴</span>
    <h1 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">صفحه مورد نظر یافت نشد</h1>
    <p class="mt-2 text-[15px] text-slate-500 dark:text-slate-400">
      آدرسی که وارد کرده‌اید وجود ندارد یا جابه‌جا شده است.
    </p>
    <BaseButton to="/" class="mt-8 cursor-pointer">بازگشت به خانه</BaseButton>
  </div>
</template>
