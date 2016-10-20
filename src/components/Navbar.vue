<template>
	<div id="header" class="header navbar clearfix">
		<div class="container">
			<div class="navbar-brand">
				<a href="index.html"><img height="30" width="120" src="http://file.do.yy.com/group3/M04/CE/1D/tz0MYFgC9vmACtTXAAAGkOvkrak649.png" class="img-responsive">
				</a>
				<div class="visible-xs"><a href="#" class="team-status-toggle switcher btn dropdown-toggle"><i class="fa fa-users"></i></a>
				</div>
				<div id="sidebar-collapse" class="sidebar-collapse btn"><i data-icon1="fa fa-bars" data-icon2="fa fa-bars" class="fa fa-bars"></i>
				</div>
			</div>
			<ul class="nav navbar-nav pull-right">
				<li id="header-user" class="dropdown user" v-bind:class="{'open': open}" @mouseover="open = true" @mouseout="open = false">
					<a href="#" class="dropdown-toggle"><img src="http://ww4.sinaimg.cn/large/65e4f1e6jw1f8xr65b2clj20ae0ammxl.jpg"><span class="username">{{user.nickname}}</span><i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li><a @click="logout"><i class="fa fa-user"></i><span>退出</span></a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { logout } from '../vuex/actions'

export default {
  vuex:{
    getters:{
      user: state => state.auth.user
    },
    actions:{
      logout
    }
  },
  data () {
  	return {
  		open: false
  	}
  },
  methods: {
  	toggle () {
  		console.log(this.open)
  		this.open = !this.open
  	}
  }
}
</script>