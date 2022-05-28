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
            name:'aq',
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
                            // 使用params传递参数path必须配置name
                            name:'gamedetail',
                            // 使用params传递参数path必须配置占位符
                            // path:'gamehistory/:id/:title/:isWin',
                            // component:Gamehistory
                            path:'gamehistory',
                            component:Gamehistory,
                            //props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Gamehistory组件
                            // props:{a:1,b:'hello'}
                            // props第二种写法,props值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件(只能收到params参数)
                            // props:true
                            // props 第三种写法,值为函数(query和params都能接收)
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    isWin:$route.query.isWin
                                }
                            }
                            
                        }
                    ]
                },
            ]
        },
    ]
})