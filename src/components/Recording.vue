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
        <el-icon><Tickets /></el-icon>
        <template #title>系统日志</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><AlarmClock /></el-icon>
        <template #title>报警日志</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>文件上传日志</template>
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

<script lang="ts" setup>
import { ref } from 'vue'
import PublicHeader from "./Header.vue"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, Tickets, AlarmClock,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

</style>