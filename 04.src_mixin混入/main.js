// 入口文件
// 第一步,先引入 vue 和组件
import Vue from 'vue'
import App from './App.vue'
// 全局注册混入
// 第一步 引入混合文件
import {hunhe1,hunhe2} from './mixin'
// 第二步注册混合
Vue.mixin(hunhe1)
Vue.mixin(hunhe2)
// 创建vm实例
new Vue({
    el:"#app",

    render: h => h(App)
})