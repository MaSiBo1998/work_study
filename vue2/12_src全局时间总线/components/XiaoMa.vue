<template>
  <div class="XiaoMa">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
      <button @click="sendXiaomaName">点我给小王组件传递数据</button>
  </div>
</template>

<script>
export default {
    name:'XiaoMa',
    data(){
        return {
            name:'马嗣博',
            age:18
        }
    },
    methods:{
        showInfo(){
            alert('我是小马')
        },
        sendXiaomaName(){
            this.$bus.$emit('hello',this.name)
        }
    },
    mounted(){
        this.$bus.$on('nihao',(data) => {
            console.log('我收到了小wang传递的数据',data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('nihao')
    }
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>