import api from '../api'
import * as types from './types'
import { saveCookie, signOut } from '../utils/authService'
import img from '../assets/images/shanghai.jpg'

// 添加文章
export const addArticle = (store, article) => {
  api.addArticle(article).then(response => {
    const json = response.json()
    if (json.success) {
      store.router.go({path:'/admin/article/list/1'})
    }
  })
}

// 获取文章列表
export const getArticleList = ({ dispatch }, page) => {
  api.getArticleList({currentPage: page}).then(response => {
    const json = response.json()
    console.log(json)
    dispatch(types.ADD_ARTICLE_LIST,{articleList: json.data, count: json.count})
  })
}

// 获取文章信息
export const getArticle = ({ dispatch }, id) => {
  api.getArticle(id).then(response => {
    const json = response.json()
    console.log(json)
    dispatch(types.ARTICLE_DETAIL,{articleDetail: json.data})
  })
}

// 更新文章信息
export const updateArticle = (store, article) => {
  api.updateArticle(article).then(response => {
    const json = response.json()
    console.log(json)
    if (json.success) {
      store.router.go({path:'/admin/article/list/1'})
    }
  })
}

// 删除文章
export const deleteArticle = (store, article) => {
  api.deleteArticle(article._id).then(response => {
    const json = response.json()
    console.log(json)
    if (json.success) {
      // store.router.go({path:'/admin/article/list/1'})
      store.dispatch(types.REMOVE_ARTICLE,{article: article})
    }
  })
}

// 添加纹身图
export const addImage = (store, image) => {
  api.addImage(image).then(response => {
    const json = response.json()
    if (json.success) {
      store.router.go({path:'/admin/image/list/1'})
    }
  })
}

// 获取纹身图列表
export const getImageList = ({ dispatch }, page) => {
  api.getImageList({currentPage: page}).then(response => {
    const json = response.json()
    console.log(json)
    dispatch(types.ADD_IMAGE_LIST,{imageList: json.data, count: json.count})
  })
}

// 获取纹身图信息
export const getImage = ({ dispatch }, id) => {
  api.getImage(id).then(response => {
    const json = response.json()
    console.log(json)
    dispatch(types.IMAGE_DETAIL,{imageDetail: json.data})
  })
}

// 更新纹身图信息
export const updateImage = (store, image) => {
  api.updateImage(image).then(response => {
    const json = response.json()
    console.log(json)
    if (json.success) {
      store.router.go({path:'/admin/image/list/1'})
    }
  })
}

// 删除纹身图
export const deleteImage = (store, image) => {
  api.deleteImage(image._id).then(response => {
    const json = response.json()
    console.log(json)
    if (json.success) {
      // store.router.go({path:'/admin/image/list/1'})
      store.dispatch(types.REMOVE_IMAGE,{image: image})
    }
  })
}

// 登录
export const localLogin = (store, userInfo) => {
  console.log('step2: 准备登录')
  api.localLogin(userInfo).then(response => {
    const json = response.json()
    console.log('step2: 接口返回结果')
    console.log(json)
    const token = json.token
    saveCookie('token', token)
    console.log('登录成功,欢迎光临!')
    getUserInfo(store)
    store.dispatch(types.LOGIN_SUCCESS, {token: token })
    // showMsg(store,'登录成功,欢迎光临!','success')
    store.router.go({path:'/'})
  }, response => {
    // getCaptchaUrl(store)
    alert(response.json().error_msg || '登录失败')
  })
}

// 注册
export const localRegister = (store, userInfo) => {
  console.log('step2: 准备注册')
  api.localRegister(userInfo).then(response => {
    const json = response.json()
    console.log('step2: 接口返回结果')
    console.log(json)
    if (json.success) {
      console.log('step3: 注册成功，开始登录')
      localLogin(store, userInfo)
    }
  }, response => {
    // getCaptchaUrl(store)
    alert(response.json().error_msg || '注册失败')
  })
}

// 获取用户信息
export const getUserInfo = ({ dispatch }) => {
  api.getMe().then(response => {
    if(!response.ok){
      return dispatch(types.USERINFO_FAILURE)
    }
    dispatch(types.USERINFO_SUCCESS, { user: response.json().userInfo })
  }, response => {
    dispatch(types.USERINFO_FAILURE)
  })
}

// 登出
export const logout = ({dispatch, router}) => {
  signOut()
  dispatch(types.LOGOUT_USER)
  window.location.pathname = '/'
}

// export const showMsg = ({dispatch}, content,type='error') => {
//   dispatch(types.SHOW_MSG, {content:content,type:type})
// }

// export const hideMsg = ({dispatch}) => {
//   dispatch(types.HIDE_MSG)
// }

// export const changeStyleMode = ({dispatch}) => {
//   dispatch(types.CHANGE_STYLE_MODE)
// }

// export const getCaptchaUrl = ({dispatch}) => {
//   dispatch(types.GET_CAPTCHAURL)
// }

// export const getIndexImage = ({dispatch}) => {
//   api.getIndexImage().then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_INDEX_IMG, {indexImg: img})
//     }
//     dispatch(types.GET_INDEX_IMG, {indexImg: response.data.img})
//   }, response => {
//     dispatch(types.GET_INDEX_IMG, {indexImg: img})
//   })
// }

// export const getSnsLogins = ({ dispatch }) => {
//   api.getSnsLogins().then(response => {
//     if(!response.ok){
//       return dispatch(types.FAILURE_GET_SNSLOGINS)
//     }
//     dispatch(types.SUCCESS_GET_SNSLOGINS, response.data.data)
//   }, response => {
//     dispatch(types.FAILURE_GET_SNSLOGINS)
//   })
// }

// export const updateUser = (store,userInfo) => {
//   api.mdUser(userInfo).then(response => {
//     if(!response.ok){
//       return showMsg(store,'更新用户资料失败!')
//     }
//     store.dispatch(types.UPDATE_USER_SUCCESS, { user: response.data.data })
//     showMsg(store,'更新资料成功!','success')
//   }, response => {
//     showMsg(store,'更新用户资料失败!')
//   })
// }

// export const getTagList = ({ dispatch }) => {
//   api.getTagList().then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_TAG_LIST_FAILURE)
//     }
//     dispatch(types.GET_TAG_LIST_SUCCESS, { tagList: response.data.data })
//   }, response => {
//     dispatch(types.GET_TAG_LIST_FAILURE)
//   })
// }

// //更改options
// export const changeOptions = ({ dispatch },options) => {
//   dispatch(types.CHANGE_OPTIONS, { options: options })
// }
// //getArticleList
// // export const getArticleList = ({ dispatch }, options, isAdd) => {
// //   dispatch(types.REQUEST_ARTICLE_LIST)
// //   api.getFrontArticleList(options).then(response => {
// //     if(!response.ok){
// //       return dispatch(types.GET_ARTICLE_LIST_FAILURE)
// //     }
// //     const json = response.data
// //     const isMore = !(json.data.length < options.itemsPerPage)
// //     isAdd
// //       ? dispatch(types.ADD_ARTICLE_LIST,{
// //         articleList: json.data,
// //         isMore:isMore
// //       })
// //       : dispatch(types.ARTICLE_LIST,{
// //         articleList: json.data,
// //         isMore:isMore
// //       })
// //   }, response => {
// //     dispatch(types.GET_ARTICLE_LIST_FAILURE)
// //   })
// // }


// export const getArticleDetail = ({ dispatch }, id, user) => {
//   api.getFrontArticle(id).then(response => {
//     if(response.ok){
//       let isLike = false
//       let article = response.data.data
//       if(user){
//         user.likes.map(item=>{
//           if(item.toString() === article._id){
//             isLike = true
//           }
//         })
//       }
//       dispatch(types.ARTICLE_DETAIL, {
//         articleDetail: {...article,isLike:isLike}
//       })
//     }
//   })
// }
// //getPrenext
// export const getPrenext = ({ dispatch,state }, id) => {
//   api.getPrenext(id,state.options.item).then(response => {
//     if(response.ok){
//       dispatch(types.PRENEXT_ARTICLE, { prenextArticle: response.data.data })
//     }
//   })
// }

// //toggleLike
// export const toggleLike = ({ dispatch }, id) => {
//   api.toggleLike(id).then(response => {
//     const json = response.data
//     if(response.ok){
//       dispatch(types.TOGGLE_LIKE, { 
//         like_count: json.count,
//         isLike: json.isLike 
//       })
//     }
//   })
// }


// export const getCommentList = ({ dispatch },id) => {
//   api.getFrontCommentList(id).then(response => {
//     if(!response.ok){
//       return dispatch(types.GET_COMMENT_LIST_FAILURE)
//     }
//     dispatch(types.COMMENT_LIST, { commentList: response.data.data })
//   }, response => {
//     dispatch(types.GET_COMMENT_LIST_FAILURE)
//   })
// }

// //addComment
// export const addComment = (store,data) => {
//   api.addNewComment(data).then(response => {
//     if(!response.ok){
//       return showMsg(store,response.data.error_msg || '添加评论失败!')
//     }
//     showMsg(store,'添加评论成功!','success')
//     store.dispatch(types.SUCCESS_ADD_COMMENT, { comment: response.data.data })
//   }, response => {
//     showMsg(store,response.data.error_msg || '添加评论失败!')
//   })
// }

// export const addReply = (store,cid,data) => {
//   api.addNewReply(cid,data).then(response => {
//     if(!response.ok){
//       return showMsg(store,response.data.error_msg || '添加回复失败!')
//     }
//     showMsg(store,'添加回复成功!','success')
//     store.dispatch(types.SUCCESS_ADD_REPLY, { cid:cid,replys: response.data.data })
//   }, response => {
//     showMsg(store,response.data.error_msg || '添加回复失败!')
//   })
// }

// //getApps
// export const getApps = ({ dispatch }) => {
//   api.getApps().then(response => {
//     if(!response.ok){
//       return dispatch(types.FAILURE_GET_APPS)
//     }
//     dispatch(types.SUCCESS_GET_APPS, { apps: response.data.data })
//   }, response => {
//     dispatch(types.FAILURE_GET_APPS)
//   })
// }