<template>
  <div class="XiaoMa">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>

      <button @click="showInfo">点我提示信息</button>
  </div>
</template>

<script>
// 引入混合 
import {hunhe1} from '../mixin'
export default {
    name:'XiaoMa',
    data(){
        return {
            name:'马嗣博',
            age:18
        }
    },
    // methods:{
    //     showInfo(){
    //         alert('我是小马')
    //     }
    // },
    mixins:[hunhe1]
    
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>