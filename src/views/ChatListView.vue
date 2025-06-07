<template>
    <div class="h-screen flex flex-col bg-white text-gray-800">
        <!-- Nội dung cuộn -->
        <div class="flex-1 overflow-y-auto pb-[64px]">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 pt-4 pb-2">
                <span class="text-orange-500 font-medium">Sửa</span>
                <h1 class="text-base font-bold">Trò chuyện</h1>
                <button>
                    <WritingIcon />
                </button>
            </div>

            <!-- Search Bar -->
            <div class="px-4 mb-3">
                <div class="flex items-center bg-gray-100 rounded-full px-3 py-3">
                    <SearchIcon />
                    <input type="text" placeholder="Tìm kiếm"
                        class="bg-transparent outline-none text-sm text-gray-700 w-full" />
                </div>
            </div>

            <!-- Chat List -->
            <div class="space-y-4 px-4 pb-4">
                <!-- User 1 -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="@/assets/img/avt1.jpg" alt="Hữu Trần" class="w-10 h-10 rounded-xl" />
                        <div>
                            <p class="font-semibold text-sm">Hữu Trần</p>
                            <p class="text-sm text-gray-500 truncate w-44">Đừng lo lắng. Hãy nói anh biết...</p>
                        </div>
                    </div>
                    <span
                        class="bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">1</span>
                </div>

                <!-- User 2 -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="@/assets/img/avt1.jpg" alt="Hữu Trần" class="w-10 h-10 rounded-xl" />
                        <div>
                            <p class="font-semibold text-sm">Liên Mạnh</p>
                            <p class="text-sm text-gray-500 truncate w-44">Lo chạy deadline đi mày ơi. Anh...</p>
                        </div>
                    </div>
                    <span
                        class="bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">1</span>
                </div>
            </div>
        </div>

        <!-- Bottom nav cố định -->
        <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
    </div>
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import WritingIcon from '@/components/icons/WritingIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
</script>
