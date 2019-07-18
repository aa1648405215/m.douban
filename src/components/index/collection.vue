<template>
	<div class="bigCollection">
		<v-header></v-header>
		<div class="collection">
			<ul class="collectionUl">
				<li :class="{collectP1:index==num,collectP:index==num}" v-for="(item,index) in collectlist" :key="item.id" @click="change(index)">
					<router-link to="#">
						<p>{{item.title}}</p>
					</router-link>
				</li>
			</ul>
			<section class="collectionSec" v-for="(a,index) in collectlist2" :key="a.id" v-show="index==num">
				<h2>{{a.title}}</h2>
				<ul class="collectUl">
					<li  v-for="(item,index) in a.inlist2" :key="item.id">
						<router-link to="#">							
							<div class="collectImg" :style="{backgroundImage:'url(' + item.src + ')'}">
								<span>视频</span>
							</div>
							<div class="collectFont">
								<p class="collect1">{{item.des}}</p>
								<p>{{item.speaker}}</p>
								<div class="collectAA">
									<p>{{item.price}}</p>
									<del>{{item.oldprice}}</del>
								</div>
							</div>
						</router-link>						
					</li>
				</ul>
				<div class="onload">
					更多内容在路上...
				</div>
			</section>
		</div>
	</div>	
</template>

<script>
import vheader from './header.vue'
export default{
	components:{
		'v-header':vheader
	},
	data(){
		return{
			num:0,
			collectlist:[],
			collectlist2:[]
					
		}	
	},
	methods:{
		change(b){
			this.num=b;
		}
	},
	mounted(){
		
		var _this = this
		this.$http.get('./data/collection.json')
		.then((res)=>{
			console.log(res)
			_this.collectlist = res.data.collectlist
			_this.collectlist2 = res.data.collectlist2
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	}
}
</script>

<style scoped>
.collection{
	width: 100%;
	overflow: hidden;
	padding-right:20px;
}
.collectionUl{
	float: left;
	width: 22.5%;
	height: 100%;	
	overflow-y: auto; /*出滚动条*/
	background-color: #f7f7f7;
	position: fixed;
	left: 0;
	top: 47px;
	text-align: center;	
}
.collectionUl li{
	display: inline-block;
	margin: 0;
	padding: 20px 5px 0;
	/*height: 60px;*/	
	width: 100%;
	box-sizing: border-box;
	height: 9%;
	
}
.collectionUl li a{
	display: block;
	color: #191919;
}
.collectionUl li a p{
	display: block;
	font-size: 13px;
	line-height: 19px;
	/*white-space: pre-wrap;*/
}
.collectP::after{
    content: "";
    display: block;
    background-color: #42bd56;
    width: 35px;
    height: 2px;
    margin: 5px auto 0;
}
.collectP1{
	background-color: white;
}
.collectionSec{
	float: right;
	width: 70%;
	/*background-color: skyblue;*/
}
/************collectionSec*******************/
.collectionSec{
	position: relative;
	height: 100%;
	padding-right: 20px;
	padding-bottom: 60px;
	/*padding-top: 100px;*/
}
.collectionSec	h2{
	font-size: 24px;
	color: #191919;
	font-weight: 400px;
	padding: 30px 0 10px;
	line-height: 32px;
}
.collectUl li{
	margin: 0;
}
.collectUl li a{
	display: block;
	overflow: hidden;
	padding: 15px 0;
	border-bottom: 1px solid #DFDFDF;
}
.collectUl li a:last-child{
	border-bottom: none;
}
.collectImg{
	float: left;
	width: 38%;
	position: relative;
	background-size: cover;
	background-position: 50%;
	background-repeat: no-repeat;
	margin-right: 15px;
	border-radius: 4%;
}
.collectImg::after{
	display: block;
	content: '';
	padding-top: 100px;
	padding-right: 100px;
}
.collectImg span{
	display: block;
	position: absolute;
	bottom: 4px;
	right: 4px;
	background-color: rgba(0,0,0,0.4);
	color: white;
	border-radius: 10px;
	padding: 0 6px;
}
.collectFont{
	float: right;
	width: 55%;
}
.collectFont .collect1{
	display: block;
	font-size: 15px;
	color: #191919;
	font-weight: 700;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	margin-bottom: 10px;
}

.collectFont p:nth-child(2){
	display: block;
	font-size: 13px;
	color: #818181;
	margin-bottom: 10px;
}
.collectFont .collectAA{
	/*display: block;*/
	/*overflow: hidden;*/
}
.collectFont .collectAA p{
	display: inline-block;
	color: #f97927;
	font-size: 13px;
	font-weight: 700;
	margin-right: 5px;
	/*float: left;*/
}
.collectFont .collectAA del{
	display: inline-block;
	font-size: 12px;
	transform: scale(0.95);
	color: #CCCCCC;	
	/*float: right;*/
}
.onload{
	font-size: 13px;
	color: #CCCCCC;
	margin: 60px 0 20px;
	text-align: center;
}
</style>