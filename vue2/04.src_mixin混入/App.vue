<template>
   <div>
    <img src="./assets/logo.png" alt="">
    <XiaoMa name="马嗣博" sex="男" ></XiaoMa>
    <XiaoWang ref="xiaowang"></XiaoWang>
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
    }
}
</script>
