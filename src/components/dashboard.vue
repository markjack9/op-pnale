
<template>
 <Header></Header>
  <div class="left-rail">
    <el-tabs tab-position="left" style="height: 200px;">
      <el-tab-pane label="系统信息">
<div>

</div>
      </el-tab-pane>
      <el-tab-pane label="主机列表">
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="报警事件">
        <div>

        </div>
      </el-tab-pane>
    </el-tabs>

  </div>

</template>
<style >
.left-rail{
  margin-top: 20px;
  top: 70px;
  position: absolute;
}
</style>


<script>
import Header from "./Header.vue"
export default {
  data() {
    return {

    };
  },
  methods: {
  },
  components: {
    Header
  }
}
</script>