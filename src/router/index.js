import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('loginResult'))
  if (!user && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
export default router
