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
  <div class="networkcarts">
    <el-card>
<div id="networkcartscpu" ref="networkcartscpu" style="width: 50%; height: 400px">1111</div>
    </el-card>
  </div>
</template>

<script lang="ts"  setup>
import {onMounted, ref} from "vue";
import * as echarts from 'echarts/core';
import {TooltipComponent, TooltipComponentOption} from 'echarts/components';
import {GaugeChart, GaugeSeriesOption} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import axios from "axios";


echarts.use([TooltipComponent, GaugeChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
    TooltipComponentOption | GaugeSeriesOption
>;

const percentage = ref(0)

const colors = [
  { color: '#47c906', percentage: 20 },
  { color: '#0fecec', percentage: 40 },
  { color: '#ecbb22', percentage: 60 },
  { color: '#930de8', percentage: 80 },
  { color: '#ff0000', percentage: 100 },
]
const update ={
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: localStorage.getItem("systemupdate"),
          name: 'SCORE'
        }
      ]
    }
  ]
}
const getdatadashboard = () => {
  let reqInstance = axios.create({
    headers: {
      Authorization : localStorage.getItem('loginResult')
    }
})
reqInstance.get('http://192.168.0.117:8081/system-view'
).then((res) => {
     console.log(res.data);
}).catch(function (error) {
        // handle error
        console.log(error);
      });


}
const networkcharts = (data: any,elementid: string) => {
  const chartDom = document.getElementById(elementid) as HTMLElement;
  const myChart = echarts.init(chartDom);
  myChart.setOption(data);
  localStorage.removeItem("systemupdate")
}
onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 10
    let reqInstance = axios.create({
      headers: {
        Authorization : localStorage.getItem('loginResult')
      }
    })
    reqInstance.get('http://192.168.0.117:8081/system-view'
    ).then((res) => {
      localStorage.setItem("systemupdate", JSON.stringify(res.data));
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
  }, 500)
  networkcharts(update,'networkcartscpu')


})

</script>

<style scoped>
.networkcarts {

}
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