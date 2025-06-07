<template>
    <div class="min-h-screen bg-white text-gray-900 px-4 pt-6 pb-24">
        <!-- Header -->
        <div class="flex items-start justify-between">
            <div>
                <p class="text-[40px] font-bold leading-none">07</p>
                <p class="text-sm text-gray-400 -mt-1">Thứ hai</p>
                <p class="text-sm text-gray-400">Tháng 10 2024</p>
            </div>
            <button class="bg-orange-50 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold">Tạo mới</button>
        </div>

        <!-- Date Selector -->
        <div class="flex items-center justify-between mt-6">
            <h2 class="text-base font-semibold">Lịch tháng</h2>
            <router-link to="/full-schedules">
                <a href="" class="text-sm text-indigo-600 font-medium">Xem tất cả</a>
            </router-link>
        </div>

        <div class="flex justify-between mt-3 mb-4">
            <div class="text-center text-gray-400 text-sm">
                <p>Fr</p>
                <p class="font-medium text-black mt-1">04</p>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>Sa</p>
                <p class="font-medium text-black mt-1">05</p>
            </div>
            <div class="text-center text-sm">
                <p class="text-gray-500">Su</p>
                <p class="mt-1 font-semibold text-black">06</p>
                <div class="h-[2px] bg-orange-500 mt-1 w-5 mx-auto rounded-full"></div>
            </div>
            <div class="text-center">
                <div class="bg-orange-500 text-white px-3 py-1 rounded-xl">
                    <p class="text-xs font-bold">M</p>
                    <p class="text-base font-semibold -mt-1">07</p>
                </div>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>Tue</p>
                <p class="font-medium text-black mt-1">08</p>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>Wed</p>
                <p class="font-medium text-black mt-1">09</p>
            </div>
            <div class="text-center text-gray-400 text-sm">
                <p>Th</p>
                <p class="font-medium text-black mt-1">10</p>
            </div>
        </div>

        <!-- Timeline -->
        <div class="mt-4">
            <!-- Item 1 -->
            <div class="flex items-start space-x-4 relative mb-6">
                <div class="text-right w-14">
                    <p class="text-sm font-semibold">8:15</p>
                    <p class="text-xs text-gray-400">9:30</p>
                </div>
                <div class="absolute left-[3.25rem] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                <div class="bg-orange-500 text-white rounded-2xl p-4 w-full relative z-10">
                    <p class="font-bold text-base mb-0.5">Họp kiểm thử IT</p>
                    <p class="text-sm mb-2">Cuộc họp</p>
                    <div class="flex items-center text-sm space-x-2">
                        <span>📍 Văn phòng IT</span>
                    </div>
                    <div class="flex items-center text-sm space-x-2 mt-1">
                        <img src="@/assets/img/owner.jpg" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span>Đăng Khoa</span>
                    </div>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="flex items-start space-x-4 relative">
                <div class="text-right w-14">
                    <p class="text-sm font-semibold">13:15</p>
                    <p class="text-xs text-gray-400">14:45</p>
                </div>
                <div class="absolute left-[3.25rem] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                <div class="bg-gray-100 text-gray-900 rounded-2xl p-4 w-full relative z-10">
                    <p class="font-bold text-base mb-0.5">Traning Intern</p>
                    <p class="text-sm mb-2">Đào tạo</p>
                    <div class="flex items-center text-sm space-x-2">
                        <span>📍 Văn phòng chính</span>
                    </div>
                    <div class="flex items-center text-sm space-x-2 mt-1">
                        <img src="@/assets/img/avt1.jpg" alt="Avatar" class="w-5 h-5 rounded-full" />
                        <span>Hữu Trần</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Thanh điều hướng dưới cố định -->
        <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
    </div>
</template>
<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
</script>