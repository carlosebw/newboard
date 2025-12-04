import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/pages/Dashboard.vue')
      },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
