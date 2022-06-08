<template>
  <input type="text" v-model="sum" />
  <h3>{{ sum }}</h3>
</template>

<script>
// 引入ref函数
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup(props) {
    let sum = myRef("我是小马", 1000);
    function myRef(value, delay) {
      let timer;
      // 第一个return是将myRef这个自定义ref的处理结果返回出去
      return customRef((track, trigger) => {
        // 第二个return 是将customRef的处理返回
        return {
          get() {
            console.log(`有人从myRef中读取了数据，我将${value}给它了`);
            // 通知vue去追踪value的变化
            track();
            return value;
          },
          set(newValue) {
            console.log(`有人将myRef中的数据修改为了${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              // 通知vue去重新解析模板
              trigger();
            }, delay);
          },
        };
      });
    }
    return {
      sum,
    };
  },
};
</script>
