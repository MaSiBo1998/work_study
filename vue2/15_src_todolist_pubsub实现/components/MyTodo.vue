<template>
    <ul class="todo-main">
        <MyItem 
          v-for="todoObj in todos" 
          :key="todoObj.id " 
          :todo="todoObj"
        ></MyItem>
      </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  data(){
    return {

    }
  },
  methods:{

  },
  components:{MyItem},
  // 子组件通过props接收父组件传递的参数
   props:['todos']
}
</script>

<style scoped>
  .todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>