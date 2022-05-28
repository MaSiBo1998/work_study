import axios from 'axios'
import { nanoid } from 'nanoid'
export default{
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