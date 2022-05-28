// 此文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import XiaoWang from '../pages/XiaoWang'
import XiaoMa from '../pages/XiaoMa'
import Game from '../pages/Game'
import Work from '../pages/Work'
import Gamehistory from '../pages/Gamehistory'
// 创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes:[
        {  
            name:'aq',
            path:'/xiaowang',
            component:XiaoWang,
            meta:{
                title:'小王'
            }
        },
        {
            path:'/xiaoma',
            component:XiaoMa,
            meta:{
                title:'小马',
                isAuth:true
            },
            beforeEnter:(to, from,next) => {
                console.log('独享路由守卫')
                if(to.meta.isAuth){
                            if(localStorage.getItem('name') === '小马'){
                                next()
                            }else{
                                alert('请输入正确的名字')
                            }
                        }else{
                            next()
                        }
            },
            children:[
                {
                    path:'work',
                    component:Work,
                    meta:{
                        title:'工作',
                        isAuth:true
                    }
                },
                {
                    path:'game',
                    component:Game,
                    meta:{
                        title:'游戏',
                        isAuth:true
                    },
                    children:[
                        {
                            name:'gamedetail',
                            path:'gamehistory',
                            component:Gamehistory,
                            meta:{
                                title:'战绩详情',
                                isAuth:true
                            },
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    isWin:$route.query.isWin
                                }
                            },
                            
                            
                        }
                    ]
                },
            ]
        },
    ]
})
// // 全局前置路由守卫
// router.beforeEach((to,from,next) => {
//     console.log('前置路由守卫', to ,from)
//     if(to.meta.isAuth){
//         if(localStorage.getItem('name') === '小马'){
//             next()
//         }else{
//             alert('请输入正确的名字')
//         }
//     }else{
//         next()
//     }
// })
// // 全局后置路由守卫
// router.afterEach((to,from)=> {
//     console.log('全局后置路由守卫',to,from)
//     document.title = to.meta.title || '小马和小王'
// })
export default router