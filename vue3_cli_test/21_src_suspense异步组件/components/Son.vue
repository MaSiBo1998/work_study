<template>
  <div class="son">
    <h3>我是Son组件</h3>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Son",
  // 当suspense配合异步组件和动态引入，可以使用async awit 对setup进行处理
  async setup(props) {
    let sum = ref(0)
    let p = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({sum})
      }, 3000);
    })
    return await p
  }
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>