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
    // 没有模块化之前，所有的mutation，actions都在store里面，没有分类
    // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    // 模块化之后，count组件需要在sotre对应的count分类countAbout里面找
    ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JINA'})
  },
  computed: {
    // 没有模块化前，所有的state组件的state都在store.state下，所有的getters都在store.getters
    // ...mapState(["sum", "man", "men","personList"]),

    // ...mapGetters(["bigNum"]),
    // 模块化后
    ...mapState('countAbout',['sum','man','men']),
    ...mapState('personAbout',['personList']),
    ...mapGetters('countAbout',['bigNum'])
  },
  mounted() {
    console.log("Count", this.$store);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>