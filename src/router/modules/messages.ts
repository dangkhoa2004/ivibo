import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/message',
        name: 'Tin nhắn',
        component: () => import('@/views/ChatListView/ChatListView.vue'),
        meta: { title: 'Tin nhắn' },
    }
]

export default dashboardRoutes
