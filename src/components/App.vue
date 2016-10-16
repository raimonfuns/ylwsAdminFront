<template>
  <div class="top-box">
    <Navbar></Navbar>
    <section class="page">
    	<Sidebar></Sidebar>
	    <router-view></router-view>
    </section>
  </div>
</template>

<script>
import store from '../vuex/store'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  store,
  components: { Navbar,Sidebar }
}
</script>
