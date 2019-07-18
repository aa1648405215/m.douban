<template>
	<div class="greenpepper">
		<v-header></v-header>
		<section class="pepper1">
			<img :src="require('../../../data/img/pepperImg/1header.jpg')"/>
			<ul class="pepper1Ul">
				<li class="pepper1icon1">
					<img src="../../../data/img/pepperImg/1icon.svg"/>
					青椒联盟巨献
				</li>
				<li>
					<img src="../../../data/img/pepperImg/2icon.svg"/>
					4.7折畅听价
				</li>
			</ul>
		</section>
		<div class="bgcolor"></div>
		<section class="pepper2">
			<ul class="pepper2Ul">
				<!--:class="activeClass=0 ? 'pepperactive':''"-->
				<li v-for="(item,index) in mylist" :key="item.id"  @click="active = 'tab-container'+(index+1),ww(index)" :class="activeClass==index ? 'pepperactive':''">{{item.title}}</li>
				<!--<li @click="active = 'tab-container2',ww($event)">青椒学院</li>
				<li @click="active = 'tab-container3',ww($event)">青椒主讲人</li>-->
			</ul>
			<mt-tab-container v-model="active" swipeable="">
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell v-for="item in time3list" title="" :key="item.id">
			    	<div class="time7in">
						<router-link to="#" class="time7A" >
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
			    </mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell v-for="item in pepperlist" title="" :key="item.id">
			    	<section class="pepperHolder">
			    		<div class="holderImg" :style="{backgroundImage:'url(' + item.pepperImg + ')'}">
			    			<!--<img :src="item.pepperImg"/>-->
			    		</div>
			    		<div class="holderP">
			    			<div class="ps">
			    				<p>{{item.pepperName}}</p>
			    				<span>></span>
			    			</div>			    			
				    		<p>{{item.pepperTitle}}</p>
				    		<p>{{item.pepperDes}}</p>
			    		</div>
			    	</section>
			    </mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			    <mt-cell v-for="item in pepperlist2" title="" :key="item.id">
					<section class="pepperSec">
						<ul class="peUl">
							<li>
								<router-link to="#">
									<img :src="item.src" />
								</router-link>
							</li>
						</ul>
					</section>
			    </mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</section>
		<section class="pepper3">
			<ul class="pepper3Ul">
				<li>
					<router-link to="#">
						<p>共15个专栏，打包购买仅4.7折</p>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<p>订阅199元</p>
						<del>425元</del>
					</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import vheader from './header.vue'
export default{
	components:{
		'v-header':vheader
	},
	methods:{
		ww(index){
			console.log(index)
			this.activeClass = index;
			console.log(this.activeClass)
		}
},
	data(){
		return{
			activeClass:0,
			active:'tab-container1',
			mylist:[],
			time3list:[],
           pepperlist:[],
           pepperlist2:[]
		}
	},
	mounted(){
		
		var _this = this
		this.$http.get('./data/greenpepper.json')
		.then((res)=>{
			_this.mylist = res.data.mylist
			_this.time3list = res.data.time3list
			_this.pepperlist = res.data.pepperlist
			_this.pepperlist2 = res.data.pepperlist2
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	}
}
</script>

<style scoped>
.pepperactive{
	border-bottom: 1px solid rgba(0,0,0,0.4);
}
.pepper1{
	/*margin-bottom: 10px;*/
	/*background-color: white;*/
}
.pepper1 img{
	display: block;
	width: 100%;
}
.pepper1Ul{
	text-align: center;
	margin: 0 10px;
	line-height: 30px;
	/*background-color: #CCCCCC;*/
}
.pepper1Ul li img{
	display: block;
	width: 13px;
	height: 13px;
}
.pepper1Ul li:nth-child(1){
	display: inline-block;
	/*width: 50%;*/
	margin-right: 15%;
	position: relative;
}
.pepper1Ul li:nth-child(1) img{
	position: absolute;
	top: 25%;
	right: 105%;
} 
.pepper1Ul li:nth-child(2){
	display: inline-block;
	/*width: 50%;*/
	margin-left: 15%;
	position: relative;
}
.pepper1Ul li:nth-child(2) img{
	position: absolute;
	top: 25%;
	right: 105%;
}
.bgcolor{
	padding-top: 10px;
	background-color: WhiteSmoke;
}
/*******************pepper2************/
.pepper2Ul{
	overflow: hidden;
	text-align: center;
	font-size: 15px;
	line-height: 44px;
    color: rgba(0,0,0,.4);
}
.pepper2Ul li{
	margin: 0;
}
.pepper2Ul li:nth-child(1){
	float: left;
	width: 33%;
}
.pepper2Ul li:nth-child(2){
	float: left;
	width: 33%;
}
.pepper2Ul li:nth-child(3){
	float: left;
	width: 33%;
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
.time7imgBox::before{
	display: block;
	content: '';
	padding-top:100%;
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
/**************青椒主讲人*****************/
.mint-cell-wrapper{
	padding: 0;
}
.pepperHolder{
	overflow: hidden;
	/*width: 100%;*/
	/*display: flex;*/
	padding: 20px 15px;	
}
.pepperHolder::before{
	padding-top: 113px;
}
.pepperHolder .holderImg{
	float: left;
	/*flex: 1;*/
	width: 29%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50%;
	border-radius: 3%;
	margin-right: 15px;	
}
.holderImg::before{
	content: '';
	margin-bottom: 120px;
	display: block;
	margin-right: 234px;
}
/*.pepperHolder .holderImg img{
	width: 100%;
}*/
.pepperHolder .holderP{
	/*flex: 2;*/
	float: right;
	width: 65%;
	overflow: hidden;
}
.holderP .ps{
	
	overflow: hidden;
}
.holderP .ps p{
	display: inline-block;
	float: left;
}
.holderP .ps span{
	float: right;
}
.holderP p:nth-child(1){
	font-size: 14px;
	color: #494949;
	margin-bottom: 12px;
}
.holderP p:nth-child(2){
	font-size: 14px;
	color: #494949;
	margin-bottom: 14px;
}
.holderP p:nth-child(3){
	font-size: 12px;
}
/**************学院*****************/
.pepperSec{
	width: 100%;
	padding: 20px;
}
.peUl li a img{
	width: 100%;
}
/**************section3  pepper3*****************/
.pepper3{
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 99;
	background-color: white;
	width: 100%;
}
.pepper3Ul{
	overflow: hidden;
	width: 100%;
	/*background: yellow;*/
		
} 
.pepper3Ul li{
	float: left;
	/*display: inline-block;*/
	width: 50%;
	margin: 0;
	text-align: center;
	line-height: 48px;
	
}
.pepper3Ul li:nth-child(1) a p{
	display: inline-block;
	font-size: 12px;
	/*transform: scale(0.9);*/
	white-space: nowrap;
	color: #191919;
}
.pepper3Ul li:nth-child(2){
	background-color:#f97927 ;
}
.pepper3Ul li:nth-child(2) a p{
	display: inline-block;
	text-align: left;
	font-size: 13px;
	font-weight: 500;
	color: white;
}
.pepper3Ul li:nth-child(2) a del{
	display: inline-block;
	text-align: right;
	color: rgba(0,0,0,0.4);
	/*color: black;*/
}   	
</style>