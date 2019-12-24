<template>
  <main id="app">
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Actions wit da users list"/>
    <user :users='users' @remove-user="removeUser" @edit-info="editInfo"></user>
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
import user from './components/user'
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
      // modalShow: false,
      users: [  {
            "id": 1,
            "name": "Илья Емельянов",
            "isArchive": false,
            "role": "developer",
            "phone": "+7 (883) 508-3269",
            "birthday": "12.02.1982"
          },
          {
            "id": 2,
            "name": "Александр Ларионов",
            "isArchive": true,
            "role": "manager",
            "phone": "+7 (823) 440-3602",
            "birthday": "26.01.1986"
          },
          {
            "id": 3,
            "name": "Богдан Давыдов",
            "isArchive": false,
            "role": "developer",
            "phone": "+7 (971) 575-2645",
            "birthday": "29.11.1990"
          }
      ],
      content: '',
      // endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      // item: {name: '', phone: '', birthday: '', role: '', isArchive: false},
      // modalShow: false,
      // edit: false,
      // editIndex: -1
    }
  },
  created() {
    this.getAllPosts();
  },
  components: {
    HelloWorld,
    user
  },
  methods: {
    removeUser(elem){
      this.users.splice(elem, 1)
    },
    editInfo(elem){
      alert(this.users[elem].name)
      // this.users[elem].modalShow = true
    },
    getAllPosts() {
      
    }
  }
}
</script>

<style lang='sass'>

#app 
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
