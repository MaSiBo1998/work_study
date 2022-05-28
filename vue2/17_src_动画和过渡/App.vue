<template>
   <div>
    <img src="./assets/logo.png" alt="">
    <!-- 子组件传递数据给父组件 -->
    <!-- 第一种方式:通过props实现 -->
    <XiaoMa :getXiaoMaName="getXiaoMaName"></XiaoMa>
    <!-- 第二种通过自定义事件给父组件传值 -->
    <!-- 第一种写法 -->
    <!-- <XiaoWang @getxiaowang="getXiaoWangName"></XiaoWang> -->
    <!-- 第二种写法,使用ref -->
    <!-- 给子组件绑定ref,然后通过this.refs.xiaowang 找到子组件实例,然后通过$on给组件实例绑定自定义事件 -->
    <!-- 如果给子组件判定全局事件,可以使用@click.native实现 -->
    <XiaoWang ref="xiaowang"></XiaoWang>
    <XiaoWang2></XiaoWang2>
    <XiaoWang3></XiaoWang3>
   </div>
</template>

<script>
// 第一步先引入组件
import XiaoMa from './components/XiaoMa.vue'
import XiaoWang from './components/XiaoWang.vue'
import XiaoWang2 from './components/XiaoWang2.vue'
import XiaoWang3 from './components/XiaoWang3.vue'

export default {
    // 注册组件
    name:'App',
    components:{
        XiaoMa,
        XiaoWang,
        XiaoWang2,
        XiaoWang3
    },
    methods:{
        // 获取子组件传递过来的组件数据
        getXiaoMaName(name){
            console.log("父组件收到了子组件传来的名字:",name)
        },
        getXiaoWangName(name,...params){
            console.log("父组件收到了子组件传来的名字:",name,params)
        }
    },
    mounted(){
        this.$refs.xiaowang.$on('getxiaowang',this.getXiaoWangName)
        // this.$refs.xiaowang.$once('getxiaowang',this.getXiaoWangName)  绑定一次性事件
    }
}
</script>
