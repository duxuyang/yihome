<template>
	<div>
		<top tname="学装修" @sendback="fanhui">
		</top>
		<div class="topmenu">
			<div class="topcom" v-for="(val,index) in list">
				<div :class="{active:index==tabi}" @click="huan(index)">{{val}}</div>
			</div >
		</div>
		<div class="newlist">
			<ul>
				<li>
					<div class="ntop">
						<div class="nimg"></div>
						<div class="nrigth">
							<div class="ncen">
								<div class="n1">宽带缴芬水电分</div>
								<div class="data">2017-10-12</div>
							</div>			
							<div class="collect" >收藏</div>
						</div>

						
					</div>
					<div class="list">实打实地方</div>
					<ul class="ulist">
						<li><img src="../assets/images/1024.jpg" alt=""></li>
					</ul>
				</li>
			</ul>
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
<style lang="css" scoped src="../assets/css/articlelist.css">
  /*@import "../assets/css/articlelist.css"*/
</style>