import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'
import App from './components/App.vue'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jackblog-sass/dist/index.css'
import 'vue-toast/dist/vue-toast.min.css'
import './assets/styles/index.css'

import './assets/lib/css/cloud-admin.css'
import './assets/lib/css/themes/default.css'
import './assets/lib/css/responsive.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/lib/js/bootstrap-daterangepicker/daterangepicker-bs3.css'

// import "./assets/lib/js/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"
// import "./assets/lib/bootstrap-dist/js/bootstrap.min.js"
// import "./assets/lib/js/bootstrap-daterangepicker/moment.min.js"
// import "./assets/lib/js/bootstrap-daterangepicker/daterangepicker.min.js"
// import "./assets/lib/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"
// import "./assets/lib/js/jQuery-slimScroll-1.3.0/slimScrollHorizontal.min.js"
// import "./assets/lib/js/jQuery-Cookie/jquery.cookie.min.js"
// import "./assets/lib/js/script.js"

// jQuery(document).ready(function() {   
//   App.setPage("widgets_box");  //Set current page
//   App.init(); //Initialise plugins and elements
// });

Vue.use(VueRouter)
Vue.use(VueValidator)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.start(Vue.extend(App), '#root')
window.router = router