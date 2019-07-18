<template>
	<div class="shop">
		<section class="banner">
		  <!-- swiper -->
	      <swiper :options="swiperOption" v-if="banner.length">
        	<router-link class="swiper-slide" to="#" v-for="item in banner" :key="item.id" >
        		<img :src="item.src"/>
        	</router-link>
	        <div class="swiper-pagination" slot="pagination"></div>
	      </swiper>	      
		</section>
		<ul class="shopUl">
	      	<li>
	      		<router-link to="#" class="shopIcon1">	      			
	      			<i class="fa fa-shopping-cart" aria-hidden="true"></i>
	      			购物车
	      		</router-link>
	      		
	      	</li>
	      	<li>
	      		<router-link to="#" class="shopIcon2">	      			
	      			<i class="fa fa-user-circle" aria-hidden="true"></i>
	      			我的豆品
	      		</router-link>
	      	</li>
	    </ul>
		<section class="shopSec1">
			<h2>新品首发</h2>
			<ul class="shopSec1Ul">
				<li v-for="item in shoplist1" :key="item.id">
					<router-link to="#">
						<img :src="item.src"/>
						<p class="shopP1">{{item.name}}</p>
						<p class="shopP2">{{item.des}}</p>
						<div class="shopPrice">
							<span>{{item.price}}</span>
							<span>{{item.cout}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="shopSec2">
			<h2>官方小组</h2>
			<ul class="shopSec2Ul">
				<li  v-for="item in shoplist2" :key="item.id">
					<router-link to="#">
						<div class="shopSec2P">
							<p>{{item.title}}</p>
							<p>{{item.content}}</p>
						</div>						
						<span>{{item.time}}</span>
					</router-link>
				</li>
			</ul>
			<router-link to="#" class="shopAA">查看更多讨论<span>></span></router-link>
		</section>
		<section class="shopSec3">
			<h2>热门活动</h2>
			<ul class="shopSec3Ul">
				<li v-for="item in shoplist3" :key="item.id">
					<router-link to="#" class="shopSec3A">
						<div class="shopSec3Img">
							<img :src="item.src"/>
						</div>						
						<div class="shopSec3P">
							<p>{{item.title}}</p>
							<p>{{item.des}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="shopSec4">
			<ul class="shopSec4Ul">
				<li v-for="item in shoplist4" :key="item.id">
					<router-link to="#">{{item.title}}</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	mounted(){
		var _this = this
		this.$http.get('./data/shop.json')
		.then((res)=>{
			_this.banner = res.data.banner
			_this.shoplist1 = res.data.shoplist1
			_this.shoplist2 = res.data.shoplist2
			_this.shoplist3 = res.data.shoplist3
			_this.shoplist4 = res.data.shoplist4
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	},
	data() {
	  return {
	    swiperOption: {
    	  slidesPerView: 1,
    	  centeredSlides:true,
    	  autoplay:true,
    	  loop: true,
    	  loopAdditionalSlides:3,
	      spaceBetween: 15,
	      pagination: {
	        el: '.swiper-pagination',
	            clickable: true
	          }
	       },
	       banner:[],
	       shoplist1:[],
	       shoplist2:[],
	       shoplist3:[],
	       shoplist4:[]
	      }
	    }
	}
</script>

<style scoped>
.shop{
	margin-top: -webkit-calc(-47px);
}
/****************轮播************************/
.banner{
	width: 100%;
}
/*.banner>>>.swiper-container .swiper-wrapper{
	height: 188px;
}*/

.banner>>>.swiper-wrapper .swiper-slide img{
	width: 100%;
}
.banner>>>.swiper-pagination-bullets{
	bottom: 2px;
	/*left: 300px;*/
	width: auto;
	right: -80%;
}
.banner>>>.swiper-pagination-bullets .swiper-pagination-bullet{
	margin: 0 2px;
	height: 4px;
	width: 4px;
}
.banner>>>.swiper-pagination-bullet-active{
	background-color: white;
}
/*****************shopUl**************************/
.shopUl{
	width: 100%;
	white-space: nowrap;
	text-align: center;
	border-bottom: 20px solid #DFDFDF;
}
.shopUl li{
	display: inline-block;
	margin: 0;
	width: 50%;
}
.shopUl li a{
	display: block;
	font-size: 15px;
	line-height: 45px;
	color: #ababac;
}
.shopUl li a i{
	font-size: 18px;
}
.shopUl li:nth-child(1) a i::before{	
    color: #DFDFDF;
    margin-right: 5px;
}
.shopUl li:nth-child(2) a i{	
    color: #dd1944;
    margin-right: 5px;
}
/*****************shopSec1**************************/
.shopSec1 h2{
	padding: 15px;
	color: #3e3a39;
	font-size: 18px;
	line-height: 25px;
}
.shopSec1Ul{
	margin: 0 7.5px;
}
.shopSec1Ul li{
	display: inline-block;
	margin: 0;
	width: 50%;
	padding: 0 7.5px 15px 7.5px;
	box-sizing: border-box;
}
.shopSec1Ul li a img{
	width: 100%;
	/*transform: scale(0.46);*/
}
.shopP1{
	font-size: 15px;
	font-weight: 300;
	color: #3e3a39;
	margin-bottom: 8px;
	line-height: 15px;
	padding-top: 13px;	
}
.shopP2{
	font-size: 13px;
	color: #BABABA;
	line-height: 13px;
	margin-bottom: 8px;
}
.shopPrice span{
	font-size: 16px;
	line-height: 16px;
}
.shopPrice span:nth-child(1)::before{
	display: inline-block;
	content:'\f157' ;
	font-family: FontAwesome;
	margin-right: 2px;
}
.shopPrice span:nth-child(1){
	margin-right: 9px;
    color: #dd1944;
}
.shopPrice span:nth-child(2){
	font-size: 12px;   
    border: 1px solid #44883e;
    color: rgb(70, 166, 143);
    border-color: rgb(70, 166, 143);
    padding: 0 6px;
	line-height: 18px;
}
/********************shopSec2***********************/
.shopSec2 h2{
	padding: 15px;
    color: #3e3a39;
    font-size: 18px;
    line-height: 25px;
}
.shopSec2Ul li{
	margin: 0;
	display: block;
	padding: 15px;
	border-bottom: 1px solid #f3f2f2;
}
.shopSec2Ul li:last-child{
	border-bottom:none;
}
.shopSec2Ul li a p{
	display: inline-block;
}
.shopSec2P{
	display: flex;
}
.shopSec2Ul li a p:nth-child(1){
	/*flex: 1;*/
	margin-right: 5px;
    font-size: 12px;
    border: 1px solid #44883e;
    color: #44883e;
	height: 14px;
	padding: 0 5px;
	box-sizing: border-box;
	position: relative;
}
.shopSec2Ul li a p:nth-child(1)::after{
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../../../data/img/shopImg/1shopIcon.png);
    position: absolute;
    z-index: 1;
    left: 10px;
    bottom: -7px;
}
.shopSec2Ul li a p:nth-child(2){
	flex: 1;
	font-size: 15px;
	color: #3e3a39;
	line-height: 1.4;
}
.shopSec2Ul li a span{
	display: block;
	text-align: right;
	font-size: 12px;
	margin-top: 10px;
	color: #ABABAC;
	line-height: 20px;
}
.shopAA{
	display: block;
	text-align: center;
    font-size: 13px;
    color: #494949;
    padding: 10px 0;
}
.shopAA>span{
	display: inline-block;
	margin-left: 4px;
}
/********************shopSec3***********************/
.shopSec3 h2{
	padding: 15px;
    color: #3e3a39;
    font-size: 18px;
    line-height: 25px;
}
.shopSec3Ul{
	padding: 0 15px;
    
}
.shopSec3Ul li{
	margin: 0;
	background-color: #f3f2f2;
	margin-bottom: 10px;
}
.shopSec3A{
	overflow: hidden;
}
.shopSec3A .shopSec3Img{
	float: left;
	width: 24.65%;
}
.shopSec3Img img{
	width: 100%;
}
.shopSec3A .shopSec3P{
	float: right;
	width: 65%;
	padding:15px  15px 15px 0;
	/*margin-right: 10px;*/
}
.shopSec3P p:nth-child(1){
	font-size: 15px;
	font-weight: 400;
    color: #44883e;
    margin-bottom: 4px;
    line-height: 21px;
}
.shopSec3P p:nth-child(2){
	font-size: 13px;
	color: #ABABAC;
	line-height: 18px;
}
/********************shopSec4***********************/
.shopSec4Ul{
	text-align: center;
}
.shopSec4Ul li{
	margin: 0;
	display: inline-block;
	width: 33.3%;
	
}
.shopSec4Ul li a{
	display: block;
	font-size: 14px;
    color: #ababac;
    line-height: 45px;
}
.shopSec4Ul li:nth-child(1) a::before{
	content: '\f071';
	font-family: FontAwesome;
    margin-right: 10px;
    font-size: 16px;
}
.shopSec4Ul li:nth-child(2) a::before{
	content: '\f040';
	font-family: FontAwesome;
	margin-right: 10px;
    font-size: 16px;
}
.shopSec4Ul li:nth-child(3) a::before{
	content: '\f0b1';
	font-family: FontAwesome;
	margin-right: 10px;
    font-size: 16px;
}
</style>