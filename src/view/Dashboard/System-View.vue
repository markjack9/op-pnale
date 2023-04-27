<template>
  <div class="g-context-dashboard">
    <div>
      <el-card class="box-card g-card">
        <el-text class="network-text">{{systeminfo}}系统信息</el-text>
        <el-scrollbar height="400px">
          <p>{{systeminfotext}}</p>
        </el-scrollbar>
      </el-card>
    </div>
    <div class="dashboard-card">
      <el-card  class="g-cadashboard ">
        <div id="cpubashboard">
          <div class="demo-progress">
            <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            <div class="dashboard-text">
              CPU
            </div>
          </div>
        </div>
      </el-card>
      <el-card  class="g-cadashboard ">
        <div id="cpubashboard"  >
          <div class="demo-progress">
            <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            <div class="dashboard-text">
              内存
            </div>
          </div>
        </div>
      </el-card>
      <el-card  class="g-cadashboard ">
        <div id="cpubashboard">
          <div class="demo-progress">
            <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            <div class="dashboard-text">
              系统磁盘
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
  <div class="progress-network">
    <el-card class="progress-card">
      <div class="network-text" >
        <el-text class="network-text" size="large">流量统计</el-text>
      </div>

      <el-progress
          :text-inside="true"
          :stroke-width="30"
          :percentage="50"
          :color="colors"
      >
        <span class="network-info">{{ }}使用的流量/总流量</span>
      </el-progress>
    </el-card >
  </div>
  <div class="progress-network">
    <el-card>

    </el-card>
  </div>
</template>

<script lang="ts" >
import {onMounted, ref} from "vue";

const percentage = ref(0)

const colors = [
  { color: '#47c906', percentage: 20 },
  { color: '#0fecec', percentage: 40 },
  { color: '#ecbb22', percentage: 60 },
  { color: '#930de8', percentage: 80 },
  { color: '#ff0000', percentage: 100 },
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

<style scoped>
.progress-card {
}
.progress-network{
  margin: 20px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 93%;
}

.g-card{
  width: 600px;
  height: 200px;
  overflow: auto;
}
.g-context-dashboard {
  display: flex;
  width: 100%;
  overflow: auto;
}
.g-cadashboard {
  margin-left: 10px;
}
.dashboard-text {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.g-context-dashboard .dashboard-card {
  display: flex;
  margin-left: 20px;
}
.progress-network .network-text{
  margin-bottom: 20px;
  font-size: 24px;

}
.progress-network .network-info{
  align-items: center;
  font-size: 20px;
}
</style>