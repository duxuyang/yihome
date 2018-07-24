<template>
	<div>
		<header class="header">
			<div class="left">
				<div class="back"></div>
			</div>
			<div class="cen">图片列表</div>
			<div class="rigth"></div>
		</header>
		<div class="content"> 
			<div class="mtop">
				<div v-for="(val,index) in tablist" @click="tabm(index)"><span>{{val}}</span></div>
				
			</div>
			<div class="keylist">
				<div class="key1" v-show="tabi==0">
					<ul>
						<li class="active">全部</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
					</ul>
				</div>
				<div class="key2" v-show="tabi==1">
					<ul>
						<li class="active">全部</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>简欧</li>
						<li>卫生间</li>
						<li>儿童房</li>
						<li>衣帽间</li>
						<li>简欧</li>
						<li>简欧</li>
					</ul>					
				</div>
			</div>
			
			<div class="imglist">
				<ul>
					<li><img src="static/img1/1.jpg" alt=""></li>
					<li><img src="static/img1/1.jpg" alt=""></li>
					<li><img src="static/img1/1.jpg" alt=""></li>
					<li><img src="static/img1/1.jpg" alt=""></li>
					<li><img src="static/img1/1.jpg" alt=""></li>
				</ul>

			</div>			
		</div>	
		<div class="screen" @click="lost"></div>
	</div>
</template>
<script>
	export default {
  data () {
    return {
      tablist:["风格","空间"],
      tabi:'2'
    }
  },
  methods:{
  	tabm(index){
			this.tabi=index;
  	},
  	lost(){
  		this.tabi=2;
  	}
  }
}

</script>
<style>
.header{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
	height:44px;
	border-bottom: 1px solid #dddddd;
	display: flex;
	align-items :center;
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
  z-index: 14;
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
.content{
	width:100%;
	padding-top: 44px;
	max-width: 720px;
	margin: 0 auto;
	background: #fff;
}
.mtop{
	position: fixed;
	top: 45px;
	left:0;
	right: 0;
	border-bottom: 1px solid #eee;
	z-index: 14;
	font-size: 15px;
	font-weight: 400;
	background: #fff;
	overflow: hidden;
	display: flex;
}
.mtop>div{
	flex: 1;
	display: flex;
	align-items:center;
	justify-content:center;
	line-height: 42px;
	color: #303030;
	overflow: hidden;
	font-size: 15px;
	font-weight: 400;
}
.mtop>div>span{
	background: url(../assets/images/tranagle_down.png) no-repeat right;
  background-size: 9px 6px;
  padding-right: 16px;
}
.imglist{
	padding-top: 48px;
	position: relative;
	z-index: 1;
	box-sizing: border-box;
}
.imglist ul{
	padding: 5px 0 5px 5px;
	overflow: hidden;
}
.imglist ul li{
	float: left;
	width: 48.5%;
	padding-right: 5px;
	padding-top: 5px;
}
.imglist ul li img{
	max-width: 100%;
	border-radius: 4px;
}
.keylist{
	position: fixed;
	top: 85px;
	width: 100%;
	z-index: 13;
	background: #fff;
	box-sizing: border-box;
}
.key1 ul,.key2 ul{
	padding: 10px 0 20px 15px;
	width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.key1 ul li,.key2 ul li{
	line-height:30px;
	text-align: center;
	width: 22%;
	float: left;
	margin-right: 10px;
	border-radius: 4px;/*no*/
	margin-top: 6px;
	font-size: 12px;
	color: #252525;
	background: #fffbe7;
}
.key1 ul li.active,.key2 ul li.active{
    background: #faa200;
    color: #fff;	
}
.screen{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  filter: alpha(opacity=30);
  opacity: 0.3;
  z-index: 11;
}

</style>
