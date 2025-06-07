<template>
    <div class="min-h-screen bg-white px-4 pt-6 pb-24 text-gray-900">
        <!-- Header -->
        <div class="flex items-center mb-4">
            <router-link to="/project-work-management" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </router-link>
            <h1 class="text-lg font-bold">Trang chủ / Công việc</h1>
        </div>
        <!-- Search -->
        <div class="mb-4">
            <div class="flex items-center bg-[#f6f7fc] rounded-full px-4 py-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Tìm kiếm"
                    class="ml-2 bg-transparent outline-none w-full text-sm placeholder-gray-400" />
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex gap-3 mb-4 overflow-auto">
            <button class="px-6 py-2 rounded-2xl text-white bg-orange-500 font-semibold text-sm">Tất cả</button>
            <button class="px-6 py-2 rounded-2xl bg-[#f4f4fb] text-sm font-medium text-gray-700">Hoàn thành</button>
            <button class="px-6 py-2 rounded-2xl bg-[#f4f4fb] text-sm font-medium text-gray-700">Chưa hoàn
                thành</button>
        </div>

        <!-- List Items -->
        <div class="space-y-4">
            <!-- Item -->
            <div class="bg-white rounded-2xl shadow-sm px-4 py-4 flex justify-between items-start">
                <div>
                    <p class="font-semibold text-base">Dự án Kimshen</p>
                    <p class="text-sm text-gray-400 mt-1">Status <span class="text-red-500 font-medium">Chưa hoàn
                            thành</span></p>
                </div>
                <div class="text-right text-sm space-y-1">
                    <p class="text-gray-400">30/10/2019</p>
                    <p class="text-orange-300 font-semibold">Thấp</p>
                </div>
            </div>

            <!-- Item -->
            <div class="bg-white rounded-2xl shadow-sm px-4 py-4 flex justify-between items-start">
                <div>
                    <p class="font-semibold text-base">Dự án Thăng Long</p>
                    <p class="text-sm text-gray-400 mt-1">Status <span class="text-green-600 font-medium">Hoàn
                            thành</span></p>
                </div>
                <div class="text-right text-sm space-y-1">
                    <p class="text-gray-400">30/09/2019</p>
                    <p class="text-red-500 font-semibold">Cao</p>
                </div>
            </div>

            <!-- Item -->
            <div class="bg-white rounded-2xl shadow-sm px-4 py-4 flex justify-between items-start">
                <div>
                    <p class="font-semibold text-base">Dự án Thăng Long</p>
                    <p class="text-sm text-gray-400 mt-1">Status <span class="text-green-600 font-medium">Hoàn
                            thành</span></p>
                </div>
                <div class="text-right text-sm space-y-1">
                    <p class="text-gray-400">30/09/2019</p>
                    <p class="text-blue-600 font-semibold">Trung bình</p>
                </div>
            </div>

            <!-- Item -->
            <div class="bg-white rounded-2xl shadow-sm px-4 py-4 flex justify-between items-start">
                <div>
                    <p class="font-semibold text-base">Dự án Thăng Long</p>
                    <p class="text-sm text-gray-400 mt-1">Status <span class="text-red-500 font-medium">Chưa hoàn
                            thành</span></p>
                </div>
                <div class="text-right text-sm space-y-1">
                    <p class="text-gray-400">30/09/2019</p>
                    <p class="text-blue-600 font-semibold">Trung bình</p>
                </div>
            </div>

            <!-- Item -->
            <div class="bg-white rounded-2xl shadow-sm px-4 py-4 flex justify-between items-start">
                <div>
                    <p class="font-semibold text-base">Dự án Thăng Long</p>
                    <p class="text-sm text-gray-400 mt-1">Status <span class="text-green-600 font-medium">Hoàn
                            thành</span></p>
                </div>
                <div class="text-right text-sm space-y-1">
                    <p class="text-gray-400">30/09/2019</p>
                    <p class="text-orange-300 font-semibold">Thấp</p>
                </div>
            </div>
        </div>
    </div>
</template>
