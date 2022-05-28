<template>
  <ul>
    <li>战斗地点:{{ $route.params.title }}</li>
    <li>战斗结果:{{ $route.params.isWin }}</li>
  </ul>
</template>

<script>
export default {
  naem: "Gamehistory",
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