<template>
	<div class="demo">
		<div class="logo"></div>
		<div class="m1">
			<div class="username">
				<span></span>
				<input type="text" placeholder="请输入你的手机号码">
				<button>获取验证码</button>
			</div>
			<div class="ma">
				<span></span>
				<input type="text" placeholder="请输入你验证码">
			</div>	
			<div class="regist">注册</div>		
		</div>		
	</div>

</template>
<script>
	

</script>
<style scoped>
.demo{
	padding:50px 0 0;
}
	.logo{
		width:88px;
		height:88px;
		background: url(../assets/images/logo.png) no-repeat;
		background-size: 100% 100%;
		margin:0 auto;
	}
.m1{
	width:100%;
	box-sizing: border-box;
	padding:0 20px;
	margin-top:50px;
}
.username,.ma{
	display: flex;
	 border-bottom: 1px solid #d0d0d0;
    padding: 10px 0px;
    margin-bottom: 4px;
    align-items:center;
    position:relative;
}

.username span{
	   background: url(../assets/images/user_icon.png) no-repeat center center;
    width: 19px;
    height: 22px;
    background-size: 100% 100%;
}
.ma span{
	   background: url(../assets/images/pwd_icon.png) no-repeat;
    width: 19px;
    height: 22px;
    background-size: 100% 100%;
}
.username input,.ma input{
	  border: none;
    height: 28px;
    line-height: 28px;
    margin-bottom: 0px;
    color: #ACACAC;
    font-size: 16px;
    padding: 2px 0px;
    padding-left: 20px;/*no*/
}
.username button{
	position:absolute;
	right:0;
	top:50%;
	transform:translateY(-50%);
	  width:100px;
    height: 32px ;
    border-radius: 2px;/*no*/
    text-align: center;
    line-height: 32px;
    border: none;
    background-color: #faa200;
    font-size: 13px;
    color: #fff;
    text-transform: none;
}
.regist{
	display: flex;
	width:100%;
	height: 46px;
	font-size: 18px;
	background: #faa200;
	align-items :center;
justify-content:center;
color:#fff;
border-radius: 5px;/*no*/
margin-top: 33px ;
}


</style>