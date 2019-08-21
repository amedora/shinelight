import Vue from 'vue'

import App from './App.vue'
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
  render: h => h(App)
}).$mount('#app')
