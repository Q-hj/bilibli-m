<script setup>
	import { ref, provide } from "vue";
	const themeColor = ref("#ff53a0");
	const changeTheme = (color) => (themeColor.value = color);
	provide("theme", {
		color: themeColor,
		changeTheme,
	});
</script>

<template>
	<!-- <router-view v-slot="{ Component }">
		
	<transition name="fade" mode="out-in">
		<component :is="Component" :key="$route.path" />
	</transition>
	-->
	<router-view> </router-view>
</template>

<style>
	/* fade 模式 name="fade" mode="out-in" */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
