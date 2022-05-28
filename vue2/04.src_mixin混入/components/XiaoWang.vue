<template>
  <div class="XiaoWang">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
  </div>
</template>

<script>
// 第二步引入混合
// import {hunhe1,hunhe2} from '../mixin'
export default {
    name:'XiaoWang',
    data(){
        return {
            name:'王阿倩',
            age:18
        }
    },
    // methods:{
    //     showInfo(){
    //         alert('我是小王')
    //     }
    // },
    //第三步注册混合
    // mixins:[hunhe1,hunhe2] 
}
</script>

<style>
    .XiaoWang{
        background-color: pink;
    }
</style>