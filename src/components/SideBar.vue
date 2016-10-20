<template>
	<div id="sidebar" class="sidebar">
		<div class="sidebar-menu nav-collapse">
			<div class="divide-20"></div>
			<ul>
				<li><a href="/"><i class="fa fa-tachometer fa-fw"></i><span class="menu-text">首页</span></a>
				</li>
				<li class="has-sub" @click="toggle('article')"><a href="javascript:;"><i class="fa fa-file-text fa-fw"></i><span class="menu-text">文章管理</span><span class="arrow"></span></a>
					<ul class="sub" v-bind:style="{display: showArticleMenu ? 'block' : 'none'}">
						<li><a v-link="'/admin/article/add'"><span class="sub-menu-text">添加</span></a>
						</li>
						<li><a v-link="'/admin/article/list/1'"><span class="sub-menu-text">列表</span></a>
						</li>
					</ul>
				</li>

				<li class="has-sub" @click="toggle('image')"><a href="javascript:;"><i class="fa fa-file-text fa-fw"></i><span class="menu-text">纹身圈</span><span class="arrow"></span></a>
					<ul class="sub" v-bind:style="{display: showImageMenu ? 'block' : 'none'}">
						<li><a v-link="'/admin/image/add'"><span class="sub-menu-text">添加</span></a>
						</li>
						<li><a v-link="'admin/image/list/1'"><span class="sub-menu-text">列表</span></a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			showArticleMenu: false,
			showImageMenu: false
		}
	},
	methods: {
		toggle (action) {
			if (action == 'article') {
				this.showArticleMenu = !this.showArticleMenu	
				this.showImageMenu = false
			} else if (action == 'image') {
				this.showImageMenu = !this.showImageMenu	
				this.showArticleMenu = false
			}
		}
	}
}
</script>