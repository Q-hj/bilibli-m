<script setup>
	import { ref } from "vue";
	import useMainStore from "../store/index";
	defineProps({
		msg: String,
	});
	const store = useMainStore();
</script>

<template>
	<main>
		<h2>count:{{ store.count }}</h2>
		<el-button type="primary" @click="store.count++">add</el-button>
	</main>
</template>

<style scoped>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
