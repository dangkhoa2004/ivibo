<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
    <div class="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
      <h1 class="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
        LỖI
      </h1>
      <img src="/images/error/404.svg" alt="404" class="dark:hidden" />
      <img src="/images/error/404-dark.svg" alt="404" class="hidden dark:block" />
      <p class="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
        Chúng tôi không thể tìm thấy trang mà bạn đang tìm kiếm!
      </p>
      <router-link to="/"
        class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
        Quay lại trang chủ
      </router-link>
    </div>
    <p class="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
      &copy; {{ currentYear }} - TailAdmin
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>
