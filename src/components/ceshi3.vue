<template>
	<div>

		{{$store.state.count}}
<p></p>
		<button @click="addAction">+</button>
		<button @click="reduceAction">-</button>

	</div>
</template>
<script type="text/javascript">
  import {mapState,mapActions,mapMutations} from 'vuex';

	export default {
  data () {
    return {
      shuju:''
    }
  },
  mounted:function(){
  	this.shuju=this.$store.state.count;
  },
// computed:mapState({
//   msg:state=>state.count  //理解为传入state对象，修改state.count属性
//   })
 computed:mapState(["count"]),
  methods:{
        ...mapMutations([  
            'add','reduce'
        ]),
        ...mapActions(['addAction','reduceAction'])
    }
}

</script>
<style scoped>
		div{
			width:100%;
			height: 400px;

	}


</style>