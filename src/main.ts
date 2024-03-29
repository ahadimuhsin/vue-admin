import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueNotification from 'vue-notification'

axios.defaults.baseURL = 'http://localhost:8888/api/admin/';
axios.defaults.withCredentials = true;

Vue.config.productionTip = false
Vue.use(VueNotification)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

