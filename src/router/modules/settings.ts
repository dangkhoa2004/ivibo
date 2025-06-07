import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/settings',
        name: 'Cài đặt',
        component: () => import('@/views/SettingsView/SettingsView.vue'),
        meta: { title: 'Cài đặt' },
    },
    {
        path: '/infomation',
        name: 'Thông tin cá nhân',
        component: () => import('@/views/SettingsView/screens/PersonalInformation.vue'),
        meta: { title: 'Thông tin cá nhân' },
    },
    {
        path: '/change-password',
        name: 'Đổi mật khẩu',
        component: () => import('@/views/SettingsView/screens/ChangePassword.vue'),
        meta: { title: 'Đổi mật khẩu' },
    }
]

export default dashboardRoutes
