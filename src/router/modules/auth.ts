import type { RouteRecordRaw } from 'vue-router'

const errorsRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Đăng nhập',
    component: () => import('@/views/Authetication/LoginView.vue'),
    meta: { title: 'Đăng nhập' },
  },
  {
    path: '/register',
    name: 'Đăng ký',
    component: () => import('@/views/Authetication/screens/RegisterView.vue'),
    meta: { title: 'Đăng ký' },
  },
  {
    path: '/forgot-password',
    name: 'Quên mật khẩu',
    component: () => import('@/views/Authetication/screens/ForgotPasswordView.vue'),
    meta: { title: 'Quên mật khẩu' },
  },
  {
    path: '/otp-verify',
    name: 'Xác thực đăng ký',
    component: () => import('@/views/Authetication/screens/OtpVerifyView.vue'),
    meta: { title: 'Xác thực đăng ký' },
  },
]

export default errorsRoutes
