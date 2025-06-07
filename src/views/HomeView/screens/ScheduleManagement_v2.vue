<template>
    <div class="min-h-screen bg-white text-gray-900 px-4 pt-6 pb-24">
        <!-- Header -->
        <div class="flex items-center mb-4">
            <router-link to="/schedules" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </router-link>
            <h1 class="text-lg font-bold">Lịch trình</h1>
        </div>
        <!-- Calendar -->
        <div class="border rounded-2xl overflow-hidden">
            <!-- Days of week -->
            <div class="grid grid-cols-7 border-b text-center py-2 text-sm font-semibold">
                <span>Su</span>
                <span class="text-orange-500">Mo</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
            </div>

            <!-- Dates grid -->
            <div class="grid grid-cols-7 text-center text-sm">
                <!-- Previous month -->
                <span class="py-4 bg-gray-300 text-gray-400">29</span>
                <span class="py-4 bg-gray-300 text-gray-400">30</span>
                <span class="py-4">1</span>
                <span class="py-4">2</span>
                <span class="py-4">3</span>
                <span class="py-4">4</span>
                <span class="py-4">5</span>

                <!-- This month -->
                <span class="py-4">6</span>
                <span class="py-4 border border-orange-500 rounded-xl mx-2">7</span>
                <span class="py-4">8</span>
                <span class="py-4">9</span>
                <span class="py-4">10</span>
                <span class="py-4">11</span>
                <span class="py-4">12</span>

                <span class="py-4">13</span>
                <span class="py-4">14</span>
                <span class="py-4">15</span>
                <span class="py-4">16</span>
                <span class="py-4">17</span>
                <span class="py-4">18</span>
                <span class="py-4">19</span>

                <span class="py-4">20</span>
                <span class="py-4">21</span>
                <span class="py-4">22</span>
                <span class="py-4">23</span>
                <span class="py-4">24</span>
                <span class="py-4">25</span>
                <span class="py-4">26</span>

                <span class="py-4">27</span>
                <span class="py-4">28</span>
                <span class="py-4">29</span>
                <span class="py-4">30</span>
                <span class="py-4">31</span>
                <span class="py-4 bg-gray-300 text-gray-400">1</span>
                <span class="py-4 bg-gray-300 text-gray-400">2</span>

                <!-- Next month -->
                <span class="py-4 bg-gray-300 text-gray-400">3</span>
                <span class="py-4 bg-gray-300 text-gray-400">4</span>
                <span class="py-4 bg-gray-300 text-gray-400">5</span>
                <span class="py-4 bg-gray-300 text-gray-400">6</span>
                <span class="py-4 bg-gray-300 text-gray-400">7</span>
                <span class="py-4 bg-gray-300 text-gray-400">8</span>
                <span class="py-4 bg-gray-300 text-gray-400">9</span>
            </div>
        </div>

        <!-- Tabs -->
        <div class="flex justify-between mt-6 text-sm font-medium">
            <div class="flex-1 text-center text-orange-500 border-b-2 border-orange-500 pb-2">Lịch trong ngày</div>
            <div class="flex-1 text-center text-gray-500 pb-2">Lịch dài ngày</div>
        </div>

        <!-- Sự kiện -->
        <div class="mt-4 space-y-4">
            <!-- 1st Event -->
            <div class="flex items-center justify-between">
                <p class="text-gray-400 text-sm">
                    <span class="text-black font-semibold">8:15</span> - <span>9:30</span>
                </p>
                <button class="bg-orange-500 text-white font-semibold text-sm rounded-xl px-4 py-2">
                    Họp kiểm thử IT
                </button>
            </div>

            <!-- 2nd Event -->
            <div class="flex items-center justify-between">
                <p class="text-gray-400 text-sm">
                    <span class="text-black font-semibold">13:15</span> - <span>14:45</span>
                </p>
                <button class="bg-gray-100 text-black font-semibold text-sm rounded-xl px-4 py-2">
                    Training Intern
                </button>
            </div>
        </div>
    </div>
</template>
