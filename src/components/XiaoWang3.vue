<template>
  <div class="XiaoWang">
    <!-- 使用transtion包裹添加动画的元素,name属性是动画名 appear 初次渲染是否添加,默认true 简写appear  :appear="true" -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h2 v-show="isShow" key="1">{{ name }}</h2>
      <h2 v-show="!isShow" key="2">{{ test }}</h2>
    </transition-group>
    <h2>{{ age }}</h2>
    <button @click="isShow = !isShow">显示/隐藏</button> <br />
    <button @click="showInfo">点我提示信息</button> <br />
    <button @click="sendXiaoWang">第二种方式,点我将子组件数据传给父组件</button>
    <br />
    <button @click="unbind">解绑事件</button><br />
  </div>
</template>

<script>
// 引入动画库
import "animate.css";
export default {
  name: "XiaoWang",
  data() {
    return {
      name: "王阿倩",
      age: 18,
      isShow: true,
      test: "测试",
    };
  },
  methods: {
    showInfo() {
      alert("我是小王");
    }, //通过this.$emit触发自定义事件.将参数传递给父组件
    sendXiaoWang() {
      this.$emit("getxiaowang", this.name, 666, 888);
    }, //解绑自定义事件
    unbind() {
      this.$off("getxiaowang");
      // this.$off(['getxiaowang','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有的自定义事件
    },
  },
};
</script>

<style>
.XiaoWang {
  background-color: pink;
}
h2 {
  background: skyblue;
}
/* vue添加动画效果 */
/* 先创建动画 */
@keyframes xiaowangdonghua {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
/* 操作动画 */
/* vue动画进入  v-enter-active  test 是name属性值*/
.test-enter-active {
  animation: xiaowangdonghua 0.8s linear;
}
/* vue动画淡出  v-leave-active */
.test-leave-active {
  animation: xiaowangdonghua 0.8s linear reverse;
}
</style>