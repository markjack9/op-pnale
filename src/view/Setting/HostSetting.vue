<template>
  <div class="host-statistics">
    <div>
      <div>
        <el-card class="host-card-statistic">
          <el-row :gutter="16">
            <el-col :span="8">
              <div class="statistic-card">
                <el-statistic :value="10">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      主机数量
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>增加数量</span>
                    <span class="green">
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
                      当前在线数量
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>在线率</span>
                    <span class="green">
              50%
              <el-icon>
                <CaretBottom/>
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
                      当前离线数量
                    </div>
                  </template>
                </el-statistic>
                <div class="statistic-footer">
                  <div class="footer-item">
                    <span>设备离线率</span>
                    <span class="red">
              50%
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
        <el-card class="host-card">
          <el-button @click="toggleSelection()">全选</el-button>
          <el-button @click="toggleSelection()">取消勾选</el-button>
          <el-button @click="todohostlist('del')">删除</el-button>
          <el-button @click="todoadditem = true">查看</el-button>
          <el-button @click="todoadditem = true">添加</el-button>
          <el-dialog
              :model-value="todoadditem" title="添加新主机">
            <el-form :model="form" label-width="120px">
              <el-form-item label="主机名">
                <el-input v-model="form.hostname" />
              </el-form-item>
              <el-form-item label="系统类型">
                <el-select v-model="form.systemtype" placeholder="选择系统类型">
                  <el-option label="windows" value="windows" />
                  <el-option label="linux" value="linux" />
                </el-select>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-col :span="11">
                  <el-date-picker
                      v-model="form.hostaddtime"
                      type="date"
                      placeholder="选择时间"
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="主机状态">
                <el-switch v-model="form.delivery" />
              </el-form-item>
              <el-form-item label="主机IP">
                <el-input v-model="form.hostip" />
              </el-form-item>
              <el-form-item label="主机负责人">
                <el-input v-model="form.hostowner" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.hostnote" type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="additem">Create</el-button>
                <el-button @click="todoadditem = false">Cancel</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button @click="todoadditem = true">编辑</el-button>
          <el-dialog

              v-model="todoadditem"
              title="编辑主机信息">
            <el-form :model="form" label-width="120px">
              <el-form-item label="主机名">
                <el-input v-model="form.hostname" placeholder={{}} />
              </el-form-item>
              <el-form-item label="系统类型">
                <el-select v-model="form.systemtype" placeholder={{}}>
                  <el-option label="windows" value="windows" />
                  <el-option label="linux" value="linux" />
                </el-select>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-col :span="11">
                  <el-date-picker
                      v-model="form.hostaddtime"
                      type="date"
                      placeholder="{{}}"
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="主机状态">
                <el-switch v-model="form.delivery" />
              </el-form-item>
              <el-form-item label="主机IP">
                <el-input v-model="form.hostip" placeholder={{}} />
              </el-form-item>
              <el-form-item label="主机负责人">
                <el-input v-model="form.hostowner" placeholder={{}} />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.hostnote" type="textarea" placeholder={{}} />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="todoadditem = false;edititem()">Create</el-button>
                <el-button @click="todoadditem = false">Cancel</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-table
              :data="tableData"
              style="width: 100%"
              class="host-card-list"
          >
            <el-table-column type="selection" width="60" >
            <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="hostid" label="序号" width="80" />
            <el-table-column prop="hostname" label="主机名" width="120" />
            <el-table-column prop="systemtype" label="系统版本" width="120" />
            <el-table-column prop="hoststatus" label="主机状态" width="120" />
            <el-table-column prop="hostip" label="主机IP" width="120" />
            <el-table-column prop="hostlocation" label="主机位置" width="120" />
            <el-table-column prop="hostowner" label="主机负责人" width="120" />
            <el-table-column prop="hostaddtime" label="添加时间" width="120" />
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
import { reactive } from 'vue'


import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios';

interface Hostinfo {
  hostid: number
  hostname: string
  systemtype: string
  hoststatus: boolean
  hostip: string
  hostlocation: string
  hostowner: string
  hostaddtime: string
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const form = reactive({
  hostname: '',
  systemtype: '',
  hostaddtime: '',
  delivery: '',
  hostip: '',
  hostlocation: '',
  hostowner: '',
  hostnote: '',
})

const toggleSelection = (rows?: Hostinfo[]) => {
  if (!rows) {
    multipleTableRef.value!.toggleAllSelection()

  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const multipleSelection = ref<Hostinfo[]>([])

const tableData = ref<Hostinfo[]>([])
const todoadditem = ref(false)

const additem= () => {
  this.$
  todohostlist('add')
  console.log('添加主机信息')
}
const edititem= () => {
  todohostlist('change')
  console.log('编辑主机信息')
}


const DeleteNoti = () => {
  ElMessageBox.confirm(
      '您确认删除此条记录吗？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '操作已取消',
        })
      })
}

const todohostlist = (option:string) => {

  if (option == 'del') {
    DeleteNoti()
    axios.post('http://192.168.0.117:8081/hostlistdata=?del', {

    }).then((res) => {
      if (res.data.code === 1000) {
        console.log('success')
      } else {
        console.log(res.data.message)
      }

    }).catch(function (error) {
      console.log("错误信息", error)
    });
  } else if (option == 'add'){
    axios.post('http://192.168.0.117:8081/hostlistdata=?add', {

    }).then((res) => {
      if (res.data.code === 1000) {
        console.log('success')
      } else {
        console.log(res.data.message)
      }

    }).catch(function (error) {
      console.log("错误信息", error)
    });
  } else if (option == 'change'){
    axios.post('http://192.168.0.117:8081/hostlistdata=?change', {

    }).then((res) => {
      if (res.data.code === 1000) {
        console.log('success')
      } else {
        console.log(res.data.message)
      }

    }).catch(function (error) {
      console.log("错误信息", error)
    });
  }

}

const hostsettingdata = () => {
  axios.get('http://192.168.0.117:8081/hostlistdata?=get').then(
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
.host-statistics {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
}
.host-card {
  width: 90%;
  margin-top: 20px;
}
.host-card-statistic {
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