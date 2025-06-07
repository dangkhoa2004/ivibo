<template>
  <div class="min-h-screen bg-white text-gray-800 pb-24">
    <!-- Top bar -->
    <div class="flex items-center justify-between p-4">
      <button>
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1_1968" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="0" width="20" height="20">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.99795 0.829895C4.7944 0.829895 1.38086 4.21039 1.38086 8.38768C1.38086 12.565 4.7944 15.9455 8.99795 15.9455C10.5651 15.9455 12.0229 15.4754 13.2345 14.6695L18.2038 19.5978C18.74 20.1295 19.6078 20.1295 20.144 19.5978C20.682 19.0641 20.682 18.1975 20.144 17.6638L15.2066 12.7671C16.0931 11.5318 16.615 10.0199 16.615 8.38768C16.615 4.21039 13.2015 0.829895 8.99795 0.829895ZM4.12815 8.38768C4.12815 5.72545 6.30518 3.56142 8.99795 3.56142C11.6907 3.56142 13.8677 5.72545 13.8677 8.38768C13.8677 11.0499 11.6907 13.2139 8.99795 13.2139C6.30518 13.2139 4.12815 11.0499 4.12815 8.38768Z"
              fill="#FF8C27" />
          </mask>
          <g mask="url(#mask0_1_1968)">
            <rect x="0.964355" y="0.413208" width="20" height="20" fill="#2F3036" />
          </g>
        </svg>
      </button>
      <div class="relative">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.6698 6.70772C19.2262 5.40365 16.7942 4.91321 12.9644 4.91321C9.13456 4.91321 6.70252 5.40365 5.25887 6.70772M20.6698 6.70772C21.9646 7.87733 22.4644 9.70144 22.4644 12.4132C22.4644 18.1485 20.2291 19.9132 12.9644 19.9132C5.69965 19.9132 3.46436 18.1485 3.46436 12.4132C3.46436 9.70144 3.96408 7.87733 5.25887 6.70772M20.6698 6.70772L14.3785 12.999C13.5975 13.78 12.3312 13.78 11.5501 12.999L5.25887 6.70772"
            stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span
          class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">9</span>
      </div>
    </div>

    <!-- Banner -->
    <div class="">
      <img src="@/assets/banner.jpg" alt="Banner" class="object-cover w-full h-full" />
    </div>

    <!-- Section: Lịch -->
    <div class="mt-6 px-4">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-bold">Lịch</h2>
        <button class="text-sm text-orange-500 font-medium">Xem thêm</button>
      </div>

      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 pb-2 w-max min-w-full flex-nowrap">
          <!-- Card 1 -->
          <div class="rounded-2xl overflow-hidden bg-gray-200 w-60 shrink-0">
            <img src="@/assets/task.jpg" alt="Công việc" class="w-full object-cover aspect-[4/3]" />
            <div class="p-2 space-y-0.5">
              <p class="text-xs text-gray-500">QL. Công việc & dự án</p>
              <p class="text-base font-semibold">Công việc</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="rounded-2xl overflow-hidden bg-gray-200 w-60 shrink-0">
            <img src="@/assets/schedule.jpg" alt="Lịch trình" class="w-full object-cover aspect-[4/3]" />
            <div class="p-2 space-y-0.5">
              <p class="text-xs text-gray-500">Theo dõi lịch trình</p>
              <p class="text-base font-semibold">Lịch trình</p>
            </div>
          </div>
        </div>
      </div>


    </div>

    <!-- Section: Time Set -->
    <div class="mt-6 px-4">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-bold">Time set</h2>
        <button class="text-sm text-orange-500 font-medium">Xem thêm</button>
      </div>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 pb-2 w-max min-w-full flex-nowrap">
          <!-- Card 1 -->
          <div class="rounded-2xl overflow-hidden bg-gray-200 w-60 shrink-0">
            <img src="@/assets/calendar.jpg" alt="Chấm công" class="w-full object-cover aspect-[4/3]" />
            <div class="p-2 space-y-0.5">
              <p class="text-xs text-gray-500">Timeset</p>
              <p class="text-base font-semibold">Chấm công</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BottomNavigation />
  </div>
</template>
<script setup lang="ts">
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
</script>
