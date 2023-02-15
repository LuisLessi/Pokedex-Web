import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/First',
      name: 'FirstGeneration',
      component: () => import('../views/FirstGeneration.vue')
    },
    {
      path: '/Second',
      name: 'SecondGeneration',
      component: () => import('../views/SecondGeneration.vue')
    },
    {
      path: '/Third',
      name: 'ThirdGeneration',
      component: () => import('../views/ThirdGeneration.vue')
    },
    {
      path: '/Four',
      name: 'FourGeneration',
      component: () => import('../views/FourGeneration.vue')
    },
    {
      path: '/Fifth',
      name: 'FifthGeneration',
      component: () => import('../views/FifthGeneration.vue')
    },
    
  ]
})

export default router
