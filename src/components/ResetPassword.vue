<template>
  <div class="g-top-nav">
    <div class="g-logo">
      <img class="g-logo-img" src="/images/logo.png" alt="logo">
    </div>
    <el-page-header @back="onBack" :icon="ArrowLeft">
      <template #content>
        <span class="text-large font-600 mr-3"> 重置密码 </span>
      </template>
    </el-page-header>
  </div>

</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
import router from '../router/index.js'
import { ElNotification as notify } from 'element-plus'
const onBack = () => {
  notify('返回到仪表盘')
  router.push({path: '/dashboard'})
}
</script>

<style scoped>
.g-content-nav div{
  margin: 10px;
  border: 1px solid #ccc;
}
.g-nav a{
  text-decoration: none;
  color: black;
  margin-right: 30px;
  font-size: 25px;
  font-weight: 600;

}

.g-profile {
  margin-left: auto;
  margin-right: 50px;

}
.g-profile span{
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
}
.g-logo {
  margin: 0 20px;

}
.g-logo-img {
  height: 50px;
}
.g-top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.g-left-arrow img {
  margin: 0 5px 0 auto;
}

.g-left-menu a {
  text-decoration: none;
  color: #222222;
  display: flex;
  flex-flow: row;

}
</style>