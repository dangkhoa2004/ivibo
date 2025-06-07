import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import homeRoutes from './modules/homes'
import messagesRoutes from './modules/messages'
import settingsRoutes from './modules/settings'
import errorsRoutes from './modules/errors'
import authRoutes from './modules/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
  ...homeRoutes,
  ...messagesRoutes,
  ...settingsRoutes,
  ...authRoutes,
  ...errorsRoutes,
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
