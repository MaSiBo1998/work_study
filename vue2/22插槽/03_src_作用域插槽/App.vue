<template>
  <div class="container">
    <Category title="美食"> 
        <template scope="masibo" slot="center">
            <ul>
                <li v-for="(g,index) in masibo.games" :key="index">{{g}}</li>
            </ul>
        </template>
    </Category>
    <Category title="美食"> 
        <template scope="{games}" slot="center">
            <ol>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ol>
        </template>
         
            <h3 slot="footer">具名插槽和作用域插槽测试</h3>
        
    </Category>
    <Category title="美食"> 
        <template slot-scope="{games}" slot="center">
            
                <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
            
        </template>
    </Category>
  </div>
</template>
<script>
import Category from "./components/Category.vue";
export default {
  // 注册组件
  name: "App",
  components: { Category },
  data() {
    return {};
  },
};
</script>
<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
