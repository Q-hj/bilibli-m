<script setup>
import { ref, onMounted, inject } from 'vue'
const { changeTheme } = inject('theme')
const avatarURL = new URL(`../../assets/image/avatar.jpg`, import.meta.url).href
const list = [
  {
    text: '动态',
    num: 4,
    path: 'person',
  },
  {
    text: '关注',
    num: 55,
    path: 'person',
  },
  {
    text: '粉丝',
    num: 8,
    path: 'person',
  },
]
const numList = ref([0, 0, 0])

const themeList = [
  {
    name: '少女粉',
    color: '#fe6c99',
  },
  {
    name: '炫酷黑',
    color: '#131313',
  },
  {
    name: '宝石蓝',
    color: '#1398fd',
  },
  {
    name: '咸蛋黄',
    color: '#febd03',
  },
  {
    name: '早苗绿',
    color: '#81c441',
  },
  {
    name: '紫罗兰',
    color: '#f473f8',
  },
]
const current = ref(themeList[0].color)
function handleChangeTheme(color) {
  changeTheme(color)
  current.value = color
}
onMounted(() => {
  const delay = 1000 //数字加载变化时长
  for (let index = 0; index < list.length; index++) {
    const element = list[index].num
    const interval = delay / element
    let timer = setInterval(() => {
      numList.value[index]++
      if (numList.value[index] === element) clearInterval(timer)
    }, interval)
  }
})
</script>
<template>
  <div class="person">
    <header>
      <el-avatar :size="70" :src="avatarURL"></el-avatar>
      <div class="information">
        <span class="name">叫怪兽 <sup>lv5</sup></span>
        <span class="level">正式会员</span>
        <p class="assets">硬币: 5</p>
      </div>
    </header>
    <ul class="attention flex-bc f3">
      <li class="fw f1" v-for="(item, i) in list" :key="item.text">
        <span>{{ numList[i] }}</span>
        <p>{{ item.text }}</p>
      </li>
    </ul>
    <main>
      <p>个性设置</p>

      <ul class="theme fw f4" title="主题颜色">
        <li
          :class="{ active: current === item.color }"
          @click="handleChangeTheme(item.color)"
          v-for="(item, i) in themeList"
          :key="i"
        >
          <div class="color" :style="{ background: item.color }"></div>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="less" scope>
.person {
  header {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .el-avatar {
      margin: 4vw;
    }
    .information {
      margin-left: 2vw;
      display: flex;
      flex-wrap: wrap;
      > * {
        width: 100%;
        margin: 2.5px 0;
      }
      .name {
        font-size: 5vw;
        color: #000;
        font-weight: bold;
        sup {
          padding: 0 3px;
          color: #fefef3;
          background-color: #fb570a;
        }
      }
      .level {
        font-size: 3vw;
        padding: 2px;
        width: auto;
        color: #e78aa7;
        border: 1px solid #e78aa7;
        border-radius: 0.8vw;
      }
      .assets {
        font-size: 3vw;
        color: #a8a8a8;
      }
    }
  }
  .attention {
    li {
      > * {
        text-align: center;
      }
      + li {
        border-left: 1px solid #eeeeee;
      }
      span {
        color: #2c2c2c;
        font-size: 5vw;
      }
      p {
        color: #a9a9a9;
        line-height: 20px;
        font-size: 3.5vw;
      }
    }
  }
  main {
    margin-top: 20px;
    background-color: #f4f4f4;
    padding: 0 15px;
    p {
      text-align: center;
      font-size: 18px;
      color: #131313;
      font-weight: bold;
      line-height: 60px;
    }
    .theme {
      border-radius: 3px;
      background-color: #fff;
      padding-top: 40px;
      position: relative;
      &::before {
        content: attr(title);
        color: #2a2a2a;
        position: absolute;
        top: 10px;
        margin-left: 1rem;
        letter-spacing: 0.5vw;
      }
      li {
        margin-bottom: 10px;
        padding: 3vw;
        position: relative;
        &.active::after {
          content: '';
          width: 84%;
          height: 80%;
          position: absolute;
          top: 5%;
          left: 8%;
          border-radius: 5px;
          filter: contrast(50%);
          box-shadow: 0px 0px 8px #858181;
        }
        .color {
          height: 30px;
          border-radius: 3px;
        }
        p {
          text-align: center;
          font-size: 3vw;
          line-height: 30px;
          color: #2a2a2a;
        }
      }
    }
  }
}
</style>
