<template>
  <div>
    <h1>{{sum}}</h1>
    <h3>{{bigNum}}</h3>
    <h4>男生：{{man}}女生：{{men}}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数时加</button>
    <button @click="incrementWait">延迟加</button>
  </div>
</template>

<script>
// 第一步引入mapState
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //选择的数字
    };
  },
  methods: {
    increment() {
		this.$store.commit('JIA',this.n)
		// this.$store.dispatch('jia',this.n)
	},
    decrement() {
		this.$store.commit('JIAN',this.n)
		// this.$store.dispatch('jian',this.n)
	},
    incrementOdd() {
		this.$store.dispatch('jiaOdd',this.n)
	},
    incrementWait() {
		this.$store.dispatch('jiaWait',this.n)
	},
  },
  computed:{
    // 通过自己去写计算属性，简写vuex中state getters的数据
    // sum(){
    //   return this.$store.state.sum
    // },
    // man(){
    //   return this.$store.state.man
    // },
    // men(){
    //   return this.$store.state.men
    // },
    // bigNum(){
    //   return this.$store.getters.bigNum
    // },
    // 通过映射借助mapState获取，第一步引入，第二步在computed中生成计算属性
    // 第一种对象写法，可以自己定义差值语法中的名字
    // ...mapState({sum:'sum',man:'man',men:'men'}),
    // 第二种数组写法
    ...mapState(['sum','man','men']),

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
			// ...mapGetters({bigSum:'bigSum'})
			
			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigNum'])
  },
  mounted(){
	  console.log('Count',this)
  }
};
</script>

<style scoped>
button {
	margin-left: 5px;
}
</style>