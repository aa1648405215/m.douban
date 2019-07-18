<template>
	<div class="bigSearch">
		<section class="search">
			<router-link to="/" class="searchClose">关闭</router-link>
			<input type="search" v-for="item in searchlist" :key="item.id" :style="{backgroundImage:'url(' + item.src + ')'}"/>
		</section>
		<section class="search2">
			<ul class="search2Ul">
				<li v-for="item in searchlist2" :key="item.id">
					<router-link :to="item.to">
						<h2>{{item.title}}</h2>
						<span>{{item.deTitle}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<section  class="search3">
			<router-link to="/login1">
				<p>登录豆瓣</p>
			</router-link>
		</section>
		<section class="search4">
			<ul>
				<li>
					<router-link to="#">
						<p>使用桌面版</p>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<p>使用豆瓣App</p>
					</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default{
	data(){
		return{
			searchlist:[],
			searchlist2:[]
		}
	},
	mounted(){
		
		var _this = this
		this.$http.get('./data/search.json')
		.then((res)=>{
			//console.log(res)
			_this.searchlist = res.data.searchlist
			_this.searchlist2 = res.data.searchlist2
		})
		.catch(()=>{
			
		})
		.finally(()=>{
			
		})
	}
}
</script>

<style scoped>
.bigSearch{
	position: fixed;
	top: 0;
	width: 100%;
}
.search{
	overflow: hidden;
	padding: 15px 18px 15px 60px;
	border-bottom: 1px solid #F3F3F3;
	/*width: 100%;*/
}
.searchClose{
	float: left;
	position: absolute;
	top: 18px;
    left: 18px;
	font-size: 16px;
	color: #42bd56;
	/*margin-right: 20%;*/
}
.search input{
	display: block;
	width: 100%;
	float: right;
	background-repeat: no-repeat;
	background-size: 17px;
	background-position: 50%;
	border-radius: 3px;
	padding: 7px 0;
	background-color: #f3f3f3;
	border: none;
}	
/************search2***********/
.search2{
	padding-top: 27px;
	border-bottom: 1px solid #F3F3F3;
}
.search2 ul{
	width: 100%;
	overflow: hidden;
}
.search2 ul li{
	/*float: left;*/
	margin: 0;
	width: 33.3%;
	text-align: center;
	margin-bottom: 25px;

}
.search2 a h2{
	font-size: 24px;
    
}
.search2 li:nth-child(1) a>h2{
	color: rgb(35, 132, 232);
}
.search2 li:nth-child(2) a>h2{
	color: rgb(122, 106, 219);
}
.search2 li:nth-child(3) a>h2{
    color: rgb(159, 120, 96);
}
.search2 li:nth-child(4) a>h2{
    color: rgb(230, 70, 126);
}
.search2 li:nth-child(5) a>h2{
    color: rgb(42, 184, 204);
}
.search2 li:nth-child(6) a>h2{
    color: rgb(244, 143, 46);
}
.search2 li:nth-child(7) a>h2{
    color: rgb(159, 120, 96);
}
.search2 li:nth-child(8) a>h2{
    color: rgb(87, 116, 197);
}
.search2 li:nth-child(9) a>h2{
    color: rgb(89, 108, 221);
}
.search2 li:nth-child(10) a>h2{
    color: rgb(225, 100, 77);
}
.search2 li:nth-child(11) a>h2{
    color: rgb(64, 207, 169);
}
.search2 li:nth-child(12) a>h2{
        color: rgb(66, 189, 86);
}
.search2 li a>span{
	display: block;
	color: #999;
	letter-spacing: 1px;
}
/************search3***********/
.search3{
	border-bottom: 1px solid #F3F3F3;
}
.search3 a{
	display: block;
	margin: 0 auto;
	text-align: center;
	font-size: 15px;
	padding: 13px 0;
}
/************search4***********/
.search4{
	padding: 13px 0;
	border-bottom: 1px solid #F3F3F3;
}
.search4 ul{
	overflow: hidden;
}
.search4 ul li{
	display: inline-block;
	width: 50%;
	text-align: center;
	margin: 0;
	float: left;
	font-size: 15px;
}
.search4 ul li:nth-child(1){
	border-right: 1px solid #F3F3F3;
	box-sizing: border-box;
}
</style>