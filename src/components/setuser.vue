<template>
	<div>
		<top tname="账户设置" @sendback="tui"></top>
		<div class="main">
			<ul>
				<li class="headimg">
					<div class="hcon">头像</div>
					<div class="hbg"></div>
				</li>
				<li>
					<div class="hcon">昵称</div>		
				</li>
				<li>
					<div class="hcon">收货地址</div>
					<div class="san"></div>
				</li>
				<div class="mb"></div>
				<li>
					<div class="hcon">户型编辑</div>
					<div class="san"></div>					
				</li>
				<li>
					<div class="hcon">装修阶段</div>
					<div class="hgray">环保入驻</div>						
				</li>
				<div class="mb"></div>
				<li>
					<div class="hcon">绑定微信</div>
					<div class="hgray">点击绑定</div>						
				</li>
				<li>
					<div class="hcon">绑定手机号</div>
					<div class="hgray">18301695170</div>						
				</li>
				<li>
					<div class="hcon">账号密码</div>
					<div class="hgray">设置密码</div>				
				</li>
			</ul>
		</div>



	</div>
</template>
<script >
	import top from '@/components/top'
	export default {
  data () {
    return {
     
    }
  },
  methods:{
		tui(){

		}
  },
  components:{
  	'top':top
  }
}
</script>
<style scoped>
.main{
	width:100%;
	padding: 44px 0 0 0;
}
.main ul{
	box-sizing: border-box;
	width:100%;
}
.main ul li{
	box-sizing: border-box;
	width:100%;
  padding: 0 13px;
  height: 47px;
  display: flex;
	align-items :center;
	border-bottom: 1px solid #eee;
}
.main ul li.headimg{
	width:100%;
	height: 69px;
}
.main ul li .hcon{
	flex: 1;
  color: #303030;
  font-size: 14px;
}
.main ul li .san{
	width:20px;
	height:20px;
	background: url(../assets/images/arrow_right_3.png) no-repeat right;
  background-size: 8px 14px;
}
.headimg .hbg{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid red;
}
.mb{
	background: #eee;
	height: 6px;
	width: 100%;	
}
.hgray{
	color: #999999;
}

</style>