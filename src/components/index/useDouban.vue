<template>
	<div class="useDoubanA">
		<div class="useDouban" v-for="item in uselist" :key="item.id" :style="{backgroundImage:'url(' + item.useSrc + ')'}"></div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			uselist:[
				{
					id:0,
					useSrc:require('../../../data/img/bookImg/openApp.png')
				}
			]
		}
	}
}
</script>

<style scoped>
.useDoubanA{
	position: fixed;
    top: 0;
    width: 100%;
}
.useDouban{
	background-size:  48.5px 68px;
	background-position: center 200px; 
	background-repeat: no-repeat;
	background-color: #f2f2f2;
}
.useDouban::after{
	display: block;
	content: '';
	padding: 100%;
}
</style>