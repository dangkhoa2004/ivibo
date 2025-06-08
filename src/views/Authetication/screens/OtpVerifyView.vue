<template>
    <div class="min-h-screen bg-white text-gray-800 relative">
        <!-- Nội dung cuộn được -->
        <div class="px-6 pt-12 pb-32 overflow-y-auto">
            <!-- Tiêu đề -->
            <div class="text-center">
                <h1 class="text-xl font-bold mb-2">Nhập mã xác nhận</h1>
                <p class="text-sm text-gray-500 leading-snug">
                    Một mã gồm 4 chữ số đã được gửi tới<br />
                    <span class="text-gray-700 font-medium">khoacdpp02847@fpt.edu.vn</span>
                </p>
            </div>

            <!-- Ô nhập mã -->
            <div class="mt-10 flex justify-center gap-4">
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-orange-500 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
            </div>
        </div>

        <!-- Footer cố định -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white shadow-inner">
            <p class="text-center text-orange-500 text-sm mb-3">Gửi lại mã</p>
            <button @click="openConfirm"
                class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                Tiếp tục
            </button>
        </div>
        <!-- Confirm Modal -->
        <div v-if="showConfirm" class="fixed inset-0 flex items-center justify-center z-50"
            style="background-color: rgba(0, 0, 0, 0.9);">
            <div class="bg-white rounded-2xl w-[85%] max-w-sm p-6 text-center space-y-4">
                <h2 class="text-lg font-bold">Thông báo</h2>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Tiếp tục xác thực đăng ký <br />
                    không?
                </p>
                <div class="flex justify-center gap-4 mt-4">
                    <button @click="cancel" class="flex-1 py-2 rounded-xl border font-semibold">
                        Không
                    </button>
                    <button @click="confirm" class="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold">
                        Có
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
