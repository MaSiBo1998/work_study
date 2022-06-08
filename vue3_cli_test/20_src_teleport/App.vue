<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import { toRefs} from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>