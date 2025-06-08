<template>
  <div class="h-screen flex flex-col bg-white text-gray-900">
    <!-- Nội dung cuộn -->
    <div class="flex-1 overflow-y-auto pb-[64px]">
      <!-- Header -->
      <h1 class="text-center text-lg font-semibold py-4">Cài đặt</h1>

      <!-- Avatar & User Info -->
      <div class="flex flex-col items-center mt-2 mb-6">
        <img src="@/assets/img/owner.avif" alt="Avatar" class="w-20 h-20 rounded-[32px] object-cover" />
        <p class="mt-3 text-xl font-bold">Đăng Khoa</p>
        <p class="text-sm text-gray-500">@orsi074</p>
      </div>

      <!-- Settings list -->
      <div class="divide-y divide-gray-200 text-base">
        <router-link to="/infomation"
          class="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-gray-50">
          <span>Thông tin cá nhân</span>
          <span class="text-gray-400 text-3xl">›</span>
        </router-link>
        <router-link to="/relationships"
          class="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-gray-50">
          <span>Mối quan hệ</span>
          <span class="text-gray-400 text-3xl">›</span>
        </router-link>
        <router-link to="/privacy-settings"
          class="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-gray-50">
          <span>Cài đặt & quyền riêng tư</span>
          <span class="text-gray-400 text-3xl">›</span>
        </router-link>
        <router-link to="/contact-support"
          class="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-gray-50">
          <span>Trợ giúp & hỗ trợ</span>
          <span class="text-gray-400 text-3xl">›</span>
        </router-link>
        <button @click="openConfirm"
          class="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50 text-red-500 cursor-pointer">
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
    <!-- Confirm Modal -->
    <div v-if="showConfirm" class="fixed inset-0 flex items-center justify-center z-50"
      style="background-color: rgba(000, 000, 000, 0.9);">
      <div class="bg-white rounded-2xl w-[85%] max-w-sm p-6 text-center space-y-4">
        <h2 class="text-lg font-bold">Thông báo</h2>
        <p class="text-gray-600 text-sm leading-relaxed">
          Bạn có muốn đăng xuất <br />
          không?<br />
        </p>
        <div class="flex justify-center gap-4 mt-4">
          <button @click="cancel" class="flex-1 py-2 rounded-xl border-1 font-semibold cursor-pointer">
            Không
          </button>
          <button @click="confirm" class="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold cursor-pointer">
            Có
          </button>
        </div>
      </div>
    </div>
    <!-- Thanh điều hướng dưới cố định -->
    <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'

const showConfirm = ref(false)

const openConfirm = () => {
  showConfirm.value = true
}

const cancel = () => {
  showConfirm.value = false
}

const confirm = () => {
  showConfirm.value = false
  location.href = "/login"
}
</script>
