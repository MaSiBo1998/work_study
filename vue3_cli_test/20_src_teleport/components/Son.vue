<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Alert></Alert>
  </div>
</template>

<script>
import Alert from './Alert.vue'
export default {
  name: "Son",
  components:{Alert}
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>