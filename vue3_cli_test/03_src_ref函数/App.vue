<template>
  <!-- Vue3组件中的模板结构可以没有跟标签 -->
  <!-- 在vue2中的配置可以读取到vue3中的数据和方法,但是在vue3中不能读取到vue2中的数据和方法,vue2和vue3同时定义一个数据时,以vue3为准 -->
<h3>{{name}}</h3>
<h3>{{age}}</h3>
<h3>{{sex}}</h3>
<h3>工作类型:{{job.type}}</h3>
<h3>工作薪资:{{job.money}}</h3>
<button @click="changeXiaowang">变成小王</button>

</template>

<script>
// 引入ref函数
import {ref} from 'vue'
export default {
  name: "App",

  setup() {
    // 相当于data中的数据
    // 通过ref实现数据响应式,ref底层还是get set 通过数据劫持实现数据响应式
    let name = ref("马嗣博");
    let age = ref(18);
    let sex = ref('男');
    let job = ref({
      type:'前端工程师',
      money:'30k'
    })
    // 方法,相当于methods
    function changeXiaowang() {
      name.value = '小王'
      age.value = 18
      sex.value = '女'
      console.log(name)
      console.log(job)
    }

    return {
      // 数据
      name,
      age,
      sex,
      job,
      // 方法
      changeXiaowang,
    }
  },
};
</script>


