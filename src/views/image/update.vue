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
                    <textarea name="intro" rows="3" class="form-control" v-model="image.intro" readonly="readonly"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">阅读量</div>
                  <div class="col-sm-10">
                    <input name="reading" class="form-control" v-model="image.reading" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">价格</div>
                  <div class="col-sm-10">
                    <input name="price" class="form-control" v-model="image.price" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-1 control-label">状态</div>
                  <div class="col-sm-10">
                    <select name="status" class="form-control" v-model="image.status" readonly="readonly">
                      <option value="1">可见</option>
                      <option value="0">屏蔽</option>
                    </select>
                  </div>
                </div>
                <div class="form-group" v-if="image.list.length > 0">
                  <div class="col-sm-1 control-label">图片</div>
                  <div class="col-sm-10">
                    <div class="imageList">
                      <img v-bind:src="item" v-for="item in image.list" track-by="$index">
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-offset-1 col-sm-10">
                    <a id="add-article-btn" type="submit" class="btn btn-primary" href="/admin/image/list/1">返回</a>
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
import { getImage, updateImage } from '../../vuex/actions'
export default {
  vuex:{
    getters:{
      imageDetail: ({imageDetail}) => imageDetail.item,
    },
    actions:{
      getImage,
      updateImage 
    }
  },
  data (){
    return {
      image: this.imageDetail
    }
  },
  route: {
    data ({ to }) {
      this.getImage(to.params.id)
    }
  },
  watch: {
    'imageDetail' (obj) {
      this.image = Object.assign({}, obj)
    }
  }
}
</script>

<style scoped>
.imageList {
  margin: 20px 0;
  padding: 30px 0 0 42px;
  background: #fff;
  border-radius: 20px;
}
.imageList img {
  border-radius: 20px;
  width: 128px;
  margin-bottom: 30px;
  margin-right: 25px;
}
</style>