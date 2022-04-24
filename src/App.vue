<template>
    <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @headerAdd="addTodo"></MyHeader>
      <MyTodo 
        :todos="todos" 
        
      ></MyTodo>
      <MyFooter
      :todos="todos"
      @footerTodoAll="checkTodoAll"
      @footerpDeleteAllTodo="appDeleteAllTodo" 
      ></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
// 第一步先引入组件
import MyHeader from './components/MyHeader.vue'
import MyTodo from './components/MyTodo.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    // 注册组件
    name:'App',
    data(){
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || [],
            value1:'',
        }
    },
    components:{MyHeader,MyTodo,MyFooter},
    mounted(){
      this.$bus.$on('changeCheck',(id)=> {
        this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
      })
      }),
      // 全局事件总线实现
      // this.$bus.$on('deleteTodo',(id)=>{
      //   this.todos =   this.todos.filter((todo)=> todo.id !== id)
      // })
      // pubsub 消息订阅与发布实现
      // 谁接收消息,即谁订阅消息
      // 消息订阅
      this.pubId= pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    methods:{
        // 添加一个活动
        // 实现子组件向父组件传值
        // 第一步:父组件创建一个函数,然后通过父组件向子组件传值的方式将该函数传给子组件,然后子组件通过调用该函数将参数传递给父组件,子组件调用的函数位于父组件,子组件只是将参数传递过来执行
        addTodo(todoObj){
            this.todos.unshift(todoObj)
        },
        // 改变任务的选中or取消状态 ,然后需要从app组件传给Todo组件,然后再传给Item组件
        // changeCheck(id){
        //     this.todos.forEach((todo)=>{
				// 	if(todo.id === id) todo.done = !todo.done
				// })
        // },
        //删除一个todo任务
        deleteTodo(_,id){
          this.todos =   this.todos.filter((todo)=> todo.id !== id)
        },
        // 全选or全不选
        checkTodoAll(val){
            this.todos.forEach((todo)=>{
					todo.done = val
				})
        },
        // 清楚所有已完成
        appDeleteAllTodo(){
            this.todos = this.todos.filter((todo)=>{return !todo.done})
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(val){
                localStorage.setItem('todos',JSON.stringify(val))
            }
        }
    },
    // 全局事件总线绑定,消息订阅绑定,在销毁前记得解绑
    beforeDestroy() {
      // 全局事件总线解绑
      this.$bus.$off('checkTodo')
      // 消息订阅解绑
      pubsub.unsubscribe(this.pubId)
    },
    

}
</script>

<style scoped>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>