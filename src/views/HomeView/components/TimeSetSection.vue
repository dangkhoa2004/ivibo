<template>
    <div class="mt-6 px-4">
        <div class="flex justify-between items-center mb-3">
            <h2 class="text-lg font-bold">Time set</h2>
            <button class="text-sm text-orange-700 font-semibold hover:text-orange-800 active:scale-95 transition">
                Xem thêm
            </button>
        </div>

        <div class="overflow-x-auto scrollbar-hide">
            <div class="flex gap-4 pb-2 w-max min-w-full flex-nowrap">
                <!-- Card 1 -->
                <router-link to="/timekeeping">
                    <div class="rounded-2xl overflow-hidden bg-gray-200 w-50 shrink-0">
                        <img src="@/assets/img/calendar.avif" alt="Chấm công"
                            class="w-full object-cover aspect-[4/3]" />
                        <div class="p-2 space-y-0.5">
                            <p class="text-sm text-gray-700">Timeset</p>
                            <p class="text-base font-semibold">Chấm công</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
