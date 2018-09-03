<template>
	<div>
<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/images/lun1.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/lun2.jpg" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="cenbox">
  	<div>
  		<a href="">
  			<div class="gimg1"></div>
  			<div class="mm1">学装修</div>
  		</a>
  	</div>
  	<div >
  		<a href="">
  			<div class="gimg2"></div>
  			<div class="mm1">效果图</div>
  		</a>  		
  	</div>
  	<div class="">
  		<a href="">
  			<div class="gimg3"></div>
  			<div class="mm1">商场</div>
  		</a> 
  	</div>
  	<div class="">
  		<a href="">
  			<div class="gimg4"></div>
  			<div class="mm1">找装修</div>
  		</a>  		
  	</div>
  	<div class="">
  		<a href="">
  			<div class="gimg5"></div>
  			<div class="mm1">分类</div>
  		</a>  		
  	</div>
  </div>
  <div class="bg_1"></div>
  <div class="newsinfo">
  	<div class="news1">这是头条信息</div>
  	<div class="radar">
  		<div ></div>
  	</div>
  </div>
  <div class="bg_1"></div>
  <div class="activity">
  	<div class="acti_header">
  		<div class="actimg"></div>
  		<div class="actxt">活动</div>
  	</div>
  	<div class="activi_banner">
  		<a href="">
  			<img src="../../static/img3/1.jpg">
  		</a>
  	</div>
  </div>
  <div class="bg_1"></div>
  <div class="activity">
  	<div class="acti_header">
  		<div class="actimg"></div>
  		<div class="actxt">别人家</div>
  	</div>
  	<div class="activi_banner">
  		<a href="">
  			<img src="../../static/img3/2.jpg">
  		</a>
  	</div>
  </div>
   <div class="bg_1"></div>
  <div class="activity">
  	<div class="acti_header">
  		<div class="actimg"></div>
  		<div class="actxt">学装修</div>
  	</div>
  	<div class="acti_img">
  		<ul>
  			<li>
  				
  			</li>
  		</ul>
  	</div>
  </div>


	</div>
</template>
<script type="text/javascript">
	import Swiper from 'swiper'
	export default {
  data () {
    return {

    }
  },
  mounted(){
   new Swiper('.swiper-container',{
        autoplay:true,
        loop:true,
        pagination: {
			    el: '.swiper-pagination'
			  },
   })
  },
  methods:{

  }
}
</script>
<style scoped>

 .swiper-container {
      width: 100%;
      height:225px;
    }
  .swiper-container  img{
    	max-width:100%;
    }
 .swiper-container .swiper-pagination{
	 	bottom:8px;/*no*/
	 }
.swiper-pagination .swiper-pagination-bullet{
    width: 15px;/*no*/
    height: 2px;/*no*/
    border-radius: 6px;/*no*/
    border: none;
    background: #fff;
    box-shadow: none;
    margin: 1px 6px;/*no*/
    opacity: 1;
 }
.cenbox{
	display:flex;
	    padding-top: 17px;
    padding-bottom: 19px;
}
.cenbox>div{
	flex: 1;
}
.cenbox>div>a{
		display: flex;
	flex-direction:column;
	align-items :center;
	width:100%;
	height: 100%;
}
.cenbox>div .gimg1{
	width: 44px;
  height: 44px;
	background: url(../assets/images/study_decorate.png) no-repeat;
	background-size: 100% 100%;
}
.cenbox>div .mm1{
  font-size: 12px;
  color: #303030;
  height:22px;
  line-height: 22px;
}
.cenbox>div .gimg2{
	width: 44px;
  height: 44px;
	background: url(../assets/images/effect.png) no-repeat;
	background-size: 100% 100%;
}
.cenbox>div .gimg3{
	width: 44px;
  height: 44px;
	background: url(../assets/images/market.png) no-repeat;
	background-size: 100% 100%;
}
.cenbox>div .gimg4{
	width: 44px;
  height: 44px;
	background: url(../assets/images/find_decorate.png) no-repeat;
	background-size: 100% 100%;
}
.cenbox>div .gimg5{
	width: 44px;
  height: 44px;
	background: url(../assets/images/classfiy.png) no-repeat;
	background-size: 100% 100%;
}
.newsinfo{
	display:flex;
	padding: 12px 0px 13px 15px;
	line-height: 22px;
	position: relative;
}
.newsinfo .news1{
	flex: 1;
	height: 33px;
	background: url(../assets/images/topline.png) no-repeat left center;
	background-size: 31px 15px;
	padding-left: 41px;
	line-height: 33px;
}
.newsinfo .radar{
    width: 98px;
    text-align: right;
    height: 33px;
     line-height: 33px;
    padding-left: 15px;
    border-left: 1px solid #d7d7d7;

}
.newsinfo .radar div{
	    width: 83px;
    height: 33px;
	    background: url(../assets/images/radar.png) no-repeat;
    background-size: 100% 100%;
}
.bg_1{
	    background: #eef2f1;
    height: 6px;
    width: 100%;
}
.activity{
  padding-top: 13px;
  padding-bottom: 15px;
}
.activity .acti_header{
  display: flex;
  justify-content:center;
  align-items :center;
}
.actimg{
	width: 20px;/*no*/
	height: 20px;/*no*/
	background: url(../assets/images/product_icon.png) no-repeat;
	background-size: 100% 100%;
	border-radius: 50%;
}
.actxt{
	padding-right: 13px;/*no*/
	background: url(../assets/images/arrow_right.png) right no-repeat;
    background-size: 6px 12px; 
    color: #717171;
    margin-left: 5px;/*no*/

}
.activi_banner{
	width: 100%;
	position: relative;
  padding: 13px 15px 0;
  
}
.activi_banner img{
	border-radius: 7px;
	    max-width: 100%;
}
.acti_img{
	width: 100%;
  padding:13px 0 0 15px;
}
.acti_img ul li{
	margin-bottom: 30px;
	padding: 11px 15px 0 0;
}
</style>