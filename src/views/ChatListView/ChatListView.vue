<template>
    <div class="h-screen flex flex-col bg-white text-gray-800">
        <!-- Nội dung cuộn -->
        <div class="flex-1 overflow-y-auto">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 pt-6 pb-2 mb-3">
                <span class="text-orange-600 font-medium cursor-pointer">Sửa</span>
                <span class="text-sm font-medium text-gray-800">Trò chuyện</span>
                <button class="cursor-pointer" aria-label="Tạo tin nhắn mới">
                    <WritingIcon />
                </button>
            </div>

            <!-- Search Bar -->
            <div class="px-4 mt-6 mb-3">
                <div class="flex items-center bg-gray-100 rounded-[12px] px-4 py-3 shadow-sm">
                    <SearchIcon />
                    <input type="text" placeholder="Tìm kiếm"
                        class="bg-transparent outline-none text-sm text-gray-700 w-full ml-2" />
                </div>
            </div>


            <!-- Chat List -->
            <div class="space-y-4 px-4 pb-6">
                <!-- User 1 -->
                <div
                    class="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div class="flex items-center space-x-4">
                        <img src="@/assets/img/anh_Huu.avif" alt="Hữu Trần"
                            class="w-12 h-12 rounded-[10px] object-cover" />
                        <div>
                            <p class="font-semibold text-base">Hữu Trần</p>
                            <p class="text-sm text-gray-500 truncate max-w-[200px]">
                                Đừng lo lắng. Hãy nói anh biết...
                            </p>
                        </div>
                    </div>
                    <span
                        class="bg-orange-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">1</span>
                </div>

                <!-- User 2 -->
                <div
                    class="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                    <div class="flex items-center space-x-4">
                        <img src="@/assets/img/owner.avif" alt="Đăng Khoa"
                            class="w-12 h-12 rounded-[10px] object-cover" />
                        <div>
                            <p class="font-semibold text-base">Đăng Khoa</p>
                            <p class="text-sm text-gray-500 truncate max-w-[200px]">
                                Lo chạy deadline đi mày ơi. Anh...
                            </p>
                        </div>
                    </div>
                    <span
                        class="bg-orange-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">1</span>
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
