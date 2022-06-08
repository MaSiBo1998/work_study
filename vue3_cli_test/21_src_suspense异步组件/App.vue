<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- suspense里面默认有两个插槽，default插槽时真正想要展示的组件内容，fallback插槽时当组件没有解析完成时所提供的一种过度展示 -->
      <template v-slot:default>
        <Son></Son>
      </template>
      <template v-slot:fallback>
        <h3>
          请稍等，正在加载。。。
        </h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//import Son from "./components/Son.vue";//静态引入组件，没有延迟，所有的组件都解析完之后才会同时加载出现
// 异步引入,只是用异步引入时，会造成用户有时候不知道有的组件没加载完成，可以通过suspense来，再添加一个加载备用提醒
import {defineAsyncComponent} from 'vue'
const Son= defineAsyncComponent(() => import('./components/Son.vue'))
export default {
  name: "App",
  components: { Son },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>