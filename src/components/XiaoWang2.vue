<template>
  <div class="XiaoWang">
      <!-- 使用transtion包裹添加动画的元素,name属性是动画名 appear 初次渲染是否添加,默认true 简写appear  :appear="true" -->
      <!-- 使用transtion-group的时候需要添加key -->
      <transition-group name="test" appear>
          <h2 v-show="isShow" key="1">{{name}}</h2>
          <h2 v-show="!isShow" key="2">{{test}}</h2>
      </transition-group>
      
      <h2>{{age}}</h2>
      <button @click="isShow =!isShow">显示/隐藏</button> <br>
      <button @click="showInfo">点我提示信息</button> <br>
      <button @click="sendXiaoWang">第二种方式,点我将子组件数据传给父组件</button> <br>
      <button @click="unbind">解绑事件</button><br>
      
  </div>
</template>

<script>
export default {
    name:'XiaoWang',
    data(){
        return {
            name:'王阿倩',
            test:'测试',
            age:18,
            isShow:true
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
    h2{
        background: skyblue;
    }
    /* 过渡实现 */
    /* 进入的起点,和离开的终点是一致的 */
    .test-enter,.test-leave-to {
        transform: translateX(-100%);
    }
    /* 进入的终点,和离开的起点是一致的 */
    .test-enter-to,.test-leave {
        transform: translateX(0px);
    }
    /* 添加过渡 */
    .hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}
</style>