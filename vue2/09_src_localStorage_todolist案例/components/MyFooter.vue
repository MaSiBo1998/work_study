<template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneTodo}}</span> / 全部{{allTodo}}
        </span>
        <button class="btn btn-danger" @click="deleteAllTodo">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:['todos','checkTodoAll','appDeleteAllTodo'],
    computed:{
        allTodo(){
            return this.todos.length
        },
        doneTodo(){
            // 遍历实现
            // let i = 0
            // this.todos.forEach((todo)=>{
            //     if(todo.done) i++
            // })
            // return i
            //此处使用reduce方法做条件统计
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//简写
				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)

        },
        isAll: {
            get(){
                return this.doneTodo === this.allTodo && this.allTodo >0
            },
            // 全选按钮改变时调用
            set(val){
                this.checkTodoAll(val)
            }

        }
    },
    methods:{
        // 清楚所有已完成
        deleteAllTodo(){
            this.appDeleteAllTodo()
        }
    }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>