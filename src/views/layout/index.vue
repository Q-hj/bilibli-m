<script setup>
import { ref, computed, reactive, inject, onMounted } from 'vue'

// import { useRoute } from 'vue-router'
// const router = useRoute()
// console.log(router.fullPath)

const { color } = inject('theme')

// vue3不再使用require来加载图片
const iconSrc = computed(() => require(`../../assets/icon/${iconName}.png`))
// 使用new URL加载图片
const getSrc = (iconName) =>
  new URL(`../../assets/icon/${iconName}.png`, import.meta.url).href

const menu = reactive([
  {
    name: '首页',
    path: 'home',
    icon: '首页',
  },
  {
    name: '动态',
    path: 'dynamic',
    icon: '风车',
  },
  {
    name: '+',
    path: 'upload',
    icon: '',
  },
  {
    name: '会员购',
    path: 'shop',
    icon: '购物袋',
  },
  {
    name: '我的',
    path: 'person',
    icon: '电视',
  },
])
</script>
<template>
  <main>
    <router-view></router-view>
  </main>

  <footer id="foot-menu">
    <router-link :to="item.path" v-for="(item, index) in menu" :key="index">
      <img
        v-if="!$route.fullPath.includes(item.path) && item.icon"
        :src="getSrc(item.icon)"
        alt=""
      />
      <img
        v-if="$route.fullPath.includes(item.path) && item.icon"
        :src="getSrc(item.icon + '(1)')"
        alt=""
      />
      <span :class="{ active: $route.fullPath.includes(item.path) }">{{
        item.name
      }}</span>
    </router-link>
  </footer>
</template>
<style scope lang="less">
main {
  height: calc(100% - 60px);
}
#foot-menu {
  width: 100%;
  height: 60px;
  padding: 5px 0;
  background-color: #fcfdff;
  position: fixed;
  z-index: 999;
  bottom: 0;
  border-top: 1px solid #f3f4f7;
  display: flex;
  justify-content: space-around;

  a {
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 8vw;
    }
    span {
      width: 100%;
      color: #646a70;
      font-size: 4vw;
      text-align: center;
      &.active {
        color: v-bind(color);
      }
    }
    // 中间按钮
    &:nth-child(3) {
      width: 48px;
      height: 48px;
      background-color: v-bind(color);
      border-radius: 18px;
      span {
        // display: block;
        font-size: 38px;
        color: #fefeff;
      }
    }
  }
}
</style>
