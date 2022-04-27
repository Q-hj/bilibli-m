<script setup>
import { ref, onMounted } from 'vue'
import resultJson from './videoList.json'

let videoList = ref([])
// const props = defineProps({
//   menu: Array,
// })

onMounted(() => {
  let result = []
  for (let i = 0; i < 16; i++) {
    result = result.concat(resultJson)
  }
  videoList.value = result
})
</script>

<template>
  <ul class="videoList">
    <li v-for="(item, i) in videoList" :key="i">
      <img :src="item.CoverImage" alt="" />
      <p>{{ item.title }}</p>
      <div class="details">
        <span>up {{ item.up }}</span>
      </div>
    </li>
  </ul>
</template>

<style lang="less" scope>
.videoList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: calc(50% - 5px);
    // border: 1px solid black;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    margin-top: 10px;
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 25vw;
    }
    p {
      font-size: 4vw;
      font-weight: bold;
      padding: 5px;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //自定义行数
      -webkit-box-orient: vertical;
    }
    .details {
      padding: 5px;
      display: flex;
      span {
        font-size: 3vw;
        color: #aaafb4;
      }
    }
  }
}
</style>
