<template>
  <h3>{{ person }}</h3>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>工作薪资:{{ job.j1.money }}K</h3>
  <button @click="name += '!'">名字+！</button>
  <button @click="age++">年龄++</button>
  <button @click="job.j1.money++">薪资++</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "马嗣博",
      age: 18,
      job: {
        j1: {
          money: 7,
        },
      },
    });

    return {
      // 数据
      person,
      //   toRef创建一个ref对象，它的value指向对象中的某个属性，在这里的value是引用对象实际的value
      //   name: toRef(person, "name"),
      //   age:toRef(person,'age')
      // toRefs可以将一个对象第一层所有的属性都创建成ref对象
      ...toRefs(person),
      // 方法
    };
  },
};
</script>

<style>
</style>