<template>
  <div class="XiaoWang">
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="showInfo">点我提示信息</button> <br>
      <button @click="sendXiaoWang">第二种方式,点我将子组件数据传给父组件</button> <br>
      <button @click="unbind">解绑事件</button>
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
        },//通过this.$emit触发自定义事件.将参数传递给父组件
        sendXiaoWang(){
            this.$emit('getxiaowang',this.name,666,888)
        },//解绑自定义事件
        unbind(){
            this.$off('getxiaowang')
            // this.$off(['getxiaowang','demo']) //解绑多个自定义事件
				// this.$off() //解绑所有的自定义事件
        }
        
    }
}
</script>

<style>
    .XiaoWang{
        background-color: pink;
    }
</style>