<template>
  <div class="alarm-statistics">
    <div>
      <div>
        <el-card class="alarm-card-statistic">
          <el-row :gutter="16">
            <el-col :span="8">
              <div class="statistic-card">
                <el-statistic :value="10">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      报警数量总计
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>增加数量</span>
                    <span class="red">
              6
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="statistic-card">
                <el-statistic :value="5">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      正在进行的报警
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>今日新增报警</span>
                    <span class="red">
              10
              <el-icon>
                <CaretTop/>
              </el-icon>
            </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="statistic-card">
                <el-statistic :value="50" title="New transactions today">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      已处理报警数量
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>今日处理报警</span>
                    <span class="green">
              5
              <el-icon>
                <CaretTop/>
              </el-icon>
            </span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div>
        <el-card class="alarm-card">
          <el-table
              :data="tableData"
              style="width: 100%"
              class="host-card-list"
          >
            <el-table-column prop="alarmid" label="序号" width="80" />
            <el-table-column prop="alarmhostname" label="主机名" width="120" />
            <el-table-column prop="alarmtype" label="报警类型" width="120" />
            <el-table-column prop="alarmhoststatus" label="报警状态" width="120" />
            <el-table-column prop="alarmhostip" label="主机IP" width="120" />
            <el-table-column prop="alarmissues" label="问题" width="120" />
            <el-table-column prop="alarmhostlocation" label="主机位置" width="120" />
            <el-table-column prop="alarmhostowner" label="负责人" width="120" />
            <el-table-column prop="alarmtime" label="报警时间" width="120" />



          </el-table>
        </el-card>
      </div>
    </div>

  </div>



</template>

<script lang="ts" setup>
import {
  CaretBottom,
  CaretTop,
} from '@element-plus/icons-vue'
import {
  ElIcon,
} from 'element-plus'

import { ref } from 'vue'
import { ElTable } from 'element-plus'
import axios from 'axios';
interface Hostinfo {
  alarmid: number
  alarmhostname: string
  alarmtype: string
  alarmhoststatus: boolean
  alarmhostip: string
  alarmissues: number
  alarmhostlocation: string
  alarmhostowner: string
  alarmtime: string
}
const tableData = ref<Hostinfo[]>([])
const hostlistdata = () => {
  axios.get('http://192.168.0.117:8081/hostlistdata').then(
      reponse =>{
        console.log("请求数据成功了:",reponse.data)
        tableData.value = reponse.data.List;
      },
      error => {
        console.log("请求数据失败了:",error.message)
      })
}

</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}
.alarm-statistics {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
}
.alarm-card {
  width: 90%;
  margin-top: 20px;
}
.alarm-card-statistic {
  width: 90%;
}
.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>