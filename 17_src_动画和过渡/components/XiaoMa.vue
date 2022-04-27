<template>
  <div class="XiaoMa">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
      <button @click="firstSend">第一种方式,点我给父组件传递数据</button>
  </div>
</template>

<script>
export default {
    name:'XiaoMa',
    data(){
        return {
            name:'马嗣博',
            age:19
        }
    },
    props:['getXiaoMaName'],
    methods:{
        showInfo(){
            alert('我是小马')
        },
        // 子传父第一种通过props传值
        firstSend(){
            this.getXiaoMaName(this.name)
        }
    },
    
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>