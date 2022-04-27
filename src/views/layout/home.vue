<script setup>
import { ref, inject } from 'vue'
import navMenu from '@/components/navMenu/index.vue'
import videoList from '@/components/videoList/index.vue'

const { color } = inject('theme')
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
  .slice(0, 5)
  .map((item) => item.text)
function getContent(type) {
  console.log(type)
  // axios(...)
}
const avatarPath = (name) => {
  name += name == 'avatar' ? '.jpg' : '.png'
  return new URL(`../../assets/image/${name}`, import.meta.url).href
}
</script>

<template>
  <div id="home">
    <header>
      <el-avatar :src="avatarPath('avatar')"></el-avatar>
      <input type="text" placeholder="华强劈我瓜" />
      <p>bilibili</p>
    </header>
    <navMenu :menu="menuList" @changeTab="getContent"></navMenu>
    <main>
      <img :src="avatarPath('code')" alt="" />
      <videoList></videoList>
    </main>
  </div>
</template>

<style lang="less" scope>
#home {
  header {
    display: flex;
    align-items: center;
    .el-avatar {
      margin: 10px;
      border: 1px solid v-bind(color);
    }
    input {
      width: 50vw;
      height: 30px;
      border-radius: 15px;
      background-color: #f2f3f5 !important;
      padding-left: 20px;
    }
    p {
      margin-left: 5vw;
      font-size: 7vw;
      color: v-bind(color);
    }
  }
  main {
    padding: 10px;
    background-color: #f2f3f5;
    max-height: calc(100vh - 150px);
    overflow: scroll;

    // > img {
    //   margin-bottom: 10px;
    // }
  }
}
::-webkit-scrollbar {
  width: 0;
}
</style>
