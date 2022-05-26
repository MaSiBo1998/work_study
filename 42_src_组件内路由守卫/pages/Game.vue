<template>
  <div>
    <ul>
      <li v-for="g in gamesLists" :key="g.id">
        <!-- 跳转路由并携带params参数,to的字符写法 -->
        <!-- <router-link
            :to="`/xiaoma/game/gamehistory/${g.id}/${g.title}/${g.isWin}`"
            >{{g.title}}
            </router-link> -->
        <!-- 跳转路由并携带params参数,to的对象写法 -->
        <router-link
          :replace="true"
          :to="{
            //使用params不能使用path配置项,必须使用name
            //path:'/xiaoma/game/gamehistory',
            name: 'gamedetail',
            query: {
              id: g.id,
              title: g.title,
              isWin: g.isWin,
            },
          }"
        >
          {{ g.title }}
        </router-link>
        <button @click="pushShow(g)">push查看</button>
        <button @click="replaceShow(g)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      gamesLists: [
        { id: "001", isWin: "胜", title: "大乱斗" },
        { id: "002", isWin: "胜", title: "扭曲丛林" },
        { id: "003", isWin: "败", title: "峡谷" },
      ],
    };
  },
  methods: {
    pushShow(g) {
      console.log(this.$router);
      this.$router.push({
        name: "gamedetail",
        query: {
          id: g.id,
          title: g.title,
          isWin: g.isWin,
        },
      });
    },
    replaceShow(g) {
      this.$router.replace({
        name: "gamedetail",
        query: {
          id: g.id,
          title: g.title,
          isWin: g.isWin,
        },
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter-------组件内路由守卫,进入前触发");
    console.log('beforeRouteEnter-----to',to)
    console.log('beforeRouteEnter------from',from)
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "小马") {
        next();
      } else {
        alert("请输入正确的名字");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave---------组件内路由守卫,离开时调用");
    console.log("beforeRouteLeave----to", to);
    console.log("beforeRouteLeave-----from", from);
    next();
  },
};
</script>

<style>
</style>