<template>
  <!-- Vue3组件中的模板结构可以没有跟标签 -->
  <!-- 在vue2中的配置可以读取到vue3中的数据和方法,但是在vue3中不能读取到vue2中的数据和方法,vue2和vue3同时定义一个数据时,以vue3为准 -->
<h3>{{name}}</h3>
<h3>{{age}}</h3>
<h3>{{sex}}</h3>
<h3>{{a}}</h3>
<button @click="sayHello">vue3你好</button>
<br>
<button @click="test1">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
<br>
<button @click="sayNihao">vue2你好 </button>
<br>
<button @click="test2">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  // vue2中的配置
  data(){
    return {
      sex:'男',
      a:200
    }
  },
  methods:{
    sayNihao(){
      console.log(this.sex)
      

    },
    test2 (){
      console.log(this.age)
      console.log(this.sayHello)
      console.log(this.name)
      // 
    }
  },
  setup() {
    // 相当于data中的数据
    let name = "马嗣博";
    let age = 18;
    let a = 300;
    // 方法,相当于methods
    function sayHello() {
      alert(`我是${name},今年${age}岁`);

    }
    function test1 (){
      console.log(this.sex)
      console.log(this.sayNihao)
    }
    return {
      name,
      age,
      a,
      sayHello,
      test1
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
