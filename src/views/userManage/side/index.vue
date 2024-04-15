<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="2">
          <!-- 抽屉，添加部门成员的操作 -->
          <el-button @click="visible = true"> add </el-button>
          <el-drawer v-model="visible" :show-close="false">
            <template #header="">
              <el-input v-model="input" style="width: 240px" placeholder="请输入部门名称" />
              <el-button type="primary" @click="add"> 保存 </el-button>
            </template>
          </el-drawer>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <span>澳门旅游团队</span>
          </template>
          <template v-for="item in department">
            <el-menu-item @click="change(item.name)" :index="item.id">{{ item.name }}</el-menu-item>
          </template>
          <el-menu-item index="2" @click="change('')">
            <span>未分配部门</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
// 使用inject来访问事件总线
import { inject } from 'vue'
const eventBus = inject('eventBus')

const visible = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const input = ref('')

// 状态改变
const change = (name: string) => {
  eventBus.emit('custom-event', name)
}

// 部门信息
let department = ref([
  { id: 1, name: '技术部' },
  { id: 2, name: '营销部' },
  { id: 3, name: '人事部' }
])

// 添加部门人员
const add = () => {
  const newArr = [...department.value, { id: Math.random(), name: input.value }]
  department.value = newArr
  alert('保存成功')
  visible.value = false
}
</script>
<style>
.el-col-12 {
  max-width: 100%;
}
</style>
