<template>
  <ul>
    <!-- <li>战斗地点:{{ $route.params.title }}</li>
    <li>战斗结果:{{ $route.params.isWin }}</li> -->
    <li>战斗序号:{{ id }}</li>
    <li>战斗地点:{{ title }}</li>
    <li>战斗结果:{{ isWin }}</li>
  </ul>
</template>

<script>
export default {
  name: "Gamehistory",
  props:['id','title','isWin'],
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>