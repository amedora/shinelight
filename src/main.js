import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
