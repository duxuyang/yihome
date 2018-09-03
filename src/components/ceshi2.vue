<template>
	<div>
		测试2222222
	 <h3>{{$store.state.count}}</h3>
   <h1>{{$store.state.name}}</h1>
   <h1>{{$store.state.age}}</h1>
   <button @click="change('你好哦啊')">改变</button>
		<button @click="add(10)">+</button>
		<button @click="reduce">-</button>
		<br>
      <button @click="count">+</button>
      <p>接收参数为：{{can}}</p>
	</div>
</template>
<script type="text/javascript">
	 import {mapState,mapMutations,mapGetters} from 'vuex';
export default {
  data () {
    return {
      can:''
    }
  },
  methods:{
	  ...mapMutations(['add','reduce','change']),
	  ...mapGetters(["count"])
  },
  mounted:function(){
  	 this.can = this.$route.params.data1
  }


}
</script>
<style scoped>
div{
	width:100%;
	height: 400px;
}


</style>