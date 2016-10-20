<template>
  <div class="top-box">
    <div v-if="auth.token">
      <Navbar></Navbar>
      <section class="page">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </section>
    </div>
    <div v-if="!auth.token">
      <Login></Login>
    </div>
  </div>
  
</template>

<script>

import '../assets/lib/js/uniform/css/uniform.default.min.css'
import '../assets/lib/css/animatecss/animate.min.css'

import store from '../vuex/store'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from './Login'

import { getUserInfo } from '../vuex/actions'

export default {
  store,
  components: { Navbar, Sidebar, Login },
  vuex:{
    getters:{
      auth: state => state.auth
    },
    actions:{
      getUserInfo
    }
  },
  created (){
    if(this.auth.token){
      this.getUserInfo()
    }
  }
}
</script>
