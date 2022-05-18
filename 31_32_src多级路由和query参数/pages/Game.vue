<template>
  <div>
      <ul>
          <li v-for="g in gamesLists" :key="g.id">
              <!-- 跳转路由并携带query参数,to的字符写法 -->
            <router-link
            :to="`/xiaoma/game/gamehistory?id=${g.id}&title=${g.title}&isWin=${g.isWin}`"
            >{{g.title}}
            </router-link>
          </li>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Game',
    data(){
        return {
            gamesLists:[
                {id:'001',isWin:'胜',title:'大乱斗'},
                {id:'002',isWin:'胜',title:'扭曲丛林'},
                {id:'003',isWin:'败',title:'峡谷'},
            ]
        }
    }
    
}
</script>

<style>

</style>