<template>
<transition appear name="test">
  <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="checkbox(todo.id)"/> 
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            type="text"
            v-show="todo.isEdit"
            :value="todo.title"
            @blur="handlerBlur(todo,$event)"
            ref="inputTitle">
          </label>
          <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
          <button class="btn btn-edit" v-show="!todo.isEdit" @click="editItem(todo)">编辑</button>
        </li>
        </transition>
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
        },
        // 修改选中项
        editItem(todo){
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }
          this.$nextTick(function(){
				  	this.$refs.inputTitle.focus()
				  })
        },
        // 焦点事件
        handlerBlur(todo,e){
          todo.isEdit = false
				if(!e.target.value.trim()) return alert('输入不能为空！')
				this.$bus.$emit('updateTodo',todo.id,e.target.value)
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
@keyframes xiaowangdonghua {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0px);
        }
    }
    /* 操作动画 */
    /* vue动画进入  v-enter-active  test 是name属性值*/
    .test-enter-active {
        animation: xiaowangdonghua 0.8s linear;
    }
    /* vue动画淡出  v-leave-active */
    .test-leave-active {
        animation: xiaowangdonghua 0.8s linear reverse;
    }
</style>