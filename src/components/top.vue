<template>
	<div>
		<header class="header">
			<div class="left" @click="tback">
				<div class="back"></div>
			</div>
			<div class="cen">{{tname}}</div>
			<div class="rigth"></div>
		</header>

	</div>
</template>
<script>
	export default {
	props:['tname'],
  data () {
    return {
     
    }
  },
  methods:{
  	tback(){
  		 this.$emit('sendback',1);
  	}
  }
}

</script>
<style scoped>
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

</style>