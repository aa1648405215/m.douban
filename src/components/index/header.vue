<template>
	<header class="myHeader">
		<div class="firstHeader">
			<router-link to="/" class="logo">
				<h1>豆瓣</h1>
			</router-link>
			<nav>
				<router-link to="/search">
					<span></span>
				</router-link>				
				<router-link to="/useDouban" class="openDouban">打开豆瓣App</router-link>
			</nav>
		</div>
	</header>	
</template>

<script>
</script>

<style scoped>
.myHeader{
	width: 100%;
	position: relative;
	z-index: 9999;
	background: #fff;
}
.firstHeader{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    justify-content: flex-start;
    align-items: center;
    padding: 0 18px;
    background: #fff;
    height: 47px;
    box-sizing: border-box;
    display: flex;
}
.firstHeader .logo{
	margin-right: 15px;
	text-decoration: none;
	font-size: 0;
}
.firstHeader h1{
    margin: 0;
    padding: 0;
    color: #00b600;
    font-size: 0;
    background: url(../../assets/img/indexImg/header/1logo.png) no-repeat;
    background-size: cover;
    height: 22px;
    width: 48px;
    display: inline-block;
}
.firstHeader nav{
	flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.firstHeader nav a span{
	display: block;
	font-size: 0;
    background: url(../../assets/img/indexImg/header/1下载.png) no-repeat;
    background-size: cover;
    width: 24.57143px;
    height: 18.28571px;
    margin-top: 4px;
    position: relative;
}
.firstHeader nav a.openDouban{
    background-color: #42bd56;
    color: #fff;
    font-size: 13px;
    line-height: 1;
    padding: 8px 13px;
    border-radius: 6px;
    font-weight: 500;
    text-decoration: none;
}
</style>