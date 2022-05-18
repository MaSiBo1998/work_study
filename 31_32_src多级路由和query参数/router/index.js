// 此文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import XiaoWang from '../pages/XiaoWang'
import XiaoMa from '../pages/XiaoMa'
import Game from '../pages/Game'
import Work from '../pages/Work'
import Gamehistory from '../pages/Gamehistory'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/xiaowang',
            component:XiaoWang
        },
        {
            path:'/xiaoma',
            component:XiaoMa,
            children:[
                {
                    path:'work',
                    component:Work
                },
                {
                    path:'game',
                    component:Game,
                    children:[
                        {
                            path:'gamehistory',
                            component:Gamehistory
                        }
                    ]
                },
            ]
        },
    ]
})