<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import MessageIcon from '@/components/icons/MessageIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

const router = useRouter()
const route = useRoute()

const goTo = (path: string) => {
    if (route.path !== path) router.push(path)
}
const isActive = (path: string) => route.path === path
</script>
<template>
    <div
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 shadow-inner z-10">
        <!-- Trò chuyện -->
        <div class="flex flex-col items-center" :class="isActive('/message') ? 'text-orange-500' : 'text-gray-400'"
            @click="goTo('/message')">
            <MessageIcon />
            <span class="text-xs font-medium">Trò chuyện</span>
        </div>
        <!-- Trang chủ -->
        <div class="flex flex-col items-center" :class="isActive('/') ? 'text-orange-500' : 'text-gray-400'"
            @click="goTo('/')">
            <UserIcon />
            <span class="text-xs font-medium">Trang chủ</span>
        </div>
        <!-- Cài đặt -->
        <div class="flex flex-col items-center" :class="isActive('/settings') ? 'text-orange-500' : 'text-gray-400'"
            @click="goTo('/settings')">
            <SettingsIcon />
            <span class="text-xs font-medium">Cài đặt</span>
        </div>
    </div>
</template>
