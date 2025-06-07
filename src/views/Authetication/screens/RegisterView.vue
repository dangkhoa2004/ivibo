<template>
    <div class="min-h-screen bg-white text-gray-800 flex flex-col">
        <!-- Nội dung cuộn -->
        <div class="flex-1 overflow-y-auto px-6 pt-6 pb-6">
            <!-- Header -->
            <div>
                <div class="flex items-center space-x-2">
                    <router-link to="/login">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </router-link>
                    <h1 class="text-lg font-semibold">Đăng ký</h1>
                </div>
                <p class="text-sm text-gray-500 mt-1">Tạo một tài khoản để bắt đầu</p>
            </div>

            <!-- Form -->
            <div class="mt-6 flex flex-col space-y-4">
                <!-- Tên -->
                <div>
                    <label for="name" class="block text-sm font-semibold mb-1">Tên</label>
                    <input id="name" type="text" placeholder="Nhập tên"
                        class="w-full h-[56px] px-4 border border-orange-500 rounded-xl focus:outline-none" />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-semibold mb-1">Địa chỉ email</label>
                    <input id="email" type="email" placeholder="tên@email.com"
                        class="w-full h-[56px] px-4 border border-gray-300 rounded-xl focus:outline-none" />
                </div>

                <!-- Mật khẩu -->
                <div>
                    <label for="password" class="block text-sm font-semibold mb-1">Mật khẩu</label>
                    <div class="relative">
                        <input id="password" :type="showPassword ? 'text' : 'password'" placeholder="Tạo mật khẩu"
                            class="w-full h-[56px] px-4 pr-10 border border-gray-300 rounded-xl focus:outline-none" />
                        <button @click="showPassword = !showPassword" type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <TogglePassword />
                        </button>
                    </div>
                </div>

                <!-- Xác nhận mật khẩu -->
                <div>
                    <label for="confirmPassword" class="block text-sm font-semibold mb-1">Xác nhận mật khẩu</label>
                    <div class="relative">
                        <input id="confirmPassword" :type="showConfirm ? 'text' : 'password'"
                            placeholder="Xác nhận mật khẩu"
                            class="w-full h-[56px] px-4 pr-10 border border-gray-300 rounded-xl focus:outline-none" />
                        <button @click="showConfirm = !showConfirm" type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <TogglePassword />
                        </button>
                    </div>
                </div>

                <!-- Checkbox -->
                <div class="flex items-start space-x-3">
                    <input type="checkbox" id="agree"
                        class="w-5 h-5 mt-1 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <label for="agree" class="text-sm text-gray-600 leading-snug">
                        Tôi đã đọc và đồng ý với
                        <span class="text-orange-500 font-medium">Điều khoản và Điều kiện</span>
                        và
                        <span class="text-orange-500 font-medium">Chính sách bảo mật</span>.
                    </label>
                </div>
            </div>
        </div>
        <!-- Cố định cuối màn hình -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white z-10">
            <router-link to="/otp-verify">
                <button class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                    Tiếp tục
                </button>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import TogglePassword from '@/components/icons/TogglePassword.vue'
import { ref } from 'vue'

const showPassword = ref(false)
const showConfirm = ref(false)
</script>
