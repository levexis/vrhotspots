import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import('../views/Writing.vue')
  },
  {
    path: '/oral',
    name: 'Oral',
    component: () => import('../views/Oral.vue')
  },
  {
    path: '/dialogue',
    name: 'Dialogue',
    component: () => import('../views/Dialogue.vue')
  },
  {
    path: '/spelling',
    name: 'Spelling',
    component: () => import('../views/Spelling.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
