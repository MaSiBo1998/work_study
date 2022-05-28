<template>
  <div>
		<h2>小马日常</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/xiaoma/work">Work</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/xiaoma/game">Game</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
    name:'XiaoMa',
    
}
</script>

<style>

</style>