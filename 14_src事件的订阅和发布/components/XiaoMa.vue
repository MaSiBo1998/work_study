<template>
  <div class="XiaoMa">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
      <!-- <button @click="sendXiaomaName">点我给小王组件传递数据</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
        // sendXiaomaName(){
        //     this.$bus.$emit('hello',this.name)
        // }
        hello2(msgName,name){
            console.log('我收到了小wang的消息',msgName,name)
        }
    },
    mounted(){
        // this.$bus.$on('nihao',(data) => {
        //     console.log('我收到了小wang传递的数据',data)
        // })
        // this.pubId = pubsub.subscribe('hello',(msgName,data)=> {
        //     console.log(msgName,data)
        // })
        this.pubId = pubsub.subscribe('hello2',this.hello2)
    },
    beforeDestroy(){
        // this.$bus.$off('nihao')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style>
    .XiaoMa{
        background-color: gray;
    }
</style>