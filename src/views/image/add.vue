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
                  <div class="col-sm-1 control-label">简要</div>
                  <div class="col-sm-10">
                    <textarea name="intro" rows="3" class="form-control" v-model="image.intro"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">阅读量</div>
                  <div class="col-sm-10">
                    <input name="reading" class="form-control" v-model="image.reading">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">价格</div>
                  <div class="col-sm-10">
                    <input name="price" class="form-control" v-model="image.price">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">状态</div>
                  <div class="col-sm-10">
                    <select name="status" class="form-control" v-model="image.status">
                      <option value="1">可见</option>
                      <option value="0">屏蔽</option>
                    </select>
                  </div>
                </div>
                <!-- <div class="form-group">
                  <div class="col-sm-1 control-label">cover</div>
                  <div class="col-sm-11"><img id="avatar" src="" width="100" style="margin-bottom: 10px; display: none">
                  </div>
                  <div style="display: none" class="col-sm-1 control-label avatar-space-label"> </div>
                  <div class="col-sm-3">
                    <input id="uploadfile" type="file" class="form-control">
                  </div>
                  <div class="col-sm-3"><a href="javascript:;" id="uploadAvatar" class="btn btn-success">上传</a>
                  </div>
                </div> -->
                <div class="form-group">
                  <div class="col-sm-1 control-label">图片</div>
                  <div class="col-sm-10">
                    <upload :callback="uploadCallback"></upload>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-1 col-sm-10">
                    <button id="add-article-btn" type="submit" class="btn btn-primary" @click="addImage(image)">添加</button>
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
import { addImage } from '../../vuex/actions'
import upload from '../../components/upload'

export default {
  vuex:{
    getters:{

    },
    actions:{
      addImage
    }
  },
  data (){
    return {
      image:{
        intro: '',
        reading: '',
        price: '',
        status: 1,
        list: []
      }
    }
  },
  components: {
    upload
  },
  methods: {
    uploadCallback (fileUrl) {
      vm.pageParams.singleBgUrl = fileUrl;
    }
  }
}
</script>