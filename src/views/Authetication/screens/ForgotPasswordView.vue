<template>
    <div class="min-h-screen bg-white px-6 pt-12 text-gray-800 flex flex-col">
        <!-- Header -->
        <div class="text-center mb-8">
            <h1 class="text-2xl font-bold mb-2">Quên mật khẩu</h1>
            <p class="text-sm text-gray-500 leading-snug">
                Nhập email để nhận liên kết<br />
                đặt lại mật khẩu của bạn.
            </p>
        </div>

        <!-- Email input -->
        <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold">Địa chỉ email</label>
            <input id="email" type="email" placeholder="tên@email.com"
                class="w-full h-[56px] px-4 border border-gray-300 rounded-xl focus:outline-none placeholder-gray-400" />
        </div>

        <!-- Footer cố định -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white shadow-inner cursor-pointer">
            <button @click="openConfirm"
                class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                Tiếp tục
            </button>
        </div>
        <!-- Confirm Modal -->
        <div v-if="showConfirm" class="fixed inset-0 flex items-center justify-center z-50"
            style="background-color: rgba(000, 000, 000, 0.9);">
            <div class="bg-white rounded-2xl w-[85%] max-w-sm p-6 text-center space-y-4">
                <h2 class="text-lg font-bold">Thông báo</h2>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Chúng tôi sẽ gửi mật khẩu mới vào<br />
                    Email bạn đẵ đăng ký?<br />
                </p>
                <div class="flex justify-center gap-4 mt-4">
                    <button @click="cancel" class="flex-1 py-2 rounded-xl border-1 font-semibold cursor-pointer">
                        Không
                    </button>
                    <button @click="confirm"
                        class="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold cursor-pointer">
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
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
