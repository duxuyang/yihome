<template>
	<div>
		<top tname="学装修" @sendback="fanhui">
		</top>
		<div class="topmenu">
			<div class="topcom" v-for="(val,index) in list">
				<div :class="{active:index==tabi}" @click="huan(index)">{{val}}</div>
			</div >
		</div>

	</div>
</template>
<script >
	import top from '@/components/top'
	export default{
		data(){
			return{
				list:["装修经验","装修攻略","装修视频","装修日记"],
				tabi:0,
				m:0
			}
		},
		methods:{
			fanhui(){

			},
			huan(index){
				this.tabi=index;
				if(this.m!=index){//防止多次点击同一个
					this.m=index
					if(index==0){
						console.log(index);
					}else if(index==1){
						console.log(index);
					}else if(index==2){
						console.log(index);
					}else if(index==3){
						console.log(index);
					}
				}

			}
		},
		mounted(){

		},
		 components:{
	  	'top':top
	   }
	}
</script>
<style scoped>
.topmenu{
	position: fixed;
	top:45px;
	left: 0;
	right: 0;
	height: 54px;
	border-bottom: 1px solid #eee;
	display: flex;
}
.topmenu>div{
	flex: 1;
	display: flex;
	justify-content:center;
	align-items:center;
}
.topcom>div{
	width:82px;
	height: 29px;
	line-height: 29px;
	text-align: center;
	border-radius: 4px;/*no*/
	font-size: 16px;
}
.topcom>div.active{
	color: #fff;
    background: #faa200;
}

</style>