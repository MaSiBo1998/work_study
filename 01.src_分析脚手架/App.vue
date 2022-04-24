<template>
   <div>
       <img src="./assets/logo.png" alt="">
    <XiaoMa></XiaoMa>
   <XiaoWang></XiaoWang>
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
    }
}
</script>
