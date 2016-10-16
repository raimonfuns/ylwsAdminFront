<template>
  <div id="main-content">
    <div class="container">
      <div class="row">
        <div id="content" class="col-lg-12">
          <div class="row">
            <div class="col-sm-12">
              <div class="page-header">
                <ul class="breadcrumb">
                  <li><i class="fa fa-home"></i><a href="index.html">首页</a>
                  </li>
                  <li>添加文章</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row con-bg-1 content-row">
            <div class="col-md-12">
              <form id="add-article-form" action="/posts/create" method="post" class="form-horizontal" v-on:submit.prevent>
                <div class="form-group">
                  <div class="col-sm-1 control-label">*标题</div>
                  <div class="col-sm-10">
                    <input name="title" class="form-control" v-model="article.title">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">*URL</div>
                  <div class="col-sm-10">
                    <input type="url" name="url" placeholder="http://" class="form-control" v-model="article.url">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">cover</div>
                  <div class="col-sm-11"><img id="avatar" src="" width="100" style="margin-bottom: 10px; display: none">
                  </div>
                  <div style="display: none" class="col-sm-1 control-label avatar-space-label"> </div>
                  <div class="col-sm-3">
                    <input id="uploadfile" type="file" class="form-control">
                  </div>
                  <div class="col-sm-3"><a href="javascript:;" id="uploadAvatar" class="btn btn-success">上传</a>
                  </div>
                </div>
                <upload :callback="uploadCallback"></upload>
                <div class="form-group">
                  <div class="col-sm-1 control-label">简要</div>
                  <div class="col-sm-10">
                    <textarea name="intro" rows="3" class="form-control" v-model="article.intro"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">文章状态</div>
                  <div class="col-sm-10">
                    <select name="status" class="form-control" v-model="article.status">
                      <option value="1">可见</option>
                      <option value="0">屏蔽</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-1 col-sm-10">
                    <button id="add-article-btn" type="submit" class="btn btn-primary" @click="addArticle(article)">添加</button>
                  </div>
                </div>
                <input name="author_id" value="183" type="hidden" class="form-control">
                <input id="cover" name="cover" type="hidden" class="form-control">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle } from '../../vuex/actions'
import upload from '../../components/upload'

export default {
  vuex:{
    getters:{

    },
    actions:{
      addArticle
    }
  },
  data (){
    return {
      article:{
        title: '',
        url: '',
        intro: '',
        status: 1
      }
    }
  },
  components: {
    upload
  }
}
</script>