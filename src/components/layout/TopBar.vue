<template>
    <div class="flex items-center justify-between p-4">
        <button aria-label="Mở tìm kiếm">
            <SearchIcon />
        </button>

        <div class="relative">
            <button aria-label="Xem thông báo">
                <NotificationIcon />
                <span
                    class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    9
                </span>
            </button>
        </div>
    </div>

</template>
<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import NotificationIcon from '@/components/icons/NotificationIcon.vue'
</script>
