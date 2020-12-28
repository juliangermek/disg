import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/quicktest',
    component: () => import('@/views/QuickTest.vue')
  },
  {
    path: '/test',
    component: () => import('@/views/Test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
