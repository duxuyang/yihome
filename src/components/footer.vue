<template>
	<div class="footer">
		<ul>
			<li :class="{active:index==tabi}" v-for="(val,index) in flist" @click="ftab(val,index)">
				<div class="main"></div>
				<div class="text">{{val}}</div>
		  </li>
		</ul>
	</div>

</template>
<script type="text/javascript">
	export default {
  data () {
    return {
      flist:["首页","商城","家","购物车","我的"],
      tabi:'0'
    }
  },
  methods:{
  	ftab(val,index){
  		this.tabi=index;
  	}
  }
}
</script>
<style scoped>
.footer{
	width:100%;
	height:48px;
	border-top: 1px solid #e4e1da;
	background: #fff;
	max-width: 720px;
	margin: 0 auto;
	z-index: 14;
}
.footer ul{
	width:100%;
	height:100%;
	display: flex;
}
.footer ul li{
	flex: 1;
	display: flex;
	flex-direction:column;
	align-items :center;
	justify-content:center;
}
.footer ul li .main{
	width: 18px;
	height: 17px;
}
.footer .text{
	font-size: 12px;
	margin-top:5px;
}
.footer ul li:nth-child(1) .main{
	background: url(../assets/images/home_icon.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li:nth-child(2) .main{
	background: url(../assets/images/market_icon.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li:nth-child(3) .main{
	background: url(../assets/images/house_icon.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li:nth-child(4) .main{
	background: url(../assets/images/shopcart_icon.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li:nth-child(5) .main{
	background: url(../assets/images/my_icon.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li.active{
  color: #faa200;
}
.footer ul li.active:nth-child(1) .main{
	background:url(../assets/images/home_icon_active.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li.active:nth-child(2) .main{
	background:url(../assets/images/market_icon_active.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li.active:nth-child(3) .main{
	background:url(../assets/images/house_icon_active.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li.active:nth-child(4) .main{
	background:url(../assets/images/shopcart_icon_active.png) no-repeat center center;
	background-size: 18px 17px;
}
.footer ul li.active:nth-child(5) .main{
	background:url(../assets/images/my_icon_active.png) no-repeat center center;
	background-size: 18px 17px;
}
</style>