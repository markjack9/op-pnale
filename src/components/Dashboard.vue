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

</template>
<style >
.left-rail{
  top: 70px;
  height: 80%;
  position: absolute;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:200px;
  min-height: 100%;
  height: auto;
}
</style>
<script lang="ts" setup>
import { ref } from 'vue'
import PublicHeader from "./Header.vue"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, Notebook, Grid,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>