<template>
	<div>
		<v-header></v-header>
		<section class="time">
			<!-- swiper -->
		  <swiper :options="swiperOption">
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/1time.jpg"/></router-link>
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/2time.jpg"/></router-link>
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/3time.jpg"/></router-link>
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/4time.jpg"/></router-link>
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/5time.jpg"/></router-link>
			<router-link to="#" class="swiper-slide"><img src="../../assets/img/doubanTimeImg/6time.jpg"/></router-link>
			<!--<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/1time.jpg"/></swiper-slide>
			<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/2time.jpg"/></swiper-slide>
			<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/3time.jpg"/></swiper-slide>
			<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/4time.jpg"/></swiper-slide>
			<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/5time.jpg"/></swiper-slide>
			<swiper-slide :style="aSlide"><img src="../../assets/img/doubanTimeImg/6time.jpg"/></swiper-slide>-->
			<div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
		</section>
		<section class="time2">
			<router-link :to="item.to" class="time2Tab" v-for="item in time2list" :key="item.id">
				<div class="time2Svg" :style="{backgroundImage:'url(' + item.timg2Svg + ')'}"></div>
				<div class="time2name">{{item.time2name}}</div>
			</router-link>		
		</section>
		<section class="time3">
			<h2 class="time3h2">爆款课程暑期特惠</h2>
			<div class="time3swiper">
					<swiper :options="swiperOption2">
						<router-link to="#" class="swiper-slide time3A" v-for="item in time3list" :key="item.id">
							<div class="time3imgBox" :style="{backgroundImage:'url(' + item.time3img + ')'}">
								<p>{{item.time3type}}</p>
							</div>
							<h2>{{item.time3h2}}</h2>
							<div class="time3Price">
								<p>{{item.time3price}}<span>元</span></p>
								<p>{{item.time3price2}}</p>
							</div>
						</router-link>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
			  	</swiper>			
			</div>			
		</section>
		<section class="time4">
			<h2>新品上架——买即赠价值198元书法工具包</h2>
			<router-link to="#" v-for="item in time4list" :key="item.id">
				<div class="time4left" :style="{backgroundImage:'url(' + item.time4Img + ')'}">
					<p>音频</p>
				</div>
				<div class="time4right">
					<div class="time4Font">
						<h2>黑白之间：二十八堂书法练习课</h2>
						<div class="time4Price">
							<p class="time4Price1">189.00<span>元</span></p>
							<del class="time4Price2">249.00元</del>
						</div>						
					</div>					
					<p class="time4Hold">主讲人 王晶</p>
					<p class="time4Lesson">28堂书法技法课，从点画到创作，带你感受书法的魅力</p>
				</div>
			</router-link>
			<swiper :options="swiperOption3" class="time4Swiper">
				<!--<ul class="time4Swiper">-->
					<li class="swiper-slide">
						<router-link to="#">
							<div class="time4A">
								<div class="circle">
									<div class="triangle"></div>
								</div>
								<p>试听</p>
							</div>
							<p class="time4Con">开启你与字的美好关系</p>
						</router-link>
					</li>
					<li class="swiper-slide">
						<router-link to="#">
							<div class="time4A">
								<div class="circle">
									<div class="triangle"></div>
								</div>
								<p>试听</p>
							</div>
							<p class="time4Con">开启你与字的美好关系</p>
						</router-link>
					</li>
				<!--</ul>-->
				<div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>
		</section>
		<section class="time4 time5">
			<h2>青椒学院</h2>
			<router-link to="#" v-for="item in time4list" :key="item.id">
				<div class="time4left" :style="{backgroundImage:'url(' + item.time4Img + ')'}">
					<p>音频</p>
				</div>
				<div class="time4right">
					<div class="time4Font">
						<h2>青椒学院</h2>
						<div class="time4Price">
							<p class="time4Price1">189.00<span>元</span></p>
							<del class="time4Price2">249.00元</del>
						</div>						
					</div>					
					<p class="time5Lesson">从最接地气的生活问题到最前沿的学科知识</p>
					<p class="time5Lesson">包含15个专栏，总价425元，购买此包，仅需199元就能拥有全部专栏。</p>
				</div>
			</router-link>
			<swiper :options="swiperOption4" class="time4Swiper gg" v-if="time5list.length">
					<router-link to="#" class="swiper-slide time5-slide kk" v-for="item in time5list" :key="item.id">
						<img :src="item.time5src"/>
						<p class="p1">{{item.time5title}}</p>
						<p class="p2">{{item.time5author}}</p>
					</router-link>
			</swiper>
		</section>
		<section class="time3">
			<div class="fff">
				<h2>豆瓣影人PRO大师课</h2>
				<router-link to="#">
					<p>查看更多<span>></span></p>
				</router-link>	
			</div>			
			<div class="time3swiper">
					<swiper :options="swiperOption2">
						<router-link to="#" class="swiper-slide time3A" v-for="item in time3list" :key="item.id">
							<div class="time3imgBox" :style="{backgroundImage:'url(' + item.time3img + ')'}">
								<p>{{item.time3type}}</p>								
							</div>
							<h2>{{item.time3h2}}</h2>
							<div class="time3Price">
								<p>{{item.time3price}}<span>元</span></p>
								<!--<p>{{item.time3price2}}</p>-->
							</div>
						</router-link>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
			  	</swiper>			
			</div>			
		</section>
		<section class="time7">
			<div class="fff">
				<h2>大咖驾到</h2>
				<router-link to="#">
					<p>查看更多<span>></span></p>
				</router-link>	
			</div>
			<div class="time7in">
				<router-link to="#" class="time7A" v-for="item in time3list" :key="item.id">
					<div class="time7imgBox" :style="{backgroundImage:'url(' + item.time3img + ')'}">
						<p>{{item.time3type}}</p>								
					</div>
					<div class="time7BoxRight">
						<div class="time7kk">
							<h2>{{item.time3h2}}</h2>
							<p class="time7Price">
								<span>{{item.time3price}}<span>元</span></span>
								<del>{{item.time3price2}}</del>
							</p>
						</div>						
						<p>主讲人 北岛和朋友们</p>
						<p>北岛和朋友们为你讲述诗人传奇故事，解读文化历史背景，细析诗句幽微妙处。</p>
					</div>		
				</router-link>
			</div>
			
		</section>
	</div>
</template>

<script>
//import Vue from 'vue'
//import axios form 'axios'
//Vue.prototype.$http = axios
  
  
import vheader from './header.vue'
export default {
	components:{
		'v-header':vheader
	},
	mounted(){
		
	  	var _this = this;
        this.$http.get('./data/doubanTime.json')
        .then(function(res){
          //console.log(_this)
          //console.log(res)
          _this.time2list=res.data.time2list
          _this.time3list=res.data.time3list
          _this.time4list=res.data.time4list
          _this.time5list=res.data.time5list

        })
        .catch(()=>{

        })
        .finally((f)=>{
        	var time4aa = document.getElementsByClassName('time5-slide');
			var zindex=1;
			for(var i=0;i<time4aa.length;i++){
				
				zindex--;
				time4aa[i].style.zIndex=zindex;				
			}
			
//			var time2A = document.getElementsByClassName('time2')[0];
//			console.log(time2A.children[0])
//			time2A.children[0].setAttribute('href','#/greenpepper');
//			time2A.children[2].setAttribute('href','#/collection');
			
        })
        
        
	},
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,//控制显示大小
          loopAdditionalSlides:3,
          centeredSlides:true,
          spaceBetween: -45,//margin-right
          slidesPerGroup: 1,
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOption2: {
          slidesPerView: 3.1,//设置slider容器能够同时显示的slides数量
          loopAdditionalSlides:3,//取值为3前后各复制4个
          centeredSlides:false,//true为居中，默认状态下居左
          spaceBetween: 0,//在slide之间设置距离（单位px）margin-right
          slidesPerGroup: 1,//滑动多少个
//        loop: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }
        },
        swiperOption3: {
          slidesPerView: 1.45,//设置slider容器能够同时显示的slides数量
          loopAdditionalSlides:0,//取值为3前后各复制4个
          centeredSlides:false,//true为居中，默认状态下居左
          spaceBetween: 0,//在slide之间设置距离（单位px）margin-right
          slidesPerGroup: 1,//滑动多少个
//        loop: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }
        },
        swiperOption4: {
          slidesPerView: 7,//设置slider容器能够同时显示的slides数量
          loopAdditionalSlides:10,//取值为3前后各复制4个
          loop:true,
          centeredSlides:false,//true为居中，默认状态下居左
          spaceBetween: -35,//在slide之间设置距离（单位px）margin-right
          slidesPerGroup: 1 //滑动多少个  
        },
		time2list:[],
        time3list:[],
        time4list:[],
        time5list:[]
      }
    }
}
  
</script>

<style scoped>
.time{
	position: relative;
	padding: 5px 0;
	margin-bottom: 15px;
}
.swiper-wrapper .swiper-slide{
    flex-shrink: 0;
    text-align: center;
    font-size: 18px;
    justify-content: center;
    align-items: center;
}
.swiper-slide{
    /*-webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -ms-flex-negative: 0;*/
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
.swiper-wrapper .swiper-slide img{
	display: block;
	width: 100%;	
    transform: scale(.8);    
    transform-origin: center;
    transition: all .3s ease-in-out;
}
.swiper-wrapper .swiper-slide-active img{
	transform: scale(.9); 
}
.swiper-pagination-bullets{
    position: absolute;
    bottom: 15px;
    right: 30px;
    z-index: 999;
}
.time>>>.swiper-pagination-bullet{ /*>>>不受当前组件scoped  表示在.time下所有出现的.swiper-pagination-bullet*/
	display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    text-align: center;
    margin-left: 8px;
    opacity: 1;
    background: hsla(0,0%,100%,.2);
    cursor: pointer;   
}
.time>>>.swiper-pagination-bullets .swiper-pagination-bullet{
	margin: 0 5px;
}
.time>>>.swiper-pagination-bullet-active{
	background: hsla(0,0%,100%,.8);
	/*opacity: 1;
    background: #007aff;*/
}
/**************section  time2**********************/
.time2{
	display: flex;
    align-items: center;
	width: 100%;
	margin-top: -15px;
    padding: 10px 0;
    background-color: #FFFFFF;    
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: visible;        
}
.time2Tab{
	display: block;
	text-align: center;
	width: 33.3%;
	margin: 0;
	padding: 10px 0;
	cursor: pointer;
}
.time2 .time2Tab .time2Svg{
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    background: no-repeat 50%;
    background-size: contain;
    display: inline-block;
    border-radius: 50%;
}
.time2 .time2Tab .time2name{
	margin-top: 6px;
    text-align: center;
    font-size: 13px;
    line-height: 16px;
    color: #818181;
}
/**************section  time3**********************/
.time3{
	width: 100%;
	padding: 0 15px;
	background-color: #fff;        
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: visible;
}
.time3 .time3h2{
	display: flex;
    justify-content: space-between;    
    align-items: center;
    font-size: 19px;
    line-height: 19px;
    color: #333;
    margin: 0;
    padding: 0;
    margin-top: 20px;
    font-weight: 700;
   
}
.time3swiper{	
	overflow: visible;
	overflow-x: scroll;
	white-space: nowrap;/*超出不换行为...*/
	margin-right: -10px;
	padding-top: 20px;
	margin-bottom: 20px;
}

.time3swiper a{
	display: inline-block;
	width: 33%;
	box-sizing: border-box;
	border-bottom: 20px;
	padding-right: 10px;
	vertical-align: top;
}
.time3imgBox{	
	position: relative;
	height: 0;
	padding-bottom: 100%;    
    border-radius: 3px;
    background: no-repeat 50%;
    background-size: cover;     
}
.time3imgBox p{
	position: absolute;
	right: 4px;
	bottom: 4px;
	font-size: 12px;
    line-height: 20px;
    height: 20px;
    border-radius: 10px;
    padding: 0 6px;
    background: rgba(0,0,0,.4);
    color: #fff;
    transform: scale(.8333);
    transform-origin: right bottom;
}

.time3 .time3A h2{
	font-size: 15px;
    line-height: 18px;
    color: #191919;
    margin: 10px 0;
    font-weight: 700;
    height: 36px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
    word-wrap: break-word;
}
.time3Price p{
    font-size: 13px;
    line-height: 16px;
    color: #f97927;
    margin-bottom: 5px;
    font-weight: 700;
    display: block;
    text-align: left;
}
.time3Price p span{
	display: inline-block;
	font-size: 11px;
	transform: scale(0.9);/*因为浏览器文字最小是12px,所以用scale把字体改小*/
}
.swiper-scrollbar{
	height: 3px;
	opacity: 0.5;
}
.time3Price p:nth-child(2){
    font-size: 11px;
    line-height: 1;
    color: #ccc;
    display: block;
    text-align: left;
}
/**************section  time4**********************/
.time4{	
	width: 100%;
    padding: 0 15px;
    background-color: #fff;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: visible;
    /*margin-bottom: 200px;*/
}
.time4>h2{
	display: flex;
	justify-content: space-between;
    align-items: center;/*flex布局中，项目在交叉轴上如何对齐 （center居中）*/
   	font-size: 19px;
    line-height: 19px;
    color: #333;
    margin: 0;
    padding: 0;
    margin-top: 20px;
    font-weight: 700; 
}
.time4 a:nth-child(2){
	position: relative;
	margin: 0;
	padding: 15px 0;
	cursor: pointer;
	display: flex;
}
.time4left{
	position: relative;
	width: 100px;
    height: 100px;
    margin-right: 15px;
    border-radius: 3px;
	background: no-repeat 50%;
    background-size: cover;       
}

.time4left p{
	position: absolute;
	right: 4px;
	bottom: 4px;
	font-size: 12px;
    line-height: 20px;
    height: 20px;
    border-radius: 10px;
    padding: 0 6px;
    background: rgba(0,0,0,.4);
    color: #fff;
    transform: scale(.8333);
    transform-origin: right bottom;
}
.time4right{
	flex: 1;
	min-width: 0;
}
.time4Font{
	display: flex;
}
.time4Font>h2{
	flex: 1;
	margin: 0 0 15px 0;
	padding: 0;
	font-size: 15px;
	font-weight: 700;
	line-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
    word-wrap: break-word;
    color: #191919;
}
.time4Font .time4Price{
	text-align: right;
	margin: 2px 0 0 10px;
	font-size: 0;
}
.time4Font .time4Price1{
	 display: block;
    font-size: 13px;
    line-height: 16px;
    color: #f97927;
    margin-bottom: 5px;
    font-weight: 700;   
}
.time4Font .time4Price1 span{
	display: inline-block;
	font-size: 11px;
	transform: scale(0.9);/*因为浏览器文字最小是12px,所以用scale把字体改小*/
}
.time4Font .time4Price2{
    font-size: 11px;
    line-height: 1;
    color: #ccc;
    display: block;
}
.time4right .time4Hold{
	font-size: 13px;
    line-height: 13px;
    color: #818181;
    display: block;
    font-style: normal;
    margin-bottom: 17px;
}
.time4right .time4Lesson{
	margin: 0;
    font-size: 11px;
    line-height: 1;
    color: #818181;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.circle{
	position: relative;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	border: 1px solid rgb(66, 189, 86);
	box-sizing: border-box;
}
.triangle{
	position: absolute;
	left: 40%;
	top: 21%;
	height: 0;
	width: 0;
	border-top:7px solid rgba(0,0,0,0);
	border-bottom:7px solid rgba(0,0,0,0);
	border-right:7px solid rgba(0,0,0,0);
	border-left:7px solid rgb(66, 189, 86);
	border-radius: 20%;
	
}
.time4Swiper{
	padding: 0 20px 20px 20px;
	margin: 0 -20px;
}
.time4Swiper li{
    display: inline-block;
    margin-right: 10px;
    margin-left: 0;
    margin-top: 3px;
    vertical-align: middle;   
}
.time4Swiper li a{
	display: flex;
    align-items: center;    
    box-sizing: border-box;
    padding: 10px;
    line-height: 20px;
    min-height: 60px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0,0,0,.08);
}
.time4Swiper li a .time4A{
	font-size: 9px;
    margin-left: 5px;
    margin-right: 10px;
    color: #42bd56;    
}
.time4Swiper li a .time4Con{
	font-size: 13px;
	color: #191919;
}
.time4Swiper a{
	position: relative;
}
.time4Swiper a p{
	/*font-size: 12px;
	transform: scale(0.8);*/
}
.time4Swiper .swiper-wrapper .swiper-slide img{
	transform: scale(0.75);
	border-radius: 5%;
	
}
.gg .swiper-wrapper .swiper-slide p{
	display: none;
}
.time4Swiper .swiper-wrapper .swiper-slide-active p{
	display: inline-block;
	width: 400%;
	text-align: left;
}
.time4Swiper .swiper-wrapper .swiper-slide-active .p1{
	/*display: inline-block;*/
	font-size: 13px;
	color: #191919;
	margin-top: 10px;
	margin-bottom: 5px;
}
.time4Swiper .swiper-wrapper .swiper-slide-active .p2{
	/*display: inline-block;*/
	font-size: 12px;
	transform: scale(0.9);
	color: #818181;
}
.time4Swiper .swiper-wrapper .swiper-slide-active{
	/*z-index: 1;*/
}
.time4Swiper .swiper-wrapper .swiper-slide-active img{
	transform: scale(1);
}
.time4Swiper .swiper-wrapper .swiper-slide-next{
	/*z-index: 0;*/
}
.time4Swiper .swiper-wrapper .swiper-slide-prev{
	opacity: 0;
}
.time4Swiper .swiper-wrapper .swiper-slide-next img{
	transform: scale(0.875);
}
.time5Lesson{
	margin-top: 10px;
	font-size: 12px;
	transform: scale(0.95);
	line-height: 16px;
	white-space: normal;
	color: #818181;
}
.time5 .gg .kk{
	padding: 0;
	display: inline-block;
}
/**************section6 time3**********/
.fff{
	overflow: hidden;
}
.fff h2{
	display: inline-block;float: left;line-height: 19px;
}
.fff a{
	display: inline-block;float: right;color: #818181;
}
.fff a p>span{
	padding: 0 5px;
}
/**************section7 time7**********/
.time7{
	padding: 0 15px;
}
.time7A{
	display: inline-flex;
	width: 100%;
	/*flex-wrap: wrap;*/
	padding: 15px 0;
	border-bottom: 1px solid #dfdfdf;
	box-sizing: border-box;
}
.time7imgBox{
	flex: 1;
	position: relative;
	margin-right: 15px;
	/*box-sizing: border-box;*/
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
}
.time7imgBox p{
	position: absolute;
	right: 4px;
	bottom: 4px;
	color: white;
	background-color: gray;
	border-radius: 25%;
	font-size: 12px;
	transform: scale(0.8);
	padding: 3px 6px;
	
}
.time7BoxRight{
	flex: 2;
	overflow: hidden;
	/*display: flex;*/
}
.time7kk{
	display: flex;
}
.time7BoxRight h2{
	flex: 2;
	font-size: 15px;
	/*display: inline-block;*/
	float: left;
	color: #191919;
	font-weight: 700;
	margin-bottom: 15px;
}
.time7BoxRight .time7Price{
	color: #f97927;
	flex: 1;
	float: right;
	box-sizing: border-box;
	margin-left: 10px;
	/*display: inline-block;*/
	text-align: right;
}
.time7BoxRight .time7Price>span{
	display: block;
	margin-bottom: 5px;
	font-weight: 700;
}
.time7BoxRight .time7Price del{
	color: #CCCCCC;
	font-size: 12px;
	transform: scale(0.9);
}
.time7BoxRight p{
	float: left;
	color: #818181;
}
.time7BoxRight p:nth-child(2){
	font-size: 13px;
	margin-bottom: 15px;
}
.time7BoxRight p:nth-child(3){
	font-size: 12px;
	/*overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;		
	word-wrap: normal;*/ /*两种文本超出不换行出省略号的方法*/
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
</style>