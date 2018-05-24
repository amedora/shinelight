import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commander',
      component: require('@/components/Commander').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
