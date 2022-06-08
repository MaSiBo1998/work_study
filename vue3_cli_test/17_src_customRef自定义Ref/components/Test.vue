<template>
  <h3>{{ person }}</h3>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>测试数字：{{ sum }}</h3>
  <h3>工作薪资:{{ job.j1.money }}K</h3>
  <h4>车辆信息：{{ person.car }}</h4>
  <button @click="name += '!'">名字+！</button>
  <button @click="age++">年龄++</button>
  <button @click="job.j1.money++">薪资++</button>
  <button @click="sum++">数字++</button>
  <br />
  <button @click="showPerson">展示原始数据</button>
  <button @click="addCar">买一辆车</button>
  <button v-if="person.car" @click="changePrice">改变车的价格</button>
  <button v-if="person.car" @click="person.car.name += '~'">
    改变车的名字
  </button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
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
    function addCar() {
      let car = { name: "奔驰C", price: 36 };
      // markRaw标记一个对象使其永远不会成为响应式对象
      person.car = markRaw(car);
    }
    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }
    function showPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }
    return {
      // 数据
      sum,

      person,
      // toRefs展开的属性中，car还没有添加，所以会报错，因此将person先交出去，避免报错
      ...toRefs(person),
      // 方法
      addCar,
      changePrice,
      showPerson,
    };
  },
};
</script>

<style>
</style>