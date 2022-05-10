<template>
  <div>
    <h1>{{ sum }}</h1>
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
      sum: 0, //求和结果
      n: 1, //选择的数字
    };
  },
  methods: {
    increment() {
		this.sum += this.n
	},
    decrement() {
		this.sum -=this.n
	},
    incrementOdd() {
		if(this.sum %2){
			this.sum += this.n
		}
	},
    incrementWait() {
		setTimeout(() => {
			this.sum += this.n
		},1000)
	},
  },
};
</script>

<style scoped>
button {
	margin-left: 5px;
}
</style>