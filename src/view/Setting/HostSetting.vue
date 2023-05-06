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
          <el-button @click="toggleSelection(tableData)">全选</el-button>
          <el-button @click="toggleSelection()">取消勾选</el-button>
          <el-button @click="todohostlist('del')">删除</el-button>
          <el-button @click="openitem">查看</el-button>
          <el-dialog
              v-model="todoeseeitem"
              :show-close="false"
              title="主机信息">
            <el-form :model="seeform" label-width="120px">
              <el-form-item label="主机名">
                <el-input v-model="form[0].hostname" disabled />
              </el-form-item>
              <el-form-item label="系统类型">
                <el-select v-model="form[0].systemtype" disabled>
                  <el-option label="windows" value="windows" />
                  <el-option label="linux" value="linux" />
                </el-select>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-col :span="11">
                  <el-date-picker
                      v-model="form[0].hostaddtime"
                      type="date"
                      placeholder=""
                      style="width: 100%"
                      disabled
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="主机状态">
                <el-switch v-model="hoststatus" disabled />
              </el-form-item>
              <el-form-item label="主机IP">
                <el-input v-model="form[0].hostip" disabled />
              </el-form-item>
              <el-form-item label="主机负责人">
                <el-input v-model="form[0].hostowner" disabled />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form[0].hostnote" type="textarea" disabled />
              </el-form-item>
              <el-form-item>
                <el-button @click="todoeseeitem = false">关闭</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button @click="todoadditem = true">添加</el-button>
          <el-dialog
              v-model="todoadditem"
              :show-close="false"
              title="主机信息">
            <el-form :model="form" label-width="120px">
              <el-form-item label="主机名">
                <el-input v-model="form.hostname" placeholder="请填写主机名称" />
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
                      placeholder="添加主机时间"
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="主机状态">
                <el-switch v-model="form.delivery" />
              </el-form-item>
              <el-form-item label="主机IP">
                <el-input v-model="form.hostip" placeholder="主机IP地址" />
              </el-form-item>
              <el-form-item label="主机负责人">
                <el-input v-model="form.hostowner" placeholder="主机管理员" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.hostnote" type="textarea" placeholder="备注说明" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="todoadditem = false;todohostlist('add')">确定</el-button>
                <el-button @click="todoadditem = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button @click="todoedititem = true">编辑</el-button>
          <el-dialog
              v-model="todoedititem"
              :show-close="false"
              title="编辑主机信息">
            <el-form :model="form" label-width="120px">
              <el-form-item label="主机名">
                <el-input v-model="form[0].hostname" placeholder="" />
              </el-form-item>
              <el-form-item label="系统类型">
                <el-select v-model="form[0].systemtype" placeholder="">
                  <el-option label="windows" value="windows" />
                  <el-option label="linux" value="linux" />
                </el-select>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-col :span="11">
                  <el-date-picker
                      v-model="form[0].hostaddtime"
                      type="date"
                      placeholder=""
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
              <el-form-item label="主机状态">
                <el-switch v-model="hoststatus" @click="clickhoststatus" />
              </el-form-item>
              <el-form-item label="主机IP">
                <el-input v-model="form[0].hostip" placeholder="" />
              </el-form-item>
              <el-form-item label="主机负责人">
                <el-input v-model="form[0].hostowner" placeholder="" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form[0].hostnote" type="textarea" placeholder="" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="todoedititem = false;todohostlist('change')">确定</el-button>
                <el-button @click="todoedititem = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-table
              ref="multipleTableRef"
              :data="tableData"
              style="width: 100%"
              class="host-card-list"
              @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="序号" width="120">
              <template #default="scope">{{ scope.row.hostid }}</template>
            </el-table-column>
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
import {onMounted, reactive} from 'vue'


import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios';

interface Hostinfo {
  hostid: number
  hostname: string
  systemtype: string
  hoststatus: number
  hostip: string
  hostlocation: string
  hostowner: string
  hostaddtime: string
  hostnote: string
}
const hoststatus = ref(true)
const clickhoststatus = () => {
if ( form[0].hoststatus === 0){
  form[0].hoststatus = 1
}else if ( form[0].hoststatus === 1){
  form[0].hoststatus = 0
}

}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<Hostinfo[]>([])
const toggleSelection = (rows?: Hostinfo[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleAllSelection(row, undefined)

    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: Hostinfo[]) => {
  multipleSelection.value = val
  form = val
  if (form[0].hoststatus === 1) {
    hoststatus.value = true
  }else if (form[0].hoststatus === 0) {
    hoststatus.value = false
  }

}



let form: Hostinfo[]
let formdata: Hostinfo

const openitem = () => {
  todoeseeitem.value = true
}
const tableData = ref<Hostinfo[]>([])
const todoadditem = ref(false)
const todoedititem = ref(false)
const todoeseeitem = ref(false)


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
onMounted(() => {
  hostsettingdata()
})
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
    formdata = form[0]
    console.log(form[0])
    axios.post('http://192.168.0.117:8081/hostlistdata', {
      typeoperation:"edit",
      hostlist: {
        hostid: formdata.hostid,
        hostname: formdata.hostname,
        systemtype: formdata.systemtype,
        hoststatus: formdata.hoststatus,
        hostip: formdata.hostip,
        hostlocation: formdata.hostlocation,
        hostowner: formdata.hostowner,
       hostaddtime: formdata.hostaddtime,
        hostnote: formdata.hostnote
      }
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
  axios.post('http://127.0.0.1:8081/hostlistdata', {
    typeoperation: "init"
  }).then(
      reponse =>{
        console.log("请求数据成功了:",reponse.data.data)
        tableData.value = reponse.data.data;
      },
      error => {
        console.log("请求数据失败了:",error.message)
      });
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