<template>
	<div>
		<header class="header">
			<div class="left">
				<div class="back"></div>
			</div>
			<div class="val">
				<input type="text" name="" placeholder="搜索商品">
			</div>
			<div class="menu"></div>
		</header>
		<div class="maxbox">
			<div class="lmenu">
				<ul>
					<li v-for="(val,index) in list" :class="{active:index==menui}" @click="menu(index)">{{val}}</li>
				</ul>
			</div>
			<div class="rmenu">
				<div class="clist">
					产品分类
				</div>
				<div class="plist">
					<ul>
						<li >
							<div class="pimg" :style="{background:'url('+imgurl+') no-repeat'}"></div>
							<div class="pname">地暖</div>
						</li>

					</ul>
				</div>
			</div>
		</div>		
	</div>

</template>
<script>
	export default {
  data () {
    return {
      list:["卫浴洁具","灯饰照明","橱柜厨电","瓷板地砖","家用电器","墙纸涂料","掉丁门窗","全屋定制","客厅家具","卧室家具","餐厅家具","辅材五金","装修服务"],
      menui:0,
      imgurl:'../assets/images/113.jpg'
    }
  },
  methods:{
  	menu(index){
  		this.menui=index;
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
	box-sizing: border-box;
	width:100%;
	border-bottom: 1px solid #dddddd;
	padding: 0 10px;
  height: 44px;
	display: flex;
	align-items:center;
}
.header .left{
	width:40px;
	height:100%;
	display: flex;
	align-items:center;
}
.header .left .back{
	width: 17px;
	height: 24px;
	background: url(../assets/images/arrow_left.png) center center no-repeat;
	background-size: 10px 19px;
}
.val{
	flex: 1;
	background: #efeff4;
    border-radius: 16px;
    height: 30px;
    padding-left: 10px;
}
.val input{
	height: 32px;
	background: url(../assets/images/search.png) no-repeat left;
	background-size: 15px 15px;
	font-size: 12px;
	color: #999999;
	padding-left: 20px;
	border: 0;
	border-radius: 6px;
}
.menu{
	background: url(../assets/images/topMenu.png) no-repeat center center;
	width: 48px;
	height: 44px;
	background-size: 18px 5px;
}
.maxbox{
	display: flex;
	position: absolute;
  top: 44px;
  right: 0;
  bottom: 0;
  left: 0;
}
.lmenu{
	width: 22.2%;
	overflow-y: auto;
	height: 100%;
}
.rmenu{
	flex: 1;
	background: #eee;
}
.lmenu ul{
	width:100%;
	background: #fff;
}
.lmenu ul li{
	display: flex;
	justify-content:center;
	align-items :center;
	font-size: 13px;
	font-weight: 400;
	border-bottom: 1px solid #eeeeee;
	line-height: 45px;	

}
.lmenu ul li.active{
	    color: #faa200;
    background: #eee;
    border: none;
    border-left: 5px solid #FAA200;
}
.clist{
	width: 100%;
	font-size: 12px;
	line-height: 45px;	
  color: #777777;
  padding-left: 8px;
}
.plist{
padding: 0px 10px 10px 0px;
}
.plist ul{
	width:100%;
	overflow:hidden;
}
.plist ul li{
	float: left;
	display: flex;
	align-items:center;
	flex-direction:column;
	width:85px;
	height:90px;
	background: #fff;
  margin-left:10px;
  margin-bottom: 10px;
  padding-top:15px;
}
.pname{
	font-size: 12px;
	color: #777777;
	line-height: 25px;
	height: 25px;
	margin-top: 5px;
}
.pimg{
	width:65px;
	height:65px;
	/*background: url(../assets/images/113.jpg) no-repeat;*/
	background-size: 100% 100%;
}
</style>
