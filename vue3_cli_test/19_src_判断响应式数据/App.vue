<template></template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isProxy,
  isRef,
  isReactive,
  isReadonly,
  readonly,
} from "vue";
export default {
  name: "App",
  setup(props) {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    let sum = ref(15);
    let carTest = readonly(car);
    // isReadonly判断是否是只读
    console.log(isReadonly(carTest));
    console.log(isReadonly(car));
    // isReactive判断是否是reactive对象
    console.log(isReactive(sum));
    // isRef判断是否是ref对象
    console.log(isRef(sum));
    // 判断是否是代理对象
    console.log(isProxy(car));
    console.log(isProxy(sum))
    return {
      sum,
      carTest,
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