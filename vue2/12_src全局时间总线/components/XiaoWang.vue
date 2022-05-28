<template>
  <div class="XiaoWang">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button>
      <!-- 利用数据总线将数据传给兄弟组件 -->
      <button @click="sendXiaoWangName">点我将数据传送给小马组件</button>

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
        },
        sendXiaoWangName(){
            this.$bus.$emit('nihao',this.name)
        }
    },
    // 全局事件总线使用,第一步
    mounted() {
        this.$bus.$on('hello',data =>{
            console.log('我是小王组件,收到了xiaoma传来的数据',data)
        })
    },
    // 过后记得销毁$bus上绑定的自定义事件
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style>
    .XiaoWang{
        background-color: pink;
    }
</style>