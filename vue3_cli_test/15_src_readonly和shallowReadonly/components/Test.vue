<template>
  <h3>{{ person }}</h3>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>测试数字：{{ sum }}</h3>
  <h3>工作薪资:{{ job.j1.money }}K</h3>
  <button @click="name += '!'">名字+！</button>
  <button @click="age++">年龄++</button>
  <button @click="job.j1.money++">薪资++</button>
  <button @click="sum++">数字++</button>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  shallowRef,
  shallowReactive,
  readonly,
  shallowReadonly,
} from "vue";
export default {
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "马嗣博",
      age: 18,
      job: {
        j1: {
          money: 7,
        },
      },
    });
    // readonly将一个响应式的数据（即通过ref或reactive生成的数据）变成只可读的，并且是深层次的，通常应用于数据是外来的修改会影响其他模块的工作场景
    // person = readonly(person)
    // shallowReadonly将一个响应式数据变成浅层的可读，深层次的数据依旧可以发生改变
    person = shallowReadonly(person);
    sum = readonly(sum)
    return {
      // 数据
      sum,
      ...toRefs(person),
      // 方法
    };
  },
};
</script>

<style>
</style>