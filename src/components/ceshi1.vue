<template>
	<div>
		测试11111111111111
<h3>{{$store.state.count}}</h3>
<div>
  <button @click="$store.commit('add',10)">+</button>
  <button @click="$store.commit('reduce')">-</button>
  <button @click="add">+</button>
</div>
	<a href="#/ceshi2">去登录</a>
  <router-link to="/ceshi2"> 注册完成，去登录</router-link>
  <button @click="sent(123)">登录</button>
  <button @click="sent1('/ceshi3')">登录1</button>
	</div>
</template>
<script type="text/javascript">

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods:{
  	add(){
  		this.$store.commit('add',10);
  	},
  	sent(data){
  		this.$router.push('/ceshi2/'+data);
  	},
  	sent1(mm){
  		this.$router.push(mm);
  	}
  }

}
</script>

<style scoped>
	div{
		width:100%;
		height: 400px;
		
	}

</style>