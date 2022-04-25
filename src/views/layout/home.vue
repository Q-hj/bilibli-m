<script setup>
import { ref, reactive } from 'vue'

import navMenu from '@/components/navMenu/index.vue'
const b = 12
const menuList = [
  {
    text: '推荐',
    path: '',
  },
  {
    text: '直播',
    path: '',
  },
  {
    text: '热门',
    path: '',
  },
  {
    text: '动画',
    path: '',
  },
  {
    text: '影视',
    path: '',
  },
  {
    text: '共同抗疫',
    path: '',
  },
  {
    text: '音乐',
    path: '',
  },
  {
    text: '舞蹈',
    path: '',
  },
  {
    text: '游戏',
    path: '',
  },
  {
    text: '科技',
    path: '',
  },
]
  .slice(0, 6)
  .map((item) => item.text)
function getContent(type) {
  console.log(type)
  // axios(...)
}
</script>

<template>
  <div id="home">
    <header>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <input type="text" placeholder="华强劈我瓜" />
    </header>
    <navMenu :menu="menuList" @changeTab="getContent"></navMenu>
  </div>
</template>

<style lang="less" scope>
#home {
  header {
    display: flex;
  }
}
</style>
