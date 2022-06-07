<template>
  <h3>{{ person }}</h3>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
    <h3>测试数字：{{ sum}}</h3>
  <h3>工作薪资:{{ job.j1.money }}K</h3>
  <button @click="name += '!'">名字+！</button>
  <button @click="age++">年龄++</button>
  <button @click="job.j1.money++">薪资++</button>
  <button @click="sum.x++">数字++</button>
  <button @click="sum = {x:123}">shallowRef一般传入的对象不修改它的属性，只对对象进行替换操作</button>
</template>

<script>
import {ref, reactive,  toRefs,shallowRef,shallowReactive } from "vue";
export default {
  setup() {
    //   shallowReactive只对第一层数据做响应式处理，深层次数据不做处理

    //let person = shallowReactive({
        let person = reactive({
      name: "马嗣博",
      age: 18,
      job: {
        j1: {
          money: 7,
        },
      },
    });
    //let sum = ref(18)
    // shallowRef当传入数据为基本数据类型时，和ref一样，实现响应式数据

//let sum = shallowRef(18)
// shallowRef传入的数据为对象时，不再对传入的数据进行响应式处理，此时改变里面的数据不会发生响应式变化
let sum = shallowRef({
    x:18
})
    return {
      // 数据
      sum,
      person,
      ...toRefs(person),
      // 方法
    };
  },
};
</script>

<style>
</style>