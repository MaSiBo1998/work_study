<template>
  <ul>
    <li>打代码  <input type="text"></li>
    <li>摸鱼  <input type="text"></li>
    <li>下班  <input type="text"></li>
  </ul>
</template>
<script>
export default {
  name: "Work",
  mounted(){
    console.log('work组件挂载了')
  },
  beforeDestroy(){
    console.log('work组件即将被销毁')
  }
};
</script>

<style>
</style>