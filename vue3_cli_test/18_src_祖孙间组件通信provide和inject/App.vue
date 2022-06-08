<template>
  <div class="app">
    <h3>我是App组件，我是祖组件 {{ name }}==={{ price }}</h3>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: { Child },
  setup(props) {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    // 给自己的后代组件注入数据，第一个参数是数据名，第二个是数据
    provide("car", car);
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>