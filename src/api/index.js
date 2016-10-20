import {ArticleResource, ImageResource, AuthResource, UserResource, UploadResource} from './resources'

export default {
  // 文章
  addArticle (article) {
    return ArticleResource.save({controller: 'addArticle'}, article)
  },
  getArticleList (options) {
    return ArticleResource.get({id: 'getArticleList', ...options})
  },
  getArticle (id) {
    return ArticleResource.get({id: id, controller: 'getArticle'})
  },
  updateArticle (article) {
    return ArticleResource.update({id: article._id, controller: 'updateArticle'}, article)
  },
  deleteArticle (id) {
    return ArticleResource.delete({id: id})
  },

  // 纹身圈
  addImage (image) {
    return ImageResource.save({controller: 'addImage'}, image)
  },
  getImageList (options) {
    return ImageResource.get({id: 'getImageList', ...options})
  },
  getImage (id) {
    return ImageResource.get({id: id, controller: 'getImage'})
  },
  updateImage (image) {
    return ImageResource.update({id: image._id, controller: 'updateImage'}, image)
  },
  deleteImage (id) {
    return ImageResource.delete({id: id})
  },
  localLogin (data) {
    return AuthResource.save({id:'local'}, data)
  },
  localRegister (data) {
    return UserResource.save({id:'register'}, data)
  },
  getMe () {
    return UserResource.get({id:'me'})
  },
  
  // 图片上传
  uploadImage (file) {
    var formdata = new FormData()
    formdata.append('file', file)
    return UploadResource.save(formdata)
  },

  getSnsLogins: function () {
    return UserResource.get({id:'snsLogins'})
  },
  mdUser: function (data) {
    return UserResource.update({id:'mdUser'},data)
  },
  getTagList:function () {
    return TagResource.get({id: 'getFrontTagList'})
  },
  getApps:function () {
    return MobileResource.get({id: 'getApps'})
  },
  //article
  getIndexImage:function () {
    return ArticleResource.get({id:'getIndexImage'})
  },
  getFrontArticleList:function (options) {
    return ArticleResource.get({id: 'getFrontArticleList', ...options})
  },
  getFrontArticleCount:function () {
    return ArticleResource.get({id: 'getFrontArticleCount'})
  },
  getFrontArticle:function (id) {
    return ArticleResource.get({id: id, controller: 'getFrontArticle'})
  },
  toggleLike:function (id) {
    return ArticleResource.update({id:id,controller:'toggleLike'},{})
  },
  getPrenext:function (id,options) {
    return ArticleResource.get({id:id,controller: 'getPrenext', ...options})
  },
  //comment
  getFrontCommentList:function (id) {
    return CommentResource.get({id:id,controller: 'getFrontCommentList'})
  },
  addNewComment:function (data) {
    return CommentResource.save({id:'addNewComment'},data)
  },
  addNewReply: function (id,data) {
    return CommentResource.save({id:id, controller:'addNewReply'},data)
  },
  delComment:function (id) {
    return CommentResource.remove({id:id})
  },
  delReply: function (id,data) {
    return CommentResource.update({id:id, controller:'delReply'},data)
  }
}