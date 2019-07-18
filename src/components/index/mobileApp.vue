<template>
	<div>
		<v-header></v-header>
		<section class="mobileSec" v-for="a in mymoblist" :key="a.id">
			<h2>{{a.middleTitle}}</h2>
			<div class="mobile">
				<ul class="mobileUl">
					<li v-for="item in a.mobilelist" :key="item.id">
						<router-link to="#">
							<div class="mobileImg" :style="{backgroundImage:'url('+item.src+')'}"></div>
							<p class="mobileP">{{item.title}}</p>
							<div class="mobileStar">
								<span :style="{backgroundImage:'url('+item.star1+')'}"></span>
								<span :style="{backgroundImage:'url('+item.star1+')'}"></span>
								<span :style="{backgroundImage:'url('+item.star1+')'}"></span>
								<span :style="{backgroundImage:'url('+item.star2+')'}"></span>
								<span :style="{backgroundImage:'url('+item.star3+')'}"></span>
								<span>{{item.score}}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<section class="mobileSec2"  v-for="a in mymoblist2" :key="a.id">
			<h2>{{a.phone}}</h2>
			<div class="mobileSec2Box">
				<ul class="mobileSec2Ul">
					<li v-for="item in a.mobilelist2" :key="item.id">
						<router-link to="#">
							{{item.sort}}
							<span></span>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<section class="mobileSec3">
			<router-link to="#" class="lastBox">
				<img src="../../../data/img/bookImg/douban-app-logo.png"/>
				<p>豆瓣</p>
			</router-link>
		</section>
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
			mymoblist:[],
			mymoblist2:[]
		}
	},
	mounted(){
		var _this = this
		this.$http.get('./data/mobileApp.json')
		.then((res)=>{
			console.log(res)
			_this.mymoblist = res.data.mymoblist
			_this.mymoblist2 = res.data.mymoblist2
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	}
}
</script>

<style scoped>
.mobileSec{
	padding-top: 10px;
	overflow: hidden;
}
.mobileSec h2{
	padding: 0 18px;
}
.mobile{
	margin-bottom: -webkit-calc(-18px);
}
.mobileUl{
	display: block;
	width: 100%;
	overflow-x: auto;
	padding: 15px 0 35px 0;
	white-space: nowrap;
}
.mobileUl li{
	margin: 0;
	display: inline-block;
	width: 26%;
	margin-left: 7px;
	
}
.mobileUl li:first-child{
	margin-left: 18px;
}
.mobileImg{
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
}
.mobileImg::after{
	display: block;
	content: '';
	padding-top: 100px;
}
.mobileP{
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 10px;
	font-size: 15px;
	font-weight: 500;
	color: #111;
}
.mobileStar span{
	display: inline-block;
	background-size: 12px;
	background-position: 100%;
	background-repeat: no-repeat;
	width: 12px;
	height: 12px;
	font-size: 12px;
	color: #AAAAAA;
}
/**********mobileSec2***************/
.mobileSec2{
	margin-left: 15px;
}
.mobileSec2Box{
	width: 100%;
}
.mobileSec2Ul{
	overflow: hidden;
	padding: 18px 0 30px;
}
.mobileSec2Ul li{
	margin: 0;
	float: left;
	/*background: yellow;*/
	width: 40.5%;
	padding-right: 18px;
	border-top: solid 1px #eee;
    border-right: solid 1px #eee;

}
.mobileSec2Ul li:nth-child(even){
	border-right: none;
	padding-left: 18px;
}
.mobileSec2Ul li a{
	font-size:14px ;
	line-height: 42px;
	width: 100%;
	overflow: hidden;
}
.mobileSec2Ul li a p{
	display: inline-block;
	text-align: left;
	/*float: left;*/
}
.mobileSec2Ul li a span{
	display: inline-block;
	width: 8px;
	height: 8px;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    transform: rotate(-45deg);
    /*text-align: right;*/
    font-weight: bold;
    /*margin-left: 16%;*/
   margin-top: 16px;
    float: right;
}
/**********mobileSec3***************/
.mobileSec3{
	margin: 50px 0 50px;
	text-align: center;
	padding-bottom: 20px;
}
.lastBox{
	display: inline-block;
	overflow: hidden;
	margin-bottom: 15px;
}
.lastBox img{
	display: block;
	float: left;
	width: 48px;
	margin-right: 12px;
}
.lastBox p{
	display: block;
	float: right;
	font-size: 24px;
	line-height: 48px;
	color: #111111;
}
</style>