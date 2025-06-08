<script setup lang="ts">
import MessageIcon from '@/components/icons/MessageIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
</script>
<template>
    <div
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2 z-10">
        <!-- Trò chuyện -->
        <router-link to="/message" class="flex-1 flex flex-col items-center justify-center text-gray-400 text-center"
            active-class="text-orange-500" exact-active-class="text-orange-500">
            <MessageIcon />
            <span class="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition">Trò chuyện</span>
        </router-link>

        <!-- Trang chủ -->
        <router-link to="/" class="flex-1 flex flex-col items-center justify-center text-gray-400 text-center"
            active-class="text-orange-500" exact-active-class="text-orange-500">
            <UserIcon />
            <span class="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition">Trang chủ</span>
        </router-link>

        <!-- Cài đặt -->
        <router-link to="/settings" class="flex-1 flex flex-col items-center justify-center text-gray-400 text-center"
            active-class="text-orange-500" exact-active-class="text-orange-500">
            <SettingsIcon />
            <span class="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition">Cài đặt</span>
        </router-link>
    </div>
</template>
