import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//创建应用实例对象--app(类似于vue2中的vm,但app比vm更轻)
const app = createApp(App)
app.mount('#app')
// vue 2 创建模式
// import Vue from 'vue'

// new Vue({
//     el:'#app',
//     render:h => h(App)
// })