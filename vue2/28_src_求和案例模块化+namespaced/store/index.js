// 该文件用于创建Vuex中最为核心的store
import axios from 'axios'
import { nanoid } from 'nanoid'
import Vue from 'vue'
// 引入Vuex插件
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)
const countOptions = {
    namespaced:true,
    actions :{
        jiaOdd(context,val){
            if(context.state.sum %2){
                context.commit('JIA',val)
            }
        },
        jiaWait(context,val){
            setTimeout(() => {
                context.commit('JIA',val)
            },1000)
        }
    },
    mutations:{
        JIA(state,val){
            state.sum += val
        },
        JIAN(state,val){
            state.sum -= val
        },
    },
    state:{
        sum:0,
        man:'马嗣博',
        men:'王阿倩',
    },
    getters:{
        bigNum(state){
            return state.sum*10
        }
    }
}
const personOptions = {
    namespaced:true,
    actions :{
        addPersonWang(context,val){
            if(val.name.indexOf('王') == 0){
                context.commit('PERSONADD',val)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('PERSONADD',{id:nanoid(),name:response.data})
                }
            ),
            error => {
                alert(error.message)
            }
        }
    },
    mutations:{
        PERSONADD(state,personobj){
            state.personList.unshift(personobj)
        }
    },
    state:{
        personList:[
            {id:'001',name:'小马'}
        ]
    },
    getters:{
        firstPersonName(state){
			return state.personList[0].name
		}
    }
}


// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})