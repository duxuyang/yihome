<template>
	<div>
		<top tname="系统设置" @sendback="tui"></top>
		<div class="rdetail">
			<ul>
				<li>意见反馈 <span></span></li>
				<li>关于我们 <span></span></li>
			</ul>
		</div>
		<div class="out">
			<div @click="logout">退出账号</div>
		</div>
	</div>
</template>
<script>
import top from '@/components/top'
export default {
  data () {
    return {
     
    }
  },
  methods:{
  	tui(msg){
  		this.$router.go(-1);
  	},
  	logout(){
  		
  	}
  },
  components:{
  	'top':top
  }
}

</script>
<style scoped>
.rdetail{
	padding-top: 44px;
	max-width: 720px;
	margin: 0 auto;
	background: #fff;
}
.rdetail ul li{
	padding: 13px 13px;
	border-bottom: 1px solid #eee;
	line-height: 20px;
	color: #303030;
	font-size: 16px;
	display: flex;
	align-items :center;
}
.rdetail ul li span{
	flex: 1;
	display: inline-block;
	width:15px;
	height:15px;
		background: url(../assets/images/arrow_right_3.png) no-repeat right;
	background-size: 7px 13px;
}
.out{
	position: fixed;
	width: 100%;
	bottom: 0px;
	padding: 10px 0px;
	background: #fff;
	display: flex;
	justify-content:center;
}
.out div{
	width:92%;
	color: #fff;
	font-size: 18px;
	border-radius: 3px;
	text-align: center;
	height: 48px;
	line-height: 48px;
	background-color: #fd383a;
}

</style>