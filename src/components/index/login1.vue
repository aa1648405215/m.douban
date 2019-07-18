<template>
	<div class="login">
		<section class="login1">
			<router-link to="/">
				<span :style="{backgroundImage:'url(' + require('../../../data/img/bookImg/loginIcon.svg') + ')'}"></span>
			</router-link>	
			<h2>短信验证登录/注册</h2>
			<p>
				登录注册表示同意 
				<router-link to="#">豆瓣使用协议、隐私政策</router-link>
			</p>
		</section>
		<section  class="login2">
			<span>+86</span>
			<input type="text" id="phone" placeholder="手机号"/>
			<input type="text" id="code" placeholder="手机验证码"/>
			<router-link to="#" id="getCode" @click.native="timecode">获取验证码</router-link>
			<router-link to="#" @click.native="checkphone">登录</router-link>
			<ul>
				<li>
					<router-link to="/login2">
						<p>账户密码登录</p>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<p>验证码收不到？</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="login3">
			<p>第三方登录</p>
			<ul>
				<li>
					<router-link to="#" :style="{backgroundImage:'url(' + require('../../../data/img/bookImg/weibo.png') + ')'}"></router-link>
				</li>
				<li>
					<router-link to="#" :style="{backgroundImage:'url(' + require('../../../data/img/bookImg/wechat.png') + ')'}"></router-link>
				</li>
			</ul>
		</section>
		<mt-popup v-model="popupVisible1" popup-transition="popup-fade"> <!--v-show="isshow"-->
	        <div @click="checkphone"  class="meBox1">
	            <span>无效的手机号</span>
	        </div>
	    </mt-popup>
	    <mt-popup v-model="popupVisible2" popup-transition="popup-fade"> <!--v-show="isshow"-->
	        <div @click="checkphone"  class="meBox1">
	            <span>请输入手机号</span>
	        </div>
	    </mt-popup>
	</div>
</template>

<script>
export default{
	data(){
		return{
			popupVisible1:false,
			popupVisible2:false
			//isshow:false
		}		
	},
	mounted(){

	},
	methods:{
		
		timecode(){
//			var codetime = window.setTimeout(()=>{
				var getcode = document.getElementById('getCode')
				  var num = 30
				  var timer = setInterval(function () {
				    num--
				    getcode.innerHTML = num + '秒后重新获取'
				    getcode.style.color = '#ccc'
				    getcode.disabled = ' disabled'
				    if (num === 0) {
				      getcode.disabled = ''
				      getcode.style.color = '#42b983'
				      getcode.innerHTML = '获取验证码'
				      clearInterval(timer)
				    }
				  }, 1000)
//			})
		},
		//验证手机号
		checkphone(){
			var getphone = document.getElementById('phone')
			//console.log(getphone.value)
			var valphone = getphone.value
			var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(valphone==''){
               //alert("请输入手机号");
               this.popupVisible2 = !this.popupVisible2
				setTimeout(()=>{
					this.popupVisible2 = false;
				},3000)
            }else if(!reg.test(valphone)){
             	//alert("无效手机号，请重新输入");
				this.popupVisible1 = !this.popupVisible1
				setTimeout(()=>{
					this.popupVisible1 = false;
				},3000)
            }
			
		}
	}
}
</script>

<style scoped>
.login{
	position: fixed;
	top: 0;
	padding: 15px 15px 20px;
	width: 100%;
	box-sizing: border-box;
}
.login1{
	margin: 30px 12px 30px 0;
}
.login1 a span{
	display: block;
	background-size: 16px;
	height: 16px;
	width: 16px;
	position: absolute;
	top: 4%;	
}
.login1 h2{
	text-align: center;
	font-size: 30px;
}
.login1 p{
	text-align: center;
	font-size: 15px;
	color: #bababa;
	margin-top: 5px;
}
/************login2*************/
.login2{
	position: relative;
}
.login2	input{
	width: 100%;
	border: 1px solid #ccc;
	font-size:15px;
	padding: 10px 40px 10px 10px;
	box-sizing: border-box;
	border-radius: 3%;
	line-height: 24px;
}
.login2	span:nth-child(1){
	display: block;
	position: absolute;
	left: 4%;
	font-size: 15px;
	font-weight: 700;
	/*border-right: 1px solid #BABABA;*/
	line-height: 44px;
}
.login2	span:nth-child(1)::before{
	content: '';
	border-left: 1px solid #BABABA;
	height: 25px;
	position: absolute;
	top: 10px;
	left: 35px;
	
}
.login2	a:nth-child(4){
	display: block;
	position: absolute;
	font-size: 15px;
	top: 29%;
	right: 2%;
}
.login2	input:nth-child(2){
	display: block;
	border-bottom: none;
	padding-right: 44px;
	padding-left: 60px;
	box-sizing: border-box;	
}
.login2	a:nth-child(5){
	display: block;
	margin: 20px 0 30px;
	text-align: center;
    background-color: rgba(66,189,86,.5);
    font-size: 17px;
    line-height: 44px;
    color: white;
}
.login2 ul{
	font-size: 15px;
	overflow: hidden;
}
.login2 ul li:nth-child(1){
	float: left;
}
.login2 ul li:nth-child(2){
	float: right;
}
.login2 ul li:nth-child(2) a{
	color: #494949;
}
/************login2*************/
.login3{
	padding-top: 160px;
	margin-bottom: 160px;
}
.login3 p{
	text-align: center;
	font-size: 13px;
	margin-bottom: 15px;
	color: #BABABA;
}
.login3 ul{
	text-align: center;
}
.login3 ul li a{
	display: inline-block;
	width: 66px;
	height: 66px;
	background-size: 100%;
	margin: 0 5px;
	/*border: 1px solid;*/
	/*border-radius: 50%;*/
	/*border-color: rgba(186,186,186,.5);*/
}
/*******弹出框*********/
.login>>>.v-modal{
	display: none;
	/*width: 100px;
	height: 100px;*/
}
.meBox1{
	background-color: red;
	border: 1px solid red;
	line-height: 47px;
	/*padding: 0 5px;*/
	border-radius: 10px;
	font-size: 15px;
	color: white;
}
.login>>>.mint-popup{
	top: 15%;
}
</style>