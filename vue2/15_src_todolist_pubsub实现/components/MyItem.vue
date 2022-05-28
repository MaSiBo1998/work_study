<template>
  <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="checkbox(todo.id)"/> 
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
        </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    data() {
        return {
            
        }
    },
    methods:{
        // 选中,或取消
        checkbox(id){
            // 通知App组件将对应的todo对象的done值取反
            // this.changeCheck(id)
            this.$bus.$emit('changeCheck',id)
            
        },
        //删除选中项
        deleteItem(id){
            console.log(id)
            if(confirm('确定删除么?')){
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo',id)
                // 消息发布
                pubsub.publish('deleteTodo',id)
            }
            // 将获得的id交给app组件进行删除操作
        }
    },
    // 接收到从app组件传递到todo组件,然后传进来的组件
    props:['todo']
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
    background-color: orange;
}
li:hover button  {
    display: block;
}
</style>