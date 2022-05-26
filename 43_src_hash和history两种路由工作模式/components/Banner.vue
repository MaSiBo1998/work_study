<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back()">后退</button>
      <button @click="forWord()">前进</button>
      <button @click="go()">go测试</button>
      <button @click="save()">存储姓名</button>
      <button @click="del()">删除姓名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forWord() {
      this.$router.forward();
    },
    go() {
      this.$router.go(2);
    },
    save() {
      localStorage.setItem("name", "小马");
    },
    del(){
      localStorage.removeItem('name')
    }
  },
};
</script>

<style>
</style>