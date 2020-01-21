import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store/';
import App from './App.vue'
import users from './components/users.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/users', component: users }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
