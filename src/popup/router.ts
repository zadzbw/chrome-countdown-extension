import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import AddPage from './pages/AddPage.vue'
import SettingPage from './pages/SettingPage.vue'
import DetailPage from './pages/DetailPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/add', component: AddPage },
  { path: '/setting', component: SettingPage },
  { path: '/countdown/:id', component: DetailPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
