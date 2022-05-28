<template>
    <div>
        <button @click="getStudentInfo">点击获取学生信息</button> <br>
        <button @click="getCarsInfo">点击获取汽车信息</button>
    </div>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
    // 注册组件
    name:'App',
    methods:{
        getStudentInfo(){
            axios.get('http://localhost:8080/test1/students').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
        },
        getCarsInfo(){
            axios.get('http://localhost:8080/test2/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
        }

    }
}
</script>
