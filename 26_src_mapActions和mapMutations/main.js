// 入口文件
// 第一步,先引入 vue 和组件
import Vue from 'vue'
import App from './App.vue'
// 引入Vuex store
import store from './store/index'
// 创建vm实例
new Vue({
    el:"#app",
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    },
})