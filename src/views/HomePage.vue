<template>
	<el-container>
		<el-header height="50px">
			<div class="logo">EXAM</div>
			<el-row id="nav-header">
				<template v-for="item in menus">
					<el-col :span="4" :key="item.path">
						<router-link :to="item.path">{{item.name}}</router-link>
					</el-col>
				</template>
			</el-row>
		</el-header>
		<el-main id="content">
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	import store from '../vuex/store';
	import _ from 'lodash';

	export default {
		data() {
			return {
				menus: [{
		            path: '/index',
		            name: '推荐名单'
		        },
		        {
		            path: '/campaign/form',
		            name: '发布活动'
		        }, {
		            path: '/campaign/list',
		            name: '我的任务'
		        }, {
		            path: '/chart/index',
		            name: '营销效果'
		        }, {
		            path: '/about',
		            name: '关于我们'
		        }],
			}
		},
    components: {
		},
		methods: {
		},
		computed: {
		},
		mounted() {
		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.el-container{
		height:100%;
		.el-header{
			padding-right: 10px;
			padding-left:10px;
			height:50px;
			background: #fff;
			box-shadow: 0 4px 4px 0 rgba(181,181,205,0.50);
			.el-col{
				a{
					font-size: 18px;
					color:#4a4a4a;
					letter-spacing: 2.3px;
					line-height: 50px;
				}
				a.router-link-active{
					color:$color-primary;
				}
			}
			.logo{
				float:left;
				font-size: 24px;
				width: 120px;
				line-height: 50px;
				color: #3C5398;
				letter-spacing: 3.08px;
			}
			#nav-header{
				float:left;
				width: calc(100% - 120px);

			}
		}
		.el-main{
			margin-top:10px;
			padding:0;
			height: calc(100% - 70px;);
		}
	}
</style>