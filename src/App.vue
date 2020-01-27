<template>

  <main id="app">

    <h1>{{title}}</h1>
    <router-view></router-view>
    <users></users>

  </main>

</template>

<script>

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueInputMask from 'vue-inputmask-ng'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import users from './components/users'
import vmodal from 'vue-js-modal'

Vue.use(vmodal)
Vue.use(BootstrapVue)
Vue.use(VueInputMask)

export default {
  name: 'app',
  data() {
    return {
      title: 'User List App'
    }
  },
  components: {
    users
  }
}
</script>

<style lang='sass'>

#app
  min-height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding-top: 60px
  background: linear-gradient(to bottom left,#724fee 10%,#7b3d8c)

  h5
    color: #fff
    font-size: 24px
    font-weight: 700

  h1
    color: #fff
    font-weight: 700

</style>
