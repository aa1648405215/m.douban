<template>
	<div>
		<v-header></v-header>
		<div class="app">
			<h1>影院热映</h1>
			<section id="hotlist" class="grid"> <!--v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5"-->
				<router-link to="#" v-for="item2 in hotlist" :key="item2.id">
					<div class="cover">
						<div class="coverImg">
							<img :src="item2.srcImg" alt="" />
						</div>
					</div>
					<div class="info">
						<h4></h4>
						<h3>{{item2.hotTitle}}</h3>
						<p class="rank">
							<span class="rankStar">
								<span class="rankStarFull" :style="{backgroundImage:'url(' + item2.hotStarImg + ')'}"></span>
								<span class="rankStarFull" :style="{backgroundImage:'url(' + item2.hotStarImg + ')'}"></span>
								<span class="rankStarFull" :style="{backgroundImage:'url(' + item2.hotStarImg + ')'}"></span>
								<span class="rankStarFull" :style="{backgroundImage:'url(' + item2.hotStarImg + ')'}"></span>
								<span class="rankStarGray" :style="{backgroundImage:'url(' + item2.hotStarImg2 + ')'}"></span>
							</span>
							<span>{{item2.hotP}}</span>
						</p>
						<p>{{item2.hotP2}}</p>
					</div>
				</router-link>
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
				hotlist:[]
			}			
		},
		mounted(){
			
			var _this = this
			this.$http.get('./data/hotMovie.json')
			.then((res)=>{
				_this.hotlist = res.data.hotlist
				
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		},
		methods:{
//			loadMore() {
//			  this.loading = true;
//			  setTimeout(() => {
//			    let last = this.hotlist[this.hotlist.length - 1];
//			    for (let i = 1; i <= 11; i++) {
//			      this.hotlist.push(last + i);
//			    }
//			    this.loading = false;
//			  }, 2500);
//			}					
		}
	}
</script>

<style scoped>
/*.app{		
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 47px;
    max-width: 650px;
    margin: 0 auto;
    overflow-x: hidden;
}*/
.app{	
    padding-left: 2%;
    padding-right: 2%;
    max-width: 650px;
    margin: 0 auto;
    overflow-x: hidden;
}
.app h1{
    font-size: 24px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
    padding-left: 4%;
    text-align: left;
}
h1{
	margin: 0.67em 0;
}
.grid{
    padding: 20px 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    overflow: hidden;
    box-sizing: border-box;
}
.grid a{
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom: 20px;
    overflow: hidden;
}
#hotlist a{
	text-decoration: none;
	color: #9b9b9b;
	/*background: skyblue;*/
}
.grid a .cover{
    min-height: 87px;
    overflow: hidden;
    position: relative;
}
.grid .coverImg{
	position: relative;
}
.grid .coverImg::before{
	display: block;
	content: '';
	padding-top: 143%;
}
.grid a img{
    display: block;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
    width: 100%;
}
.grid a .info{
	height: 45px;
	overflow: hidden;
}
.grid a h4{
	display: none;
}
.grid a h3{
    font-size: 13px;
    font-weight: normal;
    padding: 5px 0 0;
    color: #494949;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.grid a .rank{
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
}
.rankStar{
	display: inline-block;
	vertical-align: middle;
}
#hotlist h3,#hotlist h4,#hotlist p{
	margin: 0;
}
.rankStarFull,.rankStarGray{
	width: 10px;
    height: 10px;
    background-size: 10px 10px;
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}
.info p:nth-child(4){
	display: none;
}
</style>
