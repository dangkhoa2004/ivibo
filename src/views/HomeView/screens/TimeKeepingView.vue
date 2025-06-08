<template>
    <div class="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
        <!-- Header -->
        <div class="z-20 relative bg-white">
            <div class="flex items-center space-x-2 px-4 pt-3 pb-3">
                <router-link to="/">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </router-link>
                <div class="ml-3">
                    <h1 class="text-lg font-bold">Chấm công GPS</h1>
                    <p class="text-sm text-gray-400">10/10/2024</p>
                </div>
            </div>
        </div>
        <!-- Map chiếm toàn bộ phần còn lại -->
        <div class="relative flex-1 w-full z-0">
            <img src="@/assets/img/mappoint.avif" alt="Map" class="w-full h-full object-cover scale-[3]" />
            <!-- Pin vị trí ở giữa màn -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <svg class="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
            </div>
        </div>

        <!-- Button luôn hiển thị -->
        <div class="fixed bottom-10 left-0 right-0 px-6 z-40">
            <button @click="showSheet = true"
                class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                Chấm công
            </button>
        </div>

        <!-- Bottom sheet + backdrop -->
        <transition name="slide-up">
            <div v-if="showSheet" class="fixed inset-0 z-50">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black opacity-80" @click.self="showSheet = false"></div>

                <!-- Sheet -->
                <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl px-6 pt-4 pb-10 shadow-lg z-50">
                    <div class="mx-auto mb-4 w-10 h-1.5 rounded-full bg-gray-200"></div>

                    <!-- Logo -->
                    <div class="flex justify-center my-4">
                        <img src="@/assets/img/ouransoft_banner.avif" alt="Logo" class="h-full" />
                    </div>

                    <!-- Lịch sử chấm công -->
                    <div class="space-y-2">
                        <h2 class="text-lg font-bold">Lịch sử chấm công</h2>
                        <p class="text-sm text-gray-400">10/10/2024</p>
                        <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Chấm công lần 1 - 7:45
                        </p>
                        <p class="text-xl">...</p>
                    </div>

                    <!-- User -->
                    <div class="mt-4 flex items-center gap-2">
                        <img src="@/assets/img/owner.avif" alt="Avatar" class="w-8 h-8 rounded-full" />
                        <p class="font-semibold text-gray-800">Đăng Khoa</p>
                    </div>

                    <!-- Đăng ký ăn -->
                    <div class="mt-6">
                        <button
                            class="w-full h-[56px] rounded-2xl border border-orange-500 text-orange-500 font-semibold text-base">
                            Đăng ký ăn cơm trưa
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showSheet = ref(false)
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
