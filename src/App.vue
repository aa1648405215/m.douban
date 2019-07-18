<template>
	<div>		
		<div id="app" class="page">
			<div class="card">
				<router-view></router-view>		    
			</div>
	    </div>
	</div>	  	
</template>

<script>
//导入Jquery
//import $ from 'jquery'
//import vheader from './components/index/header.vue'
export default {
  name: 'app'
//components:{
//		'v-header':vheader
//	}	
}



</script>
<style scoped>
.page{
	max-width: 650px;
	margin: 0 auto;
	padding-top: 47px;
	background: #fff;
	overflow-x: hidden;
}
/*.card{
	margin: 0 18px;
}*/

</style>
<style>
/*body{
	margin: 0;
}*/
/*#app {
	font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  color: #111;   
  position: relative;
}*/

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
