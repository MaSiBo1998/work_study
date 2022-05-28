// 入口文件
// 第一步,先引入 vue 和组件
import Vue from 'vue'
import App from './App.vue'
// 引入Vuex store
import store from './store/index'
// 引入Vue
// 引入 vue-router插件库
import VueRouter from 'vue-router'
// 引入自己写好的路由
import router from './router/index.js'
Vue.use(VueRouter)
// 创建vm实例
new Vue({
    el:"#app",
    render: h => h(App),
    store,
    router:router,
    beforeCreate(){
        Vue.prototype.$bus = this
    },
})