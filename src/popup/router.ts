import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import SettingPage from './pages/SettingPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/setting', component: SettingPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
