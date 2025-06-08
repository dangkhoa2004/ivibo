<template>
    <div class="h-screen flex flex-col bg-white text-gray-900">
        <!-- Nội dung cuộn được -->
        <div class="flex-1 overflow-y-auto pb-[72px]">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 pt-4">
                <div class="flex items-center space-x-2">
                    <router-link to="/settings">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </router-link>
                    <h1 class="text-lg font-semibold">Sửa thông tin</h1>
                </div>
                <button @click="openConfirm"
                    class="bg-orange-500 text-white px-4 py-1.5 rounded-xl text-sm font-bold cursor-pointer">
                    LƯU
                </button>
            </div>
            <!-- Avatar + Edit Button -->
            <div class="flex flex-col items-center mt-6 mb-6">
                <!-- Wrapper để đặt icon đúng vị trí -->
                <div class="relative w-24 h-24">
                    <img src="@/assets/img/owner.avif" alt="Avatar" class="w-24 h-24 object-cover rounded-[150px]" />
                    <button class="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full shadow-md">
                        <PencialIcon />
                    </button>
                </div>
            </div>
            <!-- Form -->
            <div class="px-6 space-y-8 text-sm">
                <!-- ID -->
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <label for="id" class="font-semibold">ID</label>
                        <router-link to="/change-password" class="text-blue-500 text-sm">Đổi mật khẩu</router-link>
                    </div>
                    <input id="id" type="text"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-500 w-full outline-none" value="ORSI074"
                        readonly />
                </div>
                <!-- Họ và tên -->
                <div>
                    <label for="fullName" class="block font-semibold mb-1">HỌ VÀ TÊN</label>
                    <input id="fullName" type="text"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="Nhập họ và tên" value="Cao Đăng Khoa" />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block font-semibold mb-1">EMAIL</label>
                    <input id="email" type="email"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="Email của bạn" value="khoacdpp02847@fpt.edu.vn" />
                </div>

                <!-- Số điện thoại -->
                <div>
                    <label for="phone" class="block font-semibold mb-1">SỐ ĐIỆN THOẠI</label>
                    <input id="phone" type="tel"
                        class="bg-gray-100 rounded-xl px-4 h-[56px] text-gray-700 w-full outline-none"
                        placeholder="+84 ..." value="+84 869938981" />
                </div>
                <!-- Địa chỉ -->
                <div>
                    <label for="address" class="block font-semibold mb-1">ĐỊA CHỈ</label>
                    <textarea id="address"
                        class="bg-gray-100 rounded-xl px-4 py-3 h-[120px] text-gray-700 w-full outline-none resize-none"
                        placeholder="Nhập địa chỉ"></textarea>
                </div>
            </div>
        </div>
        <!-- Confirm Modal -->
        <div v-if="showConfirm" class="fixed inset-0 flex items-center justify-center z-50"
            style="background-color: rgba(000, 000, 000, 0.9);">
            <div class="bg-white rounded-2xl w-[85%] max-w-sm p-6 text-center space-y-4">
                <h2 class="text-lg font-bold">Thông báo</h2>
                <p class="text-gray-600 text-sm leading-relaxed">
                    Bạn có chắc chắn muốn sửa thông tin <br />
                    không?<br />
                </p>
                <div class="flex justify-center gap-4 mt-4">
                    <button @click="cancel" class="flex-1 py-2 rounded-xl border-1 font-semibold cursor-pointer">
                        Không
                    </button>
                    <button @click="confirm"
                        class="flex-1 py-2 rounded-xl bg-orange-500 text-white font-semibold cursor-pointer">
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
import PencialIcon from '@/components/icons/PencialIcon.vue'

const showConfirm = ref(false)

const openConfirm = () => {
    showConfirm.value = true
}

const cancel = () => {
    showConfirm.value = false
}

const confirm = () => {
    showConfirm.value = false
    location.href = "/infomation"
}
</script>
