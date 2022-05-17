<template>
  <div>
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>
<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  // 注册组件
  name: "App",
  components: { Count,Person },
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>
