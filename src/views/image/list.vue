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
                  <li>文章列表</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
						<div class="col-md-8" style="margin: 0 auto; float: none;">
							<div class="box border blue">
								<div class="box-title">
									<h4><i class="fa fa-table"></i><span>文章列表</span></h4>
								</div>
								<div class="box-body">
									<table class="table table-bordered list-table" v-if="imageList.length > 0">
										<thead>
											<tr>
												<th>阅读量</th>
												<th>状态</th>
												<th width="20%">操作</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="image in imageList">
												<td>{{image.intro}}</td>
                        <td>{{image.status ? '可见' : '屏蔽'}}</td>
												<td><a href="/admin/image/{{image._id}}/update" class="btn btn-info btn-xs">编辑</a>
												<button class="btn btn-danger btn-xs del-btn" @click="deleteItem(image)">删除</button></td>
											</tr>
										</tbody>
									</table>
									<pagination :total=totalPage :page=currentPage></pagination>
									<!-- <p v-if="imageList.length == 0" class="text-center">
                  暂时没有文章</p> -->
								</div>
							</div>
						</div>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImageList, deleteImage } from '../../vuex/actions'
import pagination from '../../components/pagination'
export default {
  vuex:{
    getters:{
    	imageList: ({imageList}) => imageList.items,
    	totalPage: ({imageList}) => imageList.count % 10 > 0 ? parseInt(imageList.count / 10) + 1 : imageList.count / 10
    },
    actions:{
      getImageList,
      deleteImage
    }
  },
  components: {
  	pagination
  },
  data () {
    return {
      currentPage: 1
    }
  },
  route:{
    data ({ to }) {
    	let currentPage = parseInt(to.params.page || 1)
    	this.currentPage = currentPage
      this.getImageList(currentPage)
    }
  },
  methods: {
  	deleteItem (image) {
  		this.deleteImage(image)
  	}
  }
}
</script>