<template>
	<div class="focusbook">
		<v-header></v-header>
		<h2>最受关注图书｜虚构类</h2>
		<ul class="focusUl" ><!--v-infinite-scroll="loadMore2" infinite-scroll-disabled="loading" infinite-scroll-distance="10"-->
			<li v-for="item in focuslist" :key="item.id">
				<router-link to="#">
					<div class="focusImg">
						<img :src="item.src"/>
					</div>					
					<div class="focusIn">
						<p>{{item.bookName}}</p>
						<p class="bookStar">
						<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
						<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
						<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
						<span :style="{backgroundImage:'url(' + item.bookScoreImg + ')'}"></span>
						<span :style="{backgroundImage:'url(' + item.bookScoreImg2 + ')'}"></span>
						<span>{{item.bookScore}}</span>
						</p>
						<p>{{item.details}}</p>
					</div>
				</router-link>
			</li>
		</ul>
		<span class="load">加载中...</span>
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
			focuslist:[],
			focuslist2:[]
		}
	},
	
	mounted(){
		
		var _this=this
		this.$http.get('./data/focusbook.json')
		.then((res)=>{
			_this.focuslist = res.data.focuslist
			_this.focuslist2 = res.data.focuslist2
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	},
	methods:{
		
//		loadMore2() {		 
//		  this.loading = true;		  
//		  setTimeout(() => {
//		  	
//		    let last = this.focuslist[this.focuslist.length - 1];
//		    for (let i = 1; i <= this.focuslist2.length; i++) {
//		    	console.log(res.data.focuslist)
//		      this.focuslist.push(last + this.focuslist2[i]);
//		    }
//		    this.loading = false;
//		    
//		  }, 2500);
//		  document.getElementsByClassName('load')[0].style.display='block';
//		}		
	}
}
</script>

<style scoped>
.focusbook{
	padding: 0 2%;
}
.focusbook h2{
	font-size: 24px;
	margin: 16px 0 6px;
	padding-left: 4%;
}
.load{
	display: none;
	text-align: center;
	font-size: 15px;
	z-index: 99;
}
.focusUl li{
	display: block;
	margin: 0;
	padding: 20px 4%;
	/*background-color: yellow;*/
}
.focusUl li a{
	/*display: flex;*/
	display: block;
	overflow: hidden;
	width: 100%;
}
.focusImg{
	float: left;
	width: 30%;
	margin-right: 4%;
	background: #BABABA;
}
.focusImg img{
	display: inline-block;
	width: 100%;	
	/*flex: 1;*/
}
.focusUl li a .focusIn{
	/*flex: 2;*/
	float: right;
	width: 66%;
}
.focusIn span{
	display: inline-block;
	width: 10px;
	height: 10px;
	font-size: 12px;
	/*transform: scale(.5);*/
	background-repeat: no-repeat;
	background-size: 10px;
}
.focusIn span:last-child{
	display: inline;
}
.focusIn p:nth-child(1){
	font-size: 17px;
	color: #494949;
	padding-bottom: 5px;
}
.focusIn p:nth-child(3){
	padding-top: 5px;
	color: #9B9B9B;
}
</style>