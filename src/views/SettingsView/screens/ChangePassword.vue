<template>
    <div class="h-screen flex flex-col bg-white text-gray-900">
        <!-- Nội dung chính có thể cuộn -->
        <div class="flex-1 overflow-y-auto pb-28">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 pt-4">
                <div class="flex items-center space-x-2">
                    <router-link to="/infomation">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </router-link>
                    <h1 class="text-lg font-semibold">Sửa thông tin</h1>
                </div>
                <button class="bg-orange-500 text-white px-4 py-1.5 rounded-xl text-sm font-bold">LƯU</button>
            </div>

            <!-- Avatar -->
            <div class="flex flex-col items-center mt-6 mb-6">
                <div class="relative w-24 h-24">
                    <img src="@/assets/img/owner.jpg" alt="Avatar" class="w-24 h-24 object-cover rounded-full" />
                    <button class="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full shadow-md">
                        <PencialIcon />
                    </button>
                </div>
            </div>

            <!-- Form nhập mật khẩu -->
            <div class="px-6 space-y-6">
                <div>
                    <label for="currentPassword" class="block font-semibold mb-1">MẬT KHẨU HIỆN TẠI</label>
                    <input id="currentPassword" type="password"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="**********" />
                </div>

                <div>
                    <label for="newPassword" class="block font-semibold mb-1">MẬT KHẨU MỚI</label>
                    <input id="newPassword" type="password"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="**********" />
                </div>

                <div>
                    <label for="confirmPassword" class="block font-semibold mb-1">XÁC NHẬN MẬT KHẨU MỚI</label>
                    <input id="confirmPassword" type="password"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="**********" />
                </div>
            </div>

            <!-- Nút đổi mật khẩu -->
            <div class="px-6 mt-10">
                <button class="w-full h-[56px] bg-orange-500 text-white text-base font-bold rounded-2xl">
                    Đổi mật khẩu
                </button>
            </div>
        </div>

        <!-- Navigation dưới cùng -->
        <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
    </div>
</template>

<script setup lang="ts">
import PencialIcon from '@/components/icons/PencialIcon.vue'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
</script>
