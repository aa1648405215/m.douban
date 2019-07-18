<template>
	<div>
		<v-header></v-header>
		<section class="book">
			<div class="bookTitle">
				<h2>最受关注图书｜虚构类</h2>
				<router-link to="/focusbook">
					<p>更多</p>
				</router-link>
			</div>
			<swiper :options="swiperOptionbook" class="bookSwiper" v-if="booklist.length"> 
			<router-link to="#" class="swiper-slide bookSwiperIn" v-for="item in booklist" :key="item.id">
				<div class="bookImg" :style="{backgroundImage:'url(' + item.src + ')'}">
					<!--<img :src="item.src"/>-->
				</div>				
				<p>{{item.bookName}}</p>
				<p class="bookStar">
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<!--<span><img :src="item.bookScoreImg"/></span>
					<span><img :src="item.bookScoreImg"/></span>
					<span><img :src="item.bookScoreImg"/></span>-->
					<span :style="{backgroundImage:'url(' + item.bookScoreImg2 + ')'}"></span>
					<!--<span><img :src="item.bookScoreImg2"/></span>-->
					<span>{{item.bookScore}}</span>
				</p>
			</router-link>
		  </swiper>
		</section>
		<section class="book">
			<div class="bookTitle">
				<h2>最受关注图书｜非虚构类</h2>
				<router-link to="#">
					<p>更多</p>
				</router-link>
			</div>
			<swiper :options="swiperOptionbook" class="bookSwiper" v-if="booklist.length">
			<router-link to="#" class="swiper-slide bookSwiperIn" v-for="item in booklist" :key="item.id">
				<div class="bookImg" :style="{backgroundImage:'url(' + item.src + ')'}">
				</div>				
				<p>{{item.bookName}}</p>
				<p class="bookStar">
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
					<span :style="{backgroundImage:'url(' + item.bookScoreImg2 + ')'}"></span>
					<span>{{item.bookScore}}</span>
				</p>
			</router-link>
		  </swiper>
		</section>
		<section class="book book3">
			<div class="bookTitle">
				<h2>豆瓣书店</h2>
				<router-link to="#">
					<p>更多</p>
				</router-link>
			</div>
			<div class="bookStore">
				<div class="bookStoreImg">
					<img src="../../../data/img/bookImg/bookImg3/1book3.jpg"/>
				</div>
				<div class="bookStoreContent">
					<div class="bookStoreConIn">
						<h2>最后的访谈 系列</h2>
						<span>¥ 132</span>
						<p>六位定义世界的文学大师，最后一次探讨生命、创作与爱</p>
					</div>
				</div>
			</div>
			<swiper :options="swiperOptionbook" class="bookSwiper book3Swiper" v-if="booklist3.length"> <!---->
			<router-link to="#" class="swiper-slide bookSwiperIn book3SwiperIn" v-for="item in booklist3" :key="item.id">
				<div class="bookImg" :style="{backgroundImage:'url(' + item.src + ')'}">
				</div>				
				<p>{{item.bookName}}</p>
				<p>{{item.bookScore}}</p>
			</router-link>
		  </swiper>
		</section>
		<section class="book book4">
			<div class="bookTitle">
				<h2>发现好图书</h2>
			</div>
			<div class="book4Swiper">
				<ul class="book4SwiperWrapper">
					<li class="book4li" v-for="item in booklist4" :key="item.id">
						<router-link to="#">
							<p class="ff">{{item.boo4Title}}</p>
							<!--<p class="ff">{{item.boo4Title}}</p>-->
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<section class="book book5">
			<div class="bookTitle">
				<h2>分类浏览</h2>
			</div>
			<ul class="book5ul">
				<li class="book5li" v-for="item in booklist5" :key="item.id">
					<router-link to="#">
						<p>{{item.boo4Title}}</p>
						<span>></span>
					</router-link>
					
				</li>
			</ul>
		</section>
		<section class="book6">
			<div class="book6Title">
				<img src="../../../data/img/bookImg/douban-app-logo.png"/>
				<p>豆瓣</p>
			</div>
			<router-link to="#">
				<p>去 App Store 免费下载 iOS 客户端</p>
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
	mounted(){
		var _this = this;
		this.$http.get('./data/book.json')
		.then((res)=>{
			//console.log(_this)
			//console.log(res)
			_this.booklist = res.data.booklist
			_this.booklist3 = res.data.booklist3
			_this.booklist4 = res.data.booklist4
			_this.booklist5 = res.data.booklist5
			
			
			
		})
		.catch(()=>{
			
		})
		.finally(()=>{
//			var h = document.getElementsByClassName('book4SwiperWrapper')[0];
//			var book4li=document.getElementsByClassName('book4li')[4];
//			console.log(book4li);
//			var d = document.createElement('li');
//			d.style.display = 'block';
//			h.insertBefore(d,book4li);			
		})
		
		
	},
	data(){
		return{
			swiperOptionbook: {
	          slidesPerView: 3.1,//设置slider容器能够同时显示的slides数量
	          centeredSlides:false,//true为居中，默认状态下居左
	          spaceBetween: 8,//在slide之间设置距离（单位px）margin-right
	          slidesPerGroup: 1,//滑动多少个
//	          scrollbar: {
//	            el: '.swiper-scrollbar',
//	            hide: true
//	          }
	    },
	       booklist:[],
	       booklist3:[],
           booklist4:[],
           booklist5:[]   
		}
	}
}
</script>

<style scoped>
.bookTitle{
	padding: 13px 18px 17px 18px;
	overflow: hidden;
}
.bookTitle h2{
	float: left;
	line-height: 15px;
}
.bookTitle a{
	float: right;
}
.bookSwiper{
	padding: 0 18px 20px 18px;
}
.book .bookImg{
	width: 100%;
	overflow: hidden;
	background-size: cover;	
	background-position: center;
	margin-bottom: 9px;
}
.book .bookImg::after{
	content: '';
	float: left;
	padding-top: 143%;
	
}
.bookSwiperIn p:nth-child(2){
	font-size: 16px;
	text-align: center;
	color: black;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bookSwiperIn p:nth-child(3){
	font-size: 15px;
	/*transform: scale(.8);*/
	text-align: center;
}
.bookStar span{
	display: inline-block;
	width: 10px;
	height: 10px;
	font-size: 12px;
	/*transform: scale(.5);*/
	background-repeat: no-repeat;
	background-size: 10px;
}
.bookStar span:last-child{
	display: inline;
}
/***************book3***************/
.book3{
	padding: 0 18px;
	/*margin-bottom: 50px;*/
}
.bookStore{
	display: flex;
}
.bookStoreImg{
	flex: 1;
	
}
.bookStoreImg img{
	width: 100%;
}
.bookStoreContent{
	flex: 2;
}
.bookStoreConIn{
	overflow: hidden;
}
.bookStoreConIn h2{
	float: left;
	font-size: 18px;
	margin-bottom: 16px;
	color: #494949;
}
.bookStoreConIn span{
	float: right;
	font-size: 16px;
	color: #E76648;
	line-height: 19px;
}
.bookStoreConIn p{
	float: left;
	font-size: 13px;
	color: #989898;
	font-weight: 300;
}
.book3Swiper{
	padding: 15px 0 43px 0;
}
.book3Swiper{
	padding: 15px 0 43px 0;
}
.book3SwiperIn p:nth-child(2){
	font-size: 15px;
	margin-bottom: 7px;
	padding-top: 3px;
}
.book3SwiperIn p:nth-child(3){
	font-size: 12px;
	color: #AAAAAA;
}
/**********book4***********88*/
.book4{
	
	overflow: hidden;
}
.book4Swiper{
	width: 100%;
	overflow-x: auto;
	margin-bottom: -webkit-calc(-20px);	
}
.book4SwiperWrapper{
	width: 160%;
	list-style: none;
	/*overflow-x: auto;
	white-space: nowrap;*/
    padding: 15px 18px 43px 10px;
	
}
.book4SwiperWrapper li{
	display: inline-block;
	margin: 0 0 8px 8px;
	/*background: yellow;*/
	border: 1px solid green;
	border-radius: 5%;
}
.book4SwiperWrapper li:nth-child(1),.book4SwiperWrapper li:nth-child(3){
	border-color:#FFC46C ;
	color:#FFC46C ;
}
.book4SwiperWrapper li:nth-child(2),.book4SwiperWrapper li:nth-child(9){
	border-color:#3BA94D;
	color:#3BA94D;
}
.book4SwiperWrapper li:nth-child(4),.book4SwiperWrapper li:nth-child(7){
	border-color:#2384E8;
	color:#2384E8;
}
.book4SwiperWrapper li:nth-child(6),.book4SwiperWrapper li:nth-child(8){
	border-color:#CC3344;
	color:#CC3344;
}
.book4SwiperWrapper li a{
	font-size: 13px;
	color: inherit;
	
}
.book4SwiperWrapper li a p{
	width: 100%;
	line-height: 50px;
	padding: 0 24px;
}
/**********book5***********88*/
.book5{
	
}
.book5ul{
	/*width: 100%;*/
	overflow: hidden;
	padding: 13px 0px 17px 18px;
}
.book5ul .book5li{
	width: 50%;
	display: inline-block;
	float: left;
	margin: 0;
	font-size: 14px;
	box-sizing: border-box;
	border-top: 1px solid #AAAAAA;
	border-right: 1px solid #AAAAAA ;	
	padding-right: 18px;
	line-height: 42px;
}
.book5ul .book5li:nth-child(even){
	border-right: none;
	padding-left: 18px;
}
.book5ul .book5li:nth-child(11),.book5ul .book5li:nth-child(12){
	border-bottom: 1px solid #AAAAAA;
}
.book5ul .book5li a{
	overflow: hidden;
}
.book5ul .book5li a p{
	float: left;
}
.book5ul .book5li a span{
	float: right;
	color: #AAAAAA;
}
/**********book6***********88*/
.book6{
	margin: 50px 0 30px 0;
}
.book6Title{
	margin: 0 auto;
	text-align: center;
	/*background: pink;*/
	overflow: hidden;
	padding-bottom: 22px;
}
.book6Title img{
	width: 15%;
	float: left;
	/*text-align: left;*/
	margin-left: 36%;
}
.book6 p{
	margin: 0 auto;
	text-align: center;
	font-size: 15px;
}
.book6Title p{
	display: inline-block;
	font-size: 24px;
	float: right;
	/*text-align: right;*/
	line-height: 48px;
	margin-right: 33%;	
}
</style>