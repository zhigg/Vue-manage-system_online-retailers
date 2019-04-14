import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import User from '@/components/user'
Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/user',
          name: 'User',
          component: User,
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next) => {
  // console.log(to)
  // console.log(from)
  let token = localStorage.getItem('myToken')
  if (to.path == '/login') {
    next()
    return
  }
  // bug 有token就放行 没token去login 但是一开始未登录就没有token 则tologin next-login 不停循环 栈溢出
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router