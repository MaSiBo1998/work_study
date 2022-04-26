// 入口文件
// 第一步,先引入 vue 和组件
import Vue from 'vue'
import App from './App.vue'
// 创建vm实例
new Vue({
    el:"#app",
    render: h => h(App),
    // 创建全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})