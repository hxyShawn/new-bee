import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Form, Field, Toast, Icon } from 'vant'
import 'lib-flexible/flexible'
import md5 from 'js-md5';



Vue.config.productionTip = false
Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.prototype.$md5 = md5;
