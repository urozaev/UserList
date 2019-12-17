<template>
  <main id="app">
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Actions wit da users list"/>
    <urozaev :users='users'></urozaev>
    <modal></modal>
  </main>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueInputMask from 'vue-inputmask-ng'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloWorld from './components/HelloWorld.vue'
import urozaev from './components/urozaev'
import modal from './components/modal'
Vue.use(BootstrapVue)
Vue.use(VueInputMask)

export default {
  name: 'app',
  data() {
    return {
      posts: null,
      // endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      item: {name: '', phone: '', birthday: '', role: '', isArchive: false},
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
      edit: false,
      editIndex: -1
    }
  },

  created() {
    this.getAllPosts();
  },
  components: {
    HelloWorld,
    urozaev,
    modal
  },
  methods: {
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



</style>
