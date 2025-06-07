<template>
        <div class="mt-6 px-4">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-lg font-bold">Lịch</h2>
        <button class="text-sm text-orange-500 font-medium">Xem thêm</button>
      </div>

      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 pb-2 w-max min-w-full flex-nowrap">
          <!-- Card 1 -->
          <div class="rounded-2xl overflow-hidden bg-gray-200 w-50 shrink-0">
            <img src="@/assets/img/task.jpg" alt="Công việc" class="w-full object-cover aspect-[4/3]" />
            <div class="p-2 space-y-0.5">
              <p class="text-xs text-gray-500">QL. Công việc & dự án</p>
              <p class="text-base font-semibold">Công việc</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="rounded-2xl overflow-hidden bg-gray-200 w-50 shrink-0">
            <img src="@/assets/img/schedule.jpg" alt="Lịch trình" class="w-full object-cover aspect-[4/3]" />
            <div class="p-2 space-y-0.5">
              <p class="text-xs text-gray-500">Theo dõi lịch trình</p>
              <p class="text-base font-semibold">Lịch trình</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>