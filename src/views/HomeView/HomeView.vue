<template>
  <div class="h-screen flex flex-col bg-white text-gray-800">
    <!-- TopBar cố định -->
    <TopBar class="fixed top-0 left-0 right-0 z-20 bg-white" />

    <!-- Nội dung cuộn -->
    <div class="flex-1 overflow-y-auto pt-[56px] pb-[64px]"> <!-- padding để không bị đè -->
      <!-- Banner -->
      <div>
        <img src="@/assets/img/banner.avif" alt="Banner" class="object-cover w-full h-full" />
      </div>

      <!-- Section: Lịch -->
      <CalendarSection />

      <!-- Section: Time Set -->
      <TimeSetSection />
    </div>

    <!-- BottomNavigation cố định -->
    <BottomNavigation class="fixed bottom-0 left-0 right-0 z-20 bg-white" />
  </div>
</template>

<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import TopBar from '@/components/layout/TopBar.vue'
import CalendarSection from './components/CalendarSection.vue'
import TimeSetSection from './components/TimeSetSection.vue'
</script>
