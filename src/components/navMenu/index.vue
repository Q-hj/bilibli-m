<script setup>
import { ref, reactive, onMounted, watch, inject, nextTick } from 'vue'
const { color } = inject('theme')

const props = defineProps({
  menu: Array,
})

let activeTab = ref('')
let lineX = ref(10)

const lineRef = ref(null)
const tabItem = ref(null)
function handleChange(tab) {
  activeTab.value = tab
}

const emit = defineEmits(['changeTab'])
// 当前选项改变时
watch(activeTab, (newvalue, oldvalue) => {
  // 使用emit 触发父组件方法(需在defineEmits提前声明)
  emit('changeTab', newvalue)

  // 改变下划线样式
  let index = props.menu.indexOf(newvalue)
  const itemDOM = tabItem.value[index]
  // 设置left值 (改变style中绑定的 响应式变量的value）
  lineX.value = itemDOM.offsetLeft + 'px'
  // 设置宽度 (实现思想：在ref获取的dom实例中，通过设置样式属性)
  lineRef.value.style.width = itemDOM.offsetWidth + 'px'
})
onMounted(() => {
  // 刚加载时 activeTab 设为菜单第一项
  activeTab.value = props.menu[0]
})
</script>

<template>
  <div class="navMenu">
    <!-- el-tabs 实现横向菜单 -->
    <!-- <el-tabs v-model="activeTab">
      <el-tab-pane
        v-for="(item, index) in props.menu"
        :key="item.text"
        :label="item.text"
        :name="item.text"
      >
        {{ item.text }}
      </el-tab-pane>
    </el-tabs> -->
    <div class="row">
      <ul class="row-list">
        <!-- 下划线 -->
        <div class="line" ref="lineRef"></div>
        <li v-for="item in props.menu" :key="item" ref="tabItem">
          <span
            :class="{ active: activeTab === item }"
            @click="handleChange(item)"
            >{{ item }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scope>
.navMenu {
  .row {
    width: 100%;
    .row-list {
      // width: 1000%;
      display: flex;
      position: relative;
      .line {
        position: absolute;
        bottom: 0;
        left: v-bind(lineX);
        height: 3px;
        border-radius: 1.5px;
        background-color: v-bind(color);
      }
      li {
        margin: 8px 10px;
        span {
          color: #696e72;
          font-weight: bold;
          &.active {
            color: v-bind(color);
          }
        }
      }
    }
  }
}
</style>
