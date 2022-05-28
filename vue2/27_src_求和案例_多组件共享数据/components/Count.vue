<template>
  <div>
    <h1>{{ sum }}</h1>
    <h3>{{ bigNum }}</h3>
    <h4>男生：{{ man }}女生：{{ men }}</h4>
    <h3 style="color:red">Person组件共有：{{personList.length}}人</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数时加</button>
    <button @click="incrementWait(n)">延迟加</button>
  </div>
</template>

<script>
// 第一步引入mapState
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //选择的数字
    };
  },
  methods: {

     // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(s数组方法)
    // ...mapMutations(['JIA','JIAN']),
    //   incrementOdd() {
    // 	this.$store.dispatch('jiaOdd',this.n)
    // },
    //   incrementWait() {
    // 	this.$store.dispatch('jiaWait',this.n)
    // },
    // 借助mapActions生成对应的的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    // ...mapActions(['jiaOdd','jiaWait'])
   

  },
  computed: {

    // 通过映射借助mapState获取，第一步引入，第二步在computed中生成计算属性
    // 第一种对象写法，可以自己定义差值语法中的名字
    // ...mapState({sum:'sum',man:'man',men:'men'}),
    // 第二种数组写法
    ...mapState(["sum", "man", "men","personList"]),

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(["bigNum"]),
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>