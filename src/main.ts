import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store/store'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VCalendar from 'v-calendar'
import VueTheMask from 'vue-the-mask'
import Loading from '../src/components/Loading.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />
})

Vue.use(VueTheMask)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('my-loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
