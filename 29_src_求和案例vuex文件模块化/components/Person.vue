<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">count组件求和结果为：{{ sum }}</h3>
    <h3>列表第一个人的姓名是——{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个姓名随机的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/PERSONADD", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = ''
    },
    addPersonServer(){
        this.$store.dispatch("personAbout/addPersonServer");
    }

  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName(){
        return this.$store.getters['personAbout/firstPersonName']
    }
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

