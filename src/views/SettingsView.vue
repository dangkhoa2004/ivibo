<template>
  <div class="h-screen flex flex-col bg-white text-gray-900">
    <!-- Nội dung cuộn -->
    <div class="flex-1 overflow-y-auto pb-[64px]">
      <!-- Header -->
      <h1 class="text-center text-lg font-semibold py-4">Cài đặt</h1>

      <!-- Avatar & User Info -->
      <div class="flex flex-col items-center mt-2 mb-6">
        <img src="https://i.imgur.com/XYvDey5.jpeg" alt="Avatar" class="w-20 h-20 rounded-xl object-cover" />
        <p class="mt-3 text-base font-semibold">Đăng Khoa</p>
        <p class="text-sm text-gray-500">@orsi074</p>
      </div>

      <!-- Settings list -->
      <div class="divide-y divide-gray-200 text-sm">
        <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50">
          <span>Thông tin cá nhân</span>
          <span class="text-gray-400">›</span>
        </button>
        <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50">
          <span>Mối quan hệ</span>
          <span class="text-gray-400">›</span>
        </button>
        <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50">
          <span>Cài đặt & quyền riêng tư</span>
          <span class="text-gray-400">›</span>
        </button>
        <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50">
          <span>Trợ giúp & hỗ trợ</span>
          <span class="text-gray-400">›</span>
        </button>
        <button class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50 text-red-500">
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>

    <!-- Thanh điều hướng dưới cố định -->
    <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
  </div>
</template>
<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
</script>
