<template>
    <div class="min-h-screen bg-white text-gray-800 flex flex-col px-6 py-3">
        <!-- Scrollable area -->
        <div class="flex-1 overflow-y-auto flex flex-col space-y-5">
            <!-- Logo -->
            <div class="flex justify-center">
                <img src="@/assets/img/ouransoft_banner.jpg" alt="OURANSOFT" class="w-full h-[260px] object-contain" />
            </div>

            <!-- Form -->
            <div>
                <h1 class="text-2xl font-bold mb-6">Chào mừng bạn</h1>
                <input type="text" placeholder="Tên đăng nhập"
                    class="mb-4 px-4 h-[56px] w-full rounded-xl border border-gray-300 placeholder-gray-400 focus:outline-none" />

                <div class="relative mb-2">
                    <input :type="isPasswordVisible ? 'text' : 'password'" placeholder="Mật khẩu"
                        class="w-full px-4 h-[56px] rounded-xl border border-gray-300 placeholder-gray-400 focus:outline-none" />
                    <button @click="togglePassword"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <TogglePassword />
                    </button>
                </div>
                <router-link to="/forgot-password">
                    <div class="text-sm text-orange-500 mb-4">Quên mật khẩu?</div>
                </router-link>

                <router-link to="/">
                    <button class="w-full bg-orange-500 text-white h-[56px] rounded-2xl font-semibold">
                        Đăng nhập
                    </button>
                </router-link>
                <p class="text-center text-sm text-gray-500 mt-4">
                    Chưa có tài khoản?
                    <router-link to="/register">
                        <span class="text-orange-500 font-medium">Đăng ký ngay</span>
                    </router-link>
                </p>
            </div>

            <!-- Social login -->
            <div class="mt-4">
                <hr class="my-4 border-gray-200" />
                <p class="text-center text-sm text-gray-500 mb-4">Đăng nhập bằng</p>
                <div class="flex justify-center gap-6">
                    <img src="@/assets/img/Google.webp" alt="Google" class="w-10 h-10" />
                    <img src="@/assets/img/Apple.png" alt="Apple" class="w-10 h-10" />
                    <img src="@/assets/img/Facebook.png" alt="Facebook" class="w-10 h-10" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TogglePassword from '@/components/icons/TogglePassword.vue'

const isPasswordVisible = ref(false)
const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value
}
</script>
