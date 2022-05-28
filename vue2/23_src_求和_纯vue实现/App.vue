<template>
  <div>
    <Count></Count>
  </div>
</template>
<script>
import Count from "./components/Count.vue";
export default {
  // 注册组件
  name: "App",
  components: { Count },
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>
