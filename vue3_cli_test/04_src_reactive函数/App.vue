<template>
  <!-- Vue3组件中的模板结构可以没有跟标签 -->
  <!-- 在vue2中的配置可以读取到vue3中的数据和方法,但是在vue3中不能读取到vue2中的数据和方法,vue2和vue3同时定义一个数据时,以vue3为准 -->
  <h3>{{ person.name }}</h3>
  <h3>{{ person.age }}</h3>
  <h3>{{ person.sex }}</h3>
  <h3>工作类型:{{ person.job.type }}</h3>
  <h3>工作薪资:{{ person.job.money }}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeXiaowang">变成小王</button>
</template>

<script>
// 引入ref函数
import { ref, reactive } from "vue";
export default {
  name: "App",

  setup() {
    // 相当于data中的数据
    // 通过ref实现数据响应式,ref底层还是get set 通过数据劫持实现数据响应式
    let person = reactive({
      name: "马嗣博",
      age: 18,
      sex: "男",
      job: {
        type: "前端工程师",
        money: "30k",
      },
      hobby:['游戏','吸烟','喝酒']
    });

    // 方法,相当于methods
    function changeXiaowang() {
      person.name = "小王";
      person.age = 18;
      person.sex = "女";
      person.hobby[0] = '美甲'
      person.hobby[1] = '螺蛳粉'
      console.log(person.job);
    }
    return {
      // 数据
      person,
      // 方法
      changeXiaowang,
    };
  },
};
</script>
