import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/Register'
import Members from '@/pages/Members'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    }
  ]
})
