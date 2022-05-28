<template>
   <div>
    <img src="./assets/logo.png" alt="">
    <XiaoMa></XiaoMa>
    <XiaoWang ref="xiaowang"></XiaoWang>
    <h2 ref="title">你好</h2>
    <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
   </div>
</template>

<script>
// 第一步先引入组件
import XiaoMa from './components/XiaoMa.vue'
import XiaoWang from './components/XiaoWang.vue'
export default {
    // 注册组件
    name:'App',
    components:{
        XiaoMa,
        XiaoWang
    },
    methods:{
        showDom(){
            //  ref 在DOM元素上,输出的是DOM元素,在组件上输出的是组件实例   
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
            console.log(this.$refs.xiaowang)

        }
    }
}
</script>
