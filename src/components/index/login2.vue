<template>
	<div class="login">
		<section class="login1">
			<router-link to="/">
				<span :style="{backgroundImage:'url(' + require('../../../data/img/bookImg/loginIcon.svg') + ')'}"></span>
			</router-link>	
			<h2>登录豆瓣</h2>
			<p>
				登录注册表示同意 
				<router-link to="#">豆瓣使用协议、隐私政策</router-link>
			</p>
		</section>
		<section  class="login2">
			<!--<span>+86</span>-->
			<input type="text" id="" value="" placeholder="手机号 / 邮箱"/>
			<input type="text" id="" value="" placeholder="密码"/>
			<!--<router-link to="#">获取验证码</router-link>-->
			<router-link to="#" @click.native="sendEmail">登录</router-link>
			<ul>
				<li>
					<router-link to="/login1">
						<p>免密码登录</p>
					</router-link>
					<router-link to="#">
						<p>海外手机登录</p>
					</router-link>
				</li>
				<li>
					<router-link to="#">
						<p>找回密码</p>
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
		<mt-popup v-model="popupVisible" popup-transition="popup-fade"> <!--v-show="isshow"-->
	        <div @click="sendEmail"  class="meBox1">
	            <span>无效的邮箱或手机号</span>
	        </div>
	    </mt-popup>
	</div>
</template>

<script>
export default{
	data(){
		return{
			popupVisible:false
			//isshow:false
		}		
	},
	mounted(){
		
	
	},
	methods:{
//		noshow(){
//			this.isshow = !this.isshow;		
//			setTimeout(()=>{
//				this.isshow = false;
//			},3000)
//		},		
	    //邮箱验证
        sendEmail(){
        	var val1 = this.$el.children[1].children[0].value
            var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(val1==''){
               alert("请输入邮箱或手机号");
            }else if(!regEmail.test(val1)&&!reg.test(val1)){
             	//alert("邮箱格式或手机号不正确");
				this.popupVisible = !this.popupVisible
				setTimeout(()=>{
					this.popupVisible = false;
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
/*.login2	a:nth-child(3){
	display: block;
	position: absolute;
	font-size: 15px;
	top: 29%;
	right: 2%;
}*/
.login2	input:nth-child(1){
	display: block;
	border-bottom: none;
	padding-right: 44px;
	/*padding-left: 60px;*/
	box-sizing: border-box;	
}
.login2	a:nth-child(3){
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
.login2 ul li:nth-child(1) a{
	display: inline-block;
	margin-right: 12px;
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