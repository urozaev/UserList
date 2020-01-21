<template>
  <main id="app">
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Actions with the user list"/>
    <router-view></router-view>
    <users @remove-user="removeUser" @edit-info="editInfo"></users>
    <!-- <h5>{{userInfo.name}}/{{userInfo.phone}}</h5> -->
    <!-- <modal :users='users' v-model="userInfo"></modal> -->
    

    
  </main>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueInputMask from 'vue-inputmask-ng'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloWorld from './components/HelloWorld.vue'
import users from './components/users'
import vmodal from 'vue-js-modal'
// import modal from './components/modal'
Vue.use(vmodal)
Vue.use(BootstrapVue)
Vue.use(VueInputMask)

export default {
  name: 'app',
  data() {
    return {
      posts: null,
      content: '',
    }
  },
  created() {
    this.getAllPosts();
  },
  components: {
    HelloWorld,
    users
  },
  methods: {
    removeUser(elem){
      this.users.splice(elem, 1)
    },
    editInfo(elem){
      alert(this.users[elem].name)
      // this.showModal = true
    },
    getAllPosts() {
      
    }
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



</style>
