import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Bảng điều khiển',
        component: () => import('@/views/HomeView/HomeView.vue'),
        meta: { title: 'Bảng điều khiển thương mại' },
    },
    {
        path: '/project-work-management',
        name: 'Công việc & dự án',
        component: () => import('@/views/HomeView/screens/Project-WorkManagement.vue'),
        meta: { title: 'Công việc & dự án' },
    },
    {
        path: '/projects',
        name: 'Quản lý dự án',
        component: () => import('@/views/HomeView/screens/ProjectManagement.vue'),
        meta: { title: 'Quản lý dự án' },
    },
    {
        path: '/jobs',
        name: 'Quản lý công việc',
        component: () => import('@/views/HomeView/screens/JobManagement.vue'),
        meta: { title: 'Quản lý công việc' },
    },
    {
        path: '/schedules',
        name: 'Lịch trình hôm nay',
        component: () => import('@/views/HomeView/screens/ScheduleManagement.vue'),
        meta: { title: 'Lịch trình hôm nay' },
    },
    {
        path: '/full-schedules',
        name: 'Lịch trình tháng',
        component: () => import('@/views/HomeView/screens/ScheduleManagement_v2.vue'),
        meta: { title: 'Lịch trình tháng' },
    },
    {
        path: '/timekeeping',
        name: 'Chấm công',
        component: () => import('@/views/HomeView/screens/TimeKeepingView.vue'),
        meta: { title: 'Chấm công' },
    },
]
export default dashboardRoutes
