<template>
<div>
    <h1>人员列表</h1>
    <h3 style="color:red">count组件求和结果为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
</div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('PERSONADD',personObj)
            this.name = ''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    }
}
</script>

