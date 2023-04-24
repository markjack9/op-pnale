<template>
  <Header></Header>
  <div class="left-rail">
    <el-tabs tab-position="left" style="height: 200px;">
      <el-tab-pane label="主机设置">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="报警事件处理">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="报警媒介设置">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="定时任务">
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