// 入口文件
// 第一步,先引入 vue 和组件
import Vue from 'vue'
import App from './App.vue'
// 完整引入element UI 
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)
//按需引入
import { Button,Row,DatePicker } from 'element-ui';
//应用ElementUI
// Vue.use(ElementUI);
Vue.component('xiaoma-button', Button);
Vue.component('xiaoma-row', Row);
Vue.component('xiaoma-date-picker', DatePicker);

// 创建vm实例
new Vue({
    el:"#app",
    render: h => h(App),
})