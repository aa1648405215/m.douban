//导入路由
import VueRouter from 'vue-router'

//导入创建的.vue模块文件路径    类似定义组件
import hotMovie  from  '../components/index/hotMovie.vue'
import book  from  '../components/index/book.vue'
import doubanTime  from  '../components/index/doubanTime.vue'
import useDouban  from  '../components/index/useDouban.vue'
import first from '../components/index/first.vue'
import search from '../components/index/search.vue'
import login1 from '../components/index/login1.vue'
import login2 from '../components/index/login2.vue'
import focusbook from '../components/index/focusbook.vue'
import greenpepper from '../components/index/greenpepper.vue'
import collection from '../components/index/collection.vue'
import mobileApp from '../components/index/mobileApp.vue'
import shop from '../components/index/shop.vue'

//配置路由
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:first,
		},
		{
			path:'/hotMovie',
			component:hotMovie
		},
		{
			path:'/book',
			component:book
		},
		{
			path:'/doubanTime',
			component:doubanTime
		},
		{
			path:'/useDouban',
			component:useDouban
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/login1',
			component:login1
		},
		{
			path:'/login2',
			component:login2
		},
		{
			path:'/focusbook',
			component:focusbook
		},
		{
			path:'/greenpepper',
			component:greenpepper
		},
		{
			path:'/collection',
			component:collection
		},
		{
			path:'/mobileApp',
			component:mobileApp
		},
		{
			path:'/shop',
			component:shop
		},
		{
			path:'/',
			redirect:'/'
		}	
	]
})
