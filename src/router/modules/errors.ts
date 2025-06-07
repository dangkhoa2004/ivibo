import type { RouteRecordRaw } from 'vue-router'

const errorsRoutes: RouteRecordRaw[] = [
  {
    path: '/not-found',
    name: 'Lỗi 404',
    component: () => import('@/views/NotFoundView/NotFoundView.vue'),
    meta: { title: 'Lỗi 404' },
  },
]

export default errorsRoutes
