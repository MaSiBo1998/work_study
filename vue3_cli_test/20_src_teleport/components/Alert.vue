<template>
  <button @click="isShow = true">点我弹窗</button>
  <!-- teleport传送，可以将html片段通过to传送到指定位置，从而避免深层组件嵌套造成的结构配置的复杂 -->
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="alert">
        <h3>我是弹窗</h3>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Alert",
  setup(props) {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
.alert {
  background-color: pink;
  width: 300px;
  height: 300px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mask {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>