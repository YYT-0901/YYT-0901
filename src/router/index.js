import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import PaintRoom from '@/views/PaintRoom.vue'
import Game from '@/components/game/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/paintroom', component: PaintRoom },
    { path: '/home', component: Home },
    { path: '/game', component: Game }
  ]
})

export default router
