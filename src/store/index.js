// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex插件
import Vuex from 'vuex'
// 使用vuex插件
Vue.use(Vuex)

// 准备actions(用于响应组件中的动作)
const actions = {
    // jia(context,val){
    //     context.commit('JIA',val)
    // },
    // jian(context,val){
    //     context.commit('JIAN',val)
    // },
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
}

// 准备mutations(用于操作数据state)
const mutations = {
    JIA(state,val){
        state.sum += val
    },
    JIAN(state,val){
        state.sum -= val
    }
}

// 准备state(用于存储数据)
const state = {
    sum:0,
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})