<template>
	<div>
		<div class="centerbg">
			<div class="htop">
			</div>
			<div class="hcon">
				<div class="pimg">
					<div class="pimg1" :style="{}"></div>
				</div>
				<div class="phone">18301695170</div>
			</div>
		</div>
		<div class="mhaedlist">
			<ul>
				<li v-for="(val,index) in list1" @click="fun1(val,index)">{{val}}</li>
			</ul>
		</div>
		<div class="mcoderlist">
			<div class="mcoder">
				<div class="order">商品订单</div>
				<div class="orderback"></div>
			</div>
			<ul>
				<li>代付款</li>
				<li>代发货</li>
				<li>待收货</li>
				<li>已完成</li>
				<li>售后</li>
			</ul>
		</div>
		<div class="mcoderlist help">
			<div class="mcoder">
				<div class="order">装修需求</div>
				<div class="orderback"></div>
			</div>
			<ul>
				<li>预约</li>
				<li>设计</li>
				<li>找工头</li>
			</ul>
		</div>
		<div class="mcdetail">
			<ul>
				<li class="mborder">
					<div class="mcname">钱包</div>
					<div class="mcount">￥<span>0</span></div>
				</li>
				<li>
					<div class="mcname">优惠券</div>
					<div class="mcount">0</div>
				</li>
				<li class="mborder">
					<div class="mcname">积分</div>
					<div class="mcount">0</div>
				</li>
				<li>
					<div class="mcname">收货地址</div>
					<div class="mcount">0</div>
				</li>
				<li class="mborder">
					<div class="mcname">推荐有礼</div>
				</li>
				<li>
					<div class="mcname">专业账号</div>
				</li>
			</ul>
		</div>


	</div>
</template>

<script type="text/javascript">
	export default {
  data () {
    return {
      list1:["关注","收藏","足迹"]
    }
  },
  methods:{
  	fun1(val,index){
  		if(index==0){
  			console.log("关注")
  		}else if(index==1){
  			console.log("收藏")
  		}else if(index==2){
  			console.log("足迹")
  		}
  	}
  }
}
</script>
<style scoped>
.centerbg{
	position: relative;
	background: url(../assets/images/mycenter_bg2.png) no-repeat;
	background-size: 100% 100%;
	height:125px;
	width: 100%;
}
.htop{
	position: absolute;
	top:30px;
	left:20px;
	width: 19px;
	height: 20px;
	background: url(../assets/images/setup_icon.png) no-repeat;
	background-size: 100% 100%;
}
.hcon{
	display: flex;
	align-items :center;
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-22%,-50%);
}
.pimg{
	display: flex;
	justify-content:center;
	align-items :center;
  width: 70px;
  height: 70px;
  background: none;
  border: 2px solid #fff;
  border-radius: 50%;
}
.pimg div{
	width: 63px;
	height: 63px;
	background: #fff;
	border-radius: 50%;
}
.phone{
	font-size: 14px;
	color: #fff;
	margin-left: 10px;
}
.mhaedlist{
  width: 100%;
  margin-top: 11px;
  border-bottom: 10px #f5f5f5 solid;
  padding-bottom: 5px;
  font-size: 13px;
  color: #555;
  font-weight: bold;
}
.mhaedlist ul{
	height: 100%;
	display: flex;
}
.mhaedlist ul li{
	flex: 1;
	padding-top: 26px;
	text-align: center;
}
.mhaedlist ul li:nth-child(1){
	background: url(../assets/images/lick_icon.png) no-repeat top;
  background-size: 23px 21px;
}
.mhaedlist ul li:nth-child(2){
	background: url(../assets/images/collect_icon_red.png) no-repeat top;
  background-size: 23px 21px;
}
.mhaedlist ul li:nth-child(3){
	background: url(../assets/images/footprint.png) no-repeat top;
  background-size: 23px 21px;
}
.mcoderlist{
	padding-bottom: 10px;
	border-bottom: 6px solid #f5f5f5;
}
.mcoder{
	display: flex;
	align-items:center;
	padding: 16px 20px;
	border-bottom: 1px solid #f5f5f5;
}
.help .order{
		background: url(../assets/images/orderRed_icon.png) no-repeat left;
	background-size: 15px 17px;
	padding-left: 25px;
}
.order{
	background: url(../assets/images/orderYellow_icon.png) no-repeat left;
	background-size: 15px 17px;
	padding-left: 25px;
}
.orderback{
	flex: 1;
	width:7px;
	height: 13px;
	background: url(../assets/images/arrow_right_3.png) no-repeat right;
	background-size: 7px 13px;
}
.mcoderlist ul{
	display: flex;
	padding-top: 16px;
}
.mcoderlist ul li{
	flex: 1;
	padding-top: 25px;
	text-align: center;
}
.mcoderlist ul li:nth-child(1){
		background: url(../assets/images/pay_icon.png) no-repeat top;
	background-size: 19px 17px;
}
.mcoderlist ul li:nth-child(2){
		background: url(../assets/images/deliver_icon.png) no-repeat top;
	background-size: 22px 15px;
}
.mcoderlist ul li:nth-child(3){
		background: url(../assets/images/receipt_icon.png) no-repeat top;
	background-size: 24px 19px;
}
.mcoderlist ul li:nth-child(4){
		background: url(../assets/images/evaluate_icon.png) no-repeat top;
	background-size: 22px 18px;
}
.mcoderlist ul li:nth-child(5){
		background: url(../assets/images/customer_icon.png) no-repeat top;
	background-size: 20px 20px;
}
.help ul li:nth-child(1){
	    background: url(../assets/images/applicate_icon.png) no-repeat top;
    background-size: 20px 19px;
  }
.help ul li:nth-child(2){
    background: url(../assets/images/design_icon.png) no-repeat top;
    background-size: 18px 18px;
}
.help ul li:nth-child(3){
    background: url(../assets/images/leader_icon.png) no-repeat top;
    background-size: 19px 19px;
}
.mcdetail{
	padding: 0 0 50px;
}
.mcdetail ul{
	width: 100%;
	overflow:hidden;
}
.mcdetail ul li{
	box-sizing: border-box;
	float: left;
	width: 50%;
	border-bottom: 1px solid #f5f5f5;
	padding: 14px 14px 14px 20px;
	line-height: 26px;	
	display: flex;
}
.mborder{
	border-right: 1px solid #f5f5f5;
}
.mcname{
	flex: 1;
	height: 26px;
	padding-left: 28px;
}
.mcount{
	line-height: 26px;
	font-size: 12px;
	color: #e45252;
}
.mcdetail ul li:nth-child(1) .mcname{
	background: url(../assets/images/wallet_icon.png) no-repeat left;
	background-size: 18px 16px;
}
.mcdetail ul li:nth-child(2) .mcname{
background: url(../assets/images/coupon_icon.png) no-repeat left;
    background-size: 17px 16px;
}
.mcdetail ul li:nth-child(3) .mcname{
    background: url(../assets/images/integral_icon.png) no-repeat left;
    background-size: 20px 21px;
}
.mcdetail ul li:nth-child(4) .mcname{
    background: url(../assets/images/address_icon.png) no-repeat left;
    background-size: 18px 21px;
}
.mcdetail ul li:nth-child(5) .mcname{
    background: url(../assets/images/gift_icon.png) no-repeat left;
    background-size: 18px 20px;
}
.mcdetail ul li:nth-child(6) .mcname{
background: url(../assets/images/account_icon.png) no-repeat left;
    background-size: 22px 18px;
}


</style>