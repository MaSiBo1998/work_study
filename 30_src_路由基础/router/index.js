// 此文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import XiaoWang from '../pages/XiaoWang'
import XiaoMa from '../pages/XiaoMa'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/XiaoWang',
            component:XiaoWang
        },
        {
            path:'/XiaoMa',
            component:XiaoMa
        },
    ]
})