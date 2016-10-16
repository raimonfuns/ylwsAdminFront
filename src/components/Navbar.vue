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
				<li id="header-user" class="dropdown user">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle"><img src="/static/lib/img/avatars/avatar3.jpg"><span class="username">123</span><i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li><a href="/auth/logout"><i class="fa fa-user"></i><span>退出</span></a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// import { changeStyleMode,logout,getUserInfo } from '../vuex/actions'
// import defaultAvatar from '../assets/images/avatar.png'
// import { dropdown } from 'vue-strap'

// export default {
//   components:{
//     dropdown
//   },
//   vuex:{
//     getters:{
//       auth: state => state.auth,
//       styleMode: state => state.globalVal.styleMode
//     },
//     actions:{
//       changeStyleMode,
//       logout,
//       getUserInfo
//     }
//   },
//   computed: {
//     defaultAvatar() {
//       return defaultAvatar
//     }
//   },
//   beforeCompile(){
//     document.body.className = this.styleMode
//   },
//   created (){
//     if(this.auth.token){
//       this.getUserInfo()
//     }
//   },
//   methods: {
//     changeMode(){
//       this.changeStyleMode()
//       document.body.className = this.styleMode
//     }
//   }
// }
</script>