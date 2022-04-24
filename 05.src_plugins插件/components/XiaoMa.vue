<template>
  <div class="XiaoMa">
      <h2>{{name}}</h2>
      <h2>{{age | myTime}}</h2>
      <input type="text" v-fbind:value="name">
      <button @click="showInfo">点我提示信息</button> <br>
      <button @click="test">点我测试插件添加的hello方法</button>
  </div>
</template>

<script>
export default {
    name:'XiaoMa',
    data(){
        return {
            name:'马嗣博',
            age:'19123123'
        }
    },
    methods:{
        showInfo(){
            alert('我是小马')
        },
        test(){
            this.hello()
        }
    },
    
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>