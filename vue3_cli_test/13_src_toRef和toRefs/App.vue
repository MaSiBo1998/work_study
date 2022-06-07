<template>
<button @click="isShow = !isShow">切换/隐藏
</button>
<Test v-if="isShow"></Test>
</template>

<script>
// 引入ref函数
import Test from './components/Test'
import {ref,reactive} from 'vue'
export default {
  name: "App",
  components:{Test},
  setup(props) {
    let isShow = ref(true)
    return {
      isShow
    }
  }
};
</script>
