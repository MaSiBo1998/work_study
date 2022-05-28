<template>
  <ul>
    <li :style="{opacity}">小马搬砖中</li>
    <li>打代码  <input type="text"></li>
    <li>摸鱼  <input type="text"></li>
    <li>下班  <input type="text"></li>
  </ul>
</template>
<script>
export default {
  name: "Work",
  data(){
    return {
      opacity:1
    }
  },
  // 组件激活时触发的生命周期函数
  activated(){
    console.log('work组件被激活了')
   this.timer =  setInterval(() => {
      this.opacity -= 0.01
      if(this.opacity <= 0 )this.opacity = 1
    },16)
  },
  // 组件失活时触发的生命周期函数
  deactivated(){
    console.log('work组件失活了')
    clearInterval(this.timer)

  },
  mounted(){
    console.log('work组件挂载了')
  },
  beforeDestroy(){
    console.log('work组件即将被销毁')
  }
};
</script>

<style>
</style>