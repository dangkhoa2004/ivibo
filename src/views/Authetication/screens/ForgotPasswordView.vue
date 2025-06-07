<template>
    <div class="min-h-screen bg-white px-6 pt-12 text-gray-800 flex flex-col">
        <!-- Header -->
        <div class="text-center mb-8">
            <h1 class="text-2xl font-bold mb-2">Quên mật khẩu</h1>
            <p class="text-sm text-gray-500 leading-snug">
                Nhập email để nhận liên kết<br />
                đặt lại mật khẩu của bạn.
            </p>
        </div>

        <!-- Email input -->
        <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold">Địa chỉ email</label>
            <input id="email" type="email" placeholder="tên@email.com"
                class="w-full h-[56px] px-4 border border-gray-300 rounded-xl focus:outline-none placeholder-gray-400" />
        </div>

        <!-- Footer cố định -->
        <div class="fixed bottom-0 left-0 right-0 px-6 py-4 bg-white shadow-inner">
            <router-link to="/login">
                <button class="w-full h-[56px] bg-orange-500 text-white rounded-2xl text-base font-semibold">
                    Tiếp tục
                </button>
            </router-link>
        </div>
    </div>
</template>
