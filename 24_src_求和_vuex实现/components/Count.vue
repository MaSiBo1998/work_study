<template>
  <div>
    <h1>{{$store.state.sum}}</h1>
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