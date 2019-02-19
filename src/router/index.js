import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/card/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Index,
      meta: { ch: '首页' }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: { ch: '首页' }
    }
  ]
})
