import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'command',
      component: require('@/components/CommandPage').default
    },
    {
      path: '/newcommand',
      name: 'newcommand',
      component: require('@/components/NewCommandPage').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
