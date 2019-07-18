<template>
	<div>
		<v-header></v-header>
		<div class="firstList">		
			<router-view></router-view>
			<ul>
		    	<li><router-link to="/hotMovie">影片热映</router-link></li>
		    	<li><router-link to="/book">最受关注图书</router-link></li>
		    	<li><router-link to="/doubanTime">豆瓣时间</router-link></li>
		    	<li><router-link to="/useDouban">使用豆瓣App</router-link></li>
		    </ul>
		    <section id="secFeed">
		    	<div class="feedSection" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
			  		<div class="dd">
			  			<router-link to="#" class="feedItem" v-for="item in list" :key="item.id">
									<div class="feedContent">
										<div class="photos">
											<div class="main" :style="{backgroundImage:'url(' + item.mainPic + ')'}"></div>
											<div class="aside">
												<div class="asidePic" :style="{backgroundImage:'url(' + item.asidePic1 + ')'}"></div>
												<div class="asidePic" :style="{backgroundImage:'url(' + item.asidePic2 + ')'}"></div>
											</div>
										</div>
										<h3>{{item.title}}</h3>
										<p>{{item.contents}}</p>
									</div>
									<div class="author">
										by&nbsp;
										<span>{{item.author}}</span>
									</div>
									<span></span>
			  			</router-link>
			  		</div>
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
			list:[]
		}
	},
	methods:{
		loadMore() {
		  this.loading = true;
		  setTimeout(() => {
		    let last = this.list[this.list.length - 1];
		    for (let i = 1; i <= 10; i++) {
		      this.list.push(last + i);
		    }
		    this.loading = false;
		  }, 2500);
		}					
	},
	mounted(){
		
		var _this=this;
		this.$http.get('./data/first.json')
		.then((res)=>{
			_this.list = res.data.list
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
			var main = document.getElementsByClassName('main');
			var mainParent = main[0].parentNode
			//console.log(mainParent)
			//console.log(main);
			var a = main[5].style.backgroundImage;
			//console.log(a);
			for(var i=0;i<main.length;i++){
				if(main[i].style.backgroundImage=='url("")'){
					main[i].parentNode.style.display='none';
				}
			}
		})
		
	}
}
</script>

<style scoped>
.firstList{
	margin: 0 18px;
}
.firstList ul{
	width: 100%;
	overflow: hidden;
	margin: 20px 0 0 0;
	padding-top: 6px;
}
.firstList ul li{
	display: block;
	float: left;
	margin: 0;
	width: 50%;
	list-style: none;
	padding: 3px;
	box-sizing: border-box;
	font-size: 15px;
	
}
.firstList ul li a{
	text-decoration: none;
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    line-height: 20px;
    padding: 12px 0;
    border-radius: 2px;
    max-width: 100%;
    overflow: hidden;
}
#secFeed{	
	margin-right: -18px;
	margin-left: -18px;
	margin-top: 2px;
	min-height: 480px;
	color: #494949;
	
}
#secFeed .feedItem{
    display: block;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    position: relative;
    color: #494949;
    
}

.feedItem::before{
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	background: #e3e3e3;
	content: '';
	position: absolute;	
}
.feedItem:first-child::before{
	height: 0;
}
#secFeed .feedContent{
	overflow: hidden;
	margin-bottom: 10px;
}
#secFeed .feedContent .photos{
	display: flex;
	margin-bottom: 10px;
}
#secFeed .feedContent .photos .main{
	position: relative;	
	flex: 3.2;
	margin-right: 4px;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-color: rgb(250,250,250);
}
#secFeed .feedContent .photos .aside{
	display: flex;
	flex: 1;
	flex-direction: column;
}
#secFeed .feedContent .photos .aside .asidePic{
	position: relative;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-color: rgb(250,250,250);
	padding-top: 100%;
}
#secFeed .feedContent .photos .aside .asidePic ~ .asidePic{
	margin-top: 4px;
}
#secFeed .feedContent h3{
	text-align: justify;
	font-size: 17px;
	font-weight: 500;
	line-height: 1.41;
	color: #494949;
	margin-bottom: 6px;
}
#secFeed .feedContent p{
	overflow: hidden;
	text-align: justify;
	color: #aaa;
	font-size: 12px;
	line-height: 1.5;
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}
#secFeed .feedSection a .author{
	font-size: 12px;
	color: #ccc;
	text-align: left;
}	
</style>