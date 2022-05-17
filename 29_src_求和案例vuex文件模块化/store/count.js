export default{
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
