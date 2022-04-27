<template>
  <div class="dynamic flex-cc">
    <p>{{ props.msg }}功能暂未开放</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const { color } = inject('theme')
const props = defineProps({
  msg: String,
})
</script>

<style lang="less" scope>
.dynamic {
  height: calc(100vh - 70px);
  p {
    font-size: 8vw;
    color: v-bind(color);
  }
}
</style>
