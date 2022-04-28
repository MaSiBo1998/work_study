<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchVal"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data(){
      return {
          searchVal:'',
      }
  },
  methods:{
      searchUsers(){
        //   发送请求前先更新info数据 
        this.$bus.$emit('getData',{isLoading:true,errMsg:'',userList:[],isFirst:false})
          axios.get(`https://api.github.com/search/users?q=${this.searchVal}`).then(
              response => {
                  console.log('获取请求成功')
                    this.$bus.$emit('getData',{isLoading:false,errMsg:'',userList:response.data.items})
              },
              error => {
                  console.log('获取请求失败')
                  this.$bus.$emit('getData',{isLoading:false,errMsg:error.message,usersList:[]})
              }
          )
      }
  },
};
</script>

<style scoped>
</style>