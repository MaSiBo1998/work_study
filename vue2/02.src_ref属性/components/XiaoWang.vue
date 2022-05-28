<template>
  <div class="XiaoWang">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
  </div>
</template>

<script>
export default {
    name:'XiaoWang',
    data(){
        return {
            name:'王阿倩',
            age:18
        }
    },
    methods:{
        showInfo(){
            alert('我是小王')
        }
    }
}
</script>

<style>
    .XiaoWang{
        background-color: pink;
    }
</style>