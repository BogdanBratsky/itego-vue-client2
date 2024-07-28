import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/ItegoMainView.vue')
  },
  {
    path: '/thanks',
    component: () => import('../views/ItegoThanksView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
