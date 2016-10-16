export default function (router) {
  router.map({
    '/': {
      name: 'index',
      component: require('./views/index.vue')
    },
    'admin/article/add': {
      name: 'addArticle',
      component: require('./views/article/add.vue')
    },
    'admin/article/list/:page': {
      name: 'articleList',
      component: require('./views/article/list.vue')
    },
    'admin/article/:id/update': {
      name: 'updateArticle',
      component: require('./views/article/update.vue')
    },
    'admin/image/add': {
      name: 'addImage',
      component: require('./views/image/add.vue')
    },
    'admin/image/list/:page': {
      name: 'imageList',
      component: require('./views/image/list.vue')
    },
    'admin/image/:id/update': {
      name: 'updateImage',
      component: require('./views/image/update.vue')
    },
    // '/login': {
    //   name: 'login',
    //   component: require('./components/Login/index.vue')
    // },
    // '/settings': {
    //   name: 'settings',
    //   component: require('./components/Settings/index.vue')
    // },
    // '/article/:aid':{
    //   name: 'article',
    //   component: require('./components/Article/index.vue')
    // },
    // '/apps': {
    //   name: 'apps',
    //   component: require('./components/Apps/index.vue')
    // },
    // '*': {
    //   component: require('./components/NotFound.vue')
    // }
  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}