<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <TopBar class="fixed top-0 left-0 right-0 z-20 bg-white" />
    <div class="flex-1 overflow-y-auto pt-[56px] pb-[64px]">
      <div class="w-full aspect-[3/1] overflow-hidden">
        <img src="@/assets/img/banner.avif" alt="Banner" class="w-full h-full object-cover" />
      </div>
      <CalendarSection />
      <TimeSetSection />
    </div>
    <BottomNavigation class="fixed bottom-0 left-0 right-0 z-20 bg-white" />
  </div>
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import TopBar from '@/components/layout/TopBar.vue'
import CalendarSection from './components/CalendarSection.vue'
import TimeSetSection from './components/TimeSetSection.vue'
</script>
