<template>
	<div>
		<header class="header">
			<div class="left">
				<div class="back"></div>
			</div>
			<div class="cen">登录</div>
			<div class="rigth"></div>
		</header>
		<div class="main">
			<div class="tablist">
				<div v-for="(val,index) in tablist" :class="{active:index==biao}" @click="tabfun(index)">{{val}}</div>
		  </div>
		  <div class="mlist">
		  	<div class="login1" v-show="biao==0">
		  		<div class="username">
		  			<label></label>
		  			<input type="" name="" placeholder="用户名/手机号/邮箱">
		  		</div>
		  		<div class="pass">
		  			<label></label>
		  			<input type="password" name="" placeholder="请输入密码">
		  			<div>忘记密码?</div>
		  		</div>
		  		<div class="btnlogin">登录</div>
		  		<div class="btnregist">注册</div>
		  	</div>
		  	<div class="login2" v-show="biao==1">
		  		<div class="username">
		  			<label></label>
		  			<input type="text" name="" placeholder="请输入手机号">
		  		</div>
		  		<div class="ma">
		  			<label></label>
		  			<input type="text" name="" placeholder="请输入验证码">
		  			<div class="sentma">获取验证码</div>
		  		</div>
		  		<div class="btnlogin1">登录</div>
		  	</div>
		  </div>
		</div>



	</div>
</template>
<script>
	export default {
  data () {
    return {
      tablist:["密码登录","快捷登录"],
      biao:'0'
    }
  },
  methods:{
  	tabfun(index){
  		this.biao=index;
  	}
  }
}

</script>
<style scoped>
	.header{
		position: fixed;
		top:0;
		left:0;
		right:0;
		height:44px;
		border-bottom: 1px solid #dddddd;
		display: flex;
		align-items :center;
	}
.header .left{
	width:45px;
	height:100%;
	display: flex;
	align-items:center;
	justify-content:center;
}
.header .left .back{
	width: 17px;
  height: 24px;
  background: url(../assets/images/arrow_left.png) center center no-repeat;
  background-size: 10px 19px;
}
.header .cen{
	flex: 1;
	text-align: center;
  font-size: 16px;
	color: #000;
}
.header .rigth{
	width:45px;
	height: 100%;
}
.main{
	padding-top:60px;
}
.tablist{
	display: flex;
	width:316px;
	height:42px;
	margin:0 auto;
	border-radius: 7px;
	border: 1px solid #faa200;/*no*/
}
.tablist>div{
	flex: 1;
	display: flex;
	align-items:center;
	justify-content:center;
	color: #faa200;
	height:100%;
	font-size: 15px;

}
.tablist>div:first-child{
	border-right: 0px;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
}
.tablist>div:nth-child(2){
		border-left: 0px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.tablist>div.active{
	background: #faa200;
	color: #fff;
}
.mlist{
	width:100%;
	box-sizing: border-box;
	padding: 0px 20px;
	margin-top: 50px;
}
.username,.pass,.ma{
	display: flex;
	align-items:center;
	border-bottom: 1px solid #d0d0d0;
  padding: 10px 0px;
  position: relative;
}
.username>label{
	background: url(../assets/images/user_icon.png) no-repeat center center;
	width: 19px;
	height: 22px;
	background-size: 19px 22px;
}
.ma>label{
	background: url(../assets/images/indentify.png) no-repeat center center;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.username input,.pass input,.ma input{
	  border: none;
    height: 28px;
    line-height: 28px;
    color: #ACACAC;
    font-size: 16px;
    padding: 2px 0px;
    padding-left: 30px;
    background-color: #fff;
    -webkit-appearance: none;
}
.pass>label{
	background: url(../assets/images/pwd_icon.png) no-repeat center center;
    width: 19px;
    height: 22px;
    background-size: 19px 22px;
}
.pass>div{
	position: absolute;
	top:50%;
	right:0;
	transform:translateY(-50%);
  font-size: 12px;
  color: #faa200;
}
.ma>div{
	position: absolute;
	top:50%;
	right:0;
	transform:translateY(-50%);
	font-size: 12px;
	color: #faa200;
	background-color: #faa200;
	width: 98px;
	height: 32px ;
	border-radius: 2px;
	text-align: center;
	line-height: 32px;
	font-size: 13px;
	color:#fff;
}
.btnlogin,.btnlogin1{
	display: flex;
	align-items:center;
	justify-content:center;
	height: 46px;
	font-size: 18px;
	background: #faa200;
	width: 100%;
	margin-bottom: 10px;
	color: #fff;
	border: 1px solid #f0ad4e;/*no*/
	font-weight: 400;
	border-radius: 3px;/*no*/
	margin-top: 25px;
}
.btnregist{
	display: flex;
	align-items:center;
	justify-content:center;
	color: #faa200;
	background: none;
	height: 46px;
	font-size: 18px;
	width: 100%;
	margin-bottom: 10px;
	border: 1px solid #f0ad4e;
	border-radius: 3px;/*no*/
}

</style>