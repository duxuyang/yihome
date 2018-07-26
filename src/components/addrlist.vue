<template>
	<div>
		<button @click="show=!show">kkkk</button>
		<p v-show="show">skdfkjaskdjf</p>
		<transition name="fade">
			<p v-show="show">的说法是否收费是的冯绍峰</p>
		</transition>


      <div class="nav">
        <router-link class="nav-link" to="/" tag="div">login</router-link>
        <router-link class="nav-link" to="/ceshi2" tag="div">home</router-link>
        <router-link class="nav-link" to="/ceshi3" tag="div">user</router-link>
      </div>
      <div class="main">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>



	</div>
</template>
<script >
	export default {
  data () {
    return {
     show:true,
     transitionName:''
    }
  },
  watch: {
	  $route(to, from) {
	    //如果to索引大于from索引,判断为前进状态,反之
	    console.log(to.meta.index)
	    console.log(from.meta.index)
	    if (to.meta.index > from.meta.index) {

	      this.transitionName = 'slide-left';
	    } else {
	      this.transitionName = 'slide-right';
	    }
	  }
  }
}

</script>
<style scoped>
	.fade-enter-active,.fade-leave-active{
		transition:opacity 2s ease-out;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}


.nav {
  width:100%;
  height: 40px;
  display: flex;
}

.nav .nav-link {
	flex: 1;
  line-height: 40px;
  border: 1px solid #222;
  text-align: center;
  cursor: pointer;
}
.nav .nav-link.router-link-exact-active{
  background-color:#ccc;
}
.main {
	width: 100%;
	min-height: 300px;
  overflow: hidden;
  position: relative;
}

/*路由切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}
</style>