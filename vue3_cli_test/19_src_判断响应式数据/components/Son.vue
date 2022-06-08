<template>
  <div class="son">
    <h3>我是Son组件，我是孙组件 {{ price }}==={{ name }}</h3>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "Son",
  setup(props) {
    //   inject取出祖组件通过provide注入的数据，实现祖孙间数据通信，vue3相比vue2中增加的组件通信方式
    let car = inject("car");

    return { ...toRefs(car) };
  },
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>