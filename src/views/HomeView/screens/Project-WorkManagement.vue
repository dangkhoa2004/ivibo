<template>
    <div class="min-h-screen bg-white text-gray-900 pb-24">
        <!-- Header -->
        <div class="flex items-center space-x-2 px-4 pt-6 pb-3">
            <router-link to="/">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </router-link>
            <h1 class="text-lg font-bold">Trang chủ</h1>
        </div>
        <!-- Content -->
        <div class="space-y-6 px-4">
            <!-- Card: Dự án -->
            <router-link to="/projects">
                <div class="bg-white rounded-2xl overflow-hidden">
                    <img src="@/assets/img/project.avif" alt="Project" class="w-full h-36 object-cover rounded-t-2xl" />
                    <div class="flex items-center justify-between px-2 py-3">
                        <span class="font-medium text-sm">Dự án</span>
                        <span class="text-gray-400 text-3xl">›</span>
                    </div>
                </div>
            </router-link>

            <!-- Card: Công việc -->
            <router-link to="/jobs">
                <div class="bg-white rounded-2xl overflow-hidden">
                    <img src="@/assets/img/job.avif" alt="Job" class="w-full h-36 object-cover rounded-t-2xl" />
                    <div class="flex items-center justify-between px-2 py-3">
                        <span class="font-medium text-sm">Công việc</span>
                        <span class="text-gray-400 text-3xl">›</span>
                    </div>
                </div>
            </router-link>
        </div>

        <!-- Bottom Navigation -->
        <BottomNavigation class="fixed bottom-0 left-0 right-0 z-10 bg-white" />
    </div>
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
</script>
