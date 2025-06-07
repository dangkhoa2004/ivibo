<template>
    <div class="min-h-screen bg-white text-gray-800 relative">
        <!-- Nội dung cuộn được -->
        <div class="px-6 pt-12 pb-32 overflow-y-auto">
            <!-- Tiêu đề -->
            <div class="text-center">
                <h1 class="text-xl font-bold mb-2">Nhập mã xác nhận</h1>
                <p class="text-sm text-gray-500 leading-snug">
                    Một mã gồm 4 chữ số đã được gửi tới<br />
                    <span class="text-gray-700 font-medium">khoacdpp02847@fpt.edu.vn</span>
                </p>
            </div>

            <!-- Ô nhập mã -->
            <div class="mt-10 flex justify-center gap-4">
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-orange-500 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
                <input type="text" maxlength="1"
                    class="w-14 h-14 text-center text-xl rounded-xl border-2 border-gray-300 focus:outline-none" />
            </div>
        </div>

        <!-- Footer cố định -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white shadow-inner">
            <p class="text-center text-orange-500 text-sm mb-3">Gửi lại mã</p>
            <router-link to="/login">
                <button class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                    Tiếp tục
                </button>
            </router-link>
        </div>
    </div>
</template>
