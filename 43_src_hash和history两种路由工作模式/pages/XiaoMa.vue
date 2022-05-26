<template>
  <div>
    <h2>小马日常</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/xiaoma/work"
            >Work</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/xiaoma/game"
            >Game</router-link
          >
        </li>
      </ul>
	  <!-- 缓存一个路由组件 -->
      <keep-alive include="Work"> 
        <router-view></router-view>
      </keep-alive>
	  <!-- 缓存多个路由组件(多个缓存路由由数组包括) -->
	  <!-- <keep-alive :include="['Work','Game']">	
		  <router-view>

		  </router-view>
	  </keep-alive> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "XiaoMa",
};
</script>

<style>
</style>