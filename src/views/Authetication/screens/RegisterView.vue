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
                    <input id="name" v-model="name" type="text" placeholder="Nhập tên"
                        class="w-full h-[56px] px-4 border border-orange-500 rounded-xl focus:outline-none" />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-semibold mb-1">Địa chỉ email</label>
                    <input id="email" v-model="email" type="email" placeholder="tên@email.com"
                        class="w-full h-[56px] px-4 border border-gray-300 rounded-xl focus:outline-none" />
                </div>

                <!-- Mật khẩu -->
                <div>
                    <label for="password" class="block text-sm font-semibold mb-1">Mật khẩu</label>
                    <div class="relative">
                        <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password"
                            placeholder="Tạo mật khẩu"
                            class="w-full h-[56px] px-4 pr-10 border border-gray-300 rounded-xl focus:outline-none" />
                        <button @click="togglePassword" type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <TogglePassword :show="showPassword" />
                        </button>
                    </div>
                </div>

                <!-- Xác nhận mật khẩu -->
                <div>
                    <label for="confirmPassword" class="block text-sm font-semibold mb-1">Xác nhận mật khẩu</label>
                    <div class="relative">
                        <input id="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
                            v-model="confirmPassword" placeholder="Xác nhận mật khẩu"
                            class="w-full h-[56px] px-4 pr-10 border border-gray-300 rounded-xl focus:outline-none" />
                        <button @click="toggleConfirmPassword" type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <TogglePassword :show="showConfirmPassword" />
                        </button>
                    </div>
                </div>

                <!-- Checkbox -->
                <div class="flex items-start space-x-3">
                    <input type="checkbox" id="agree" v-model="agreed"
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

        <!-- Nút cố định -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white z-10">
            <button @click="openConfirm"
                class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                Tiếp tục
            </button>
        </div>

        <!-- Confirm Modal -->
        <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center z-50"
            style="background-color: rgba(0, 0, 0, 0.9);">
            <div class="bg-white rounded-2xl w-[85%] max-w-sm p-6 text-center space-y-4">
                <h2 class="text-lg font-bold">Thông báo</h2>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Bạn muốn tạo tài khoản mới <br />
                    không?
                </p>
                <div class="flex justify-center gap-4 mt-4">
                    <button @click="cancel" class="flex-1 py-2 rounded-xl border font-semibold">
                        Không
                    </button>
                    <button @click="confirm" class="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold">
                        Đúng vậy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TogglePassword from '@/components/icons/TogglePassword.vue'

// State
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreed = ref(false)

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const showConfirmModal = ref(false)

// Toggle functions
const togglePassword = () => {
    showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}

// Modal handlers
const openConfirm = () => {
    showConfirmModal.value = true
}

const cancel = () => {
    showConfirmModal.value = false
}

const confirm = () => {
    showConfirmModal.value = false
    location.href = "/otp-verify"
}
</script>
