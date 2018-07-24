<template>
	<div>
		<header class="header">
			<div class="left">
				<div class="back"></div>
			</div>
			<div class="cen">重置密码</div>
			<div class="rigth"></div>
		</header>		
		<div class="maxbox">
			<div class="username">
  			<label></label>
  			<input type="text" name="" placeholder="请输入手机号">
  		</div>
  		<div class="ma">
  			<label></label>
  			<input type="text" name="" placeholder="请输入验证码">
  			<div class="sentma">获取验证码</div>
  		</div>
  		<div class="pass">
  			<label></label>
  			<input type="password" name="" placeholder="请输入新密码">
  		</div>  
  		<div class="pass">
  			<label></label>
  			<input type="password" name="" placeholder="再次输入密码">
  		</div>
  		<div class="reset">重置</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	export default {
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
		.header{
		width:100%;
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
	width: 18px;
  height: 24px;
  background: url(../assets/images/arrow_left.png) center center no-repeat;
  background-size:12px 19px;
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
.maxbox{
	box-sizing: border-box;
	margin-top: 20px;
	padding: 0px 20px;
}
.username,.ma,.pass{
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
.username input,.ma input,.pass input{
	  border: none;
    height: 28px;
    line-height: 28px;
    color: #ACACAC;
    font-size: 16px;
    padding: 2px 0px;
    padding-left:15px;
    background-color: #fff;
    -webkit-appearance: none;
}
.ma>label{
	background: url(../assets/images/indentify.png) no-repeat center center;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
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
.pass>label{
	background: url(../assets/images/pwd_icon.png) no-repeat center center;
	width: 19px;
	height: 22px;
	background-size: 19px 22px;
}
.reset{
	display: flex;
	align-items:center;
	justify-content:center;
	height: 46px;
	font-size: 18px;
	background: #faa200;
	width: 100%;
	color: #fff;
	font-weight: 400;
	border-radius: 3px;/*no*/
	margin-top: 25px;
}
</style>
