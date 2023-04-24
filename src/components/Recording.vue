<template>
  <Header></Header>
  <div class="left-rail">
    <el-tabs tab-position="left" style="height: 200px;">
      <el-tab-pane label="系统日志">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="报警记录">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="文件上传日志">
        <div>

        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
  data() {
    return {};
  },
  methods: {
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>