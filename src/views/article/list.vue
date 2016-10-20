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
									<table class="table table-bordered list-table" v-if="articleList.length > 0">
										<thead>
											<tr>
												<th>标题</th>
                        <th>简介</th>
                        <th width="20%">操作</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="article in articleList">
												<td>{{article.title}}</td>
												<td>{{article.intro}}</td>
												<td><a v-link="'/admin/article/' + article._id + '/update'" class="btn btn-info btn-xs">编辑</a>
												<button class="btn btn-danger btn-xs del-btn" @click="deleteItem(article)">删除</button></td>
											</tr>
										</tbody>
									</table>
									<pagination :total=totalPage :page=currentPage></pagination>
									<!-- <p v-if="articleList.length == 0" class="text-center">暂时没有文章</p> -->
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
import { getArticleList, deleteArticle } from '../../vuex/actions'
import pagination from '../../components/pagination'
export default {
  vuex:{
    getters:{
    	articleList: ({articleList}) => articleList.items,
    	totalPage: ({articleList}) => articleList.count % 10 > 0 ? parseInt(articleList.count / 10) + 1 : articleList.count / 10
    },
    actions:{
      getArticleList,
      deleteArticle
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
      this.getArticleList(currentPage)
    }
  },
  methods: {
  	deleteItem (article) {
  		this.deleteArticle(article)
  	}
  }
}
</script>