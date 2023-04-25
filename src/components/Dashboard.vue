<template>
 <PublicHeader></PublicHeader>
  <div class="left-rail">
    <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <template #title>系统信息</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Grid /></el-icon>
        <template #title>主机列表</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>报警事件</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Notebook /></el-icon>
        <template #title>备忘录</template>
      </el-menu-item>
    </el-menu>
    <el-radio-group v-model="isCollapse">
    </el-radio-group>
    <el-switch
        v-model="isCollapse"
        class="ml-2"
        style="--el-switch-on-color: #ff4949; --el-switch-off-color:#13ce66 "
    />

  </div>
<div class="g-context">
  <div class="g-context-dashboard">
    <div>
      <el-card class="box-card g-card">
        <div>{{system-info}}系统信息
        </div>
      </el-card>
    </div>
    <div id="cpubashboard" class="g-cadashboard ">
      <div class="demo-progress">
        <el-progress type="dashboard" :percentage="percentage" :color="colors" />
        <div class="dashboard-text">
          CPU
        </div>
      </div>
    </div>
    <div id="cpubashboard" class="g-cadashboard " >
      <div class="demo-progress">
        <el-progress type="dashboard" :percentage="percentage" :color="colors" />
        <div class="dashboard-text">
          内存
        </div>
      </div>
    </div>
    <div id="cpubashboard" class="g-cadashboard ">
      <div class="demo-progress">
        <el-progress type="dashboard" :percentage="percentage" :color="colors" />
        <div class="dashboard-text">
          系统磁盘
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<style >
.g-card{
  width: 500px;
  height: 200px;
}
.g-context-dashboard {
  display: flex;
  flex-direction: row;
}
.g-cadashboard {
  margin-left: 60px;
}
.g-context {
  margin: 30px 30px 30px 30px;
  top: 71px;
  left: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.left-rail{
  top: 71px;
  height: 80%;
  position: absolute;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:200px;
  min-height: 100%;
  height: auto;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;

}
.demo-progress .el-progress--circle {
  margin-right: 15px;

}
.dashboard-text {
  display: flex;
  justify-content: center;
}
</style>
<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import PublicHeader from "./Header.vue"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, DataLine, Expand, Grid, Notebook,Minus, Plus,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const percentage = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 10
  }, 500)
})

</script>