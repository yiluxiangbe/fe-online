<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <router-link to="/username"><el-tab-pane label="成员管理" name="first"></el-tab-pane></router-link>
    <router-link to="/teammanage"> <el-tab-pane label="团队管理" name="third"></el-tab-pane></router-link>
    <router-link to="/profession">
      <el-tab-pane label="职位维护" name="third"></el-tab-pane>
    </router-link>
  </el-tabs>
  <!-- 面包屑 -->

  <el-breadcrumb separator="/" class="mianbao">
    <el-breadcrumb-item>澳门嗨行旅游</el-breadcrumb-item>
    <el-breadcrumb-item>{{ mianbao }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
// 使用inject来访问事件总线
import { inject } from 'vue'
const eventBus = inject('eventBus')

const activeName = ref('first')

const mianbao = ref('')

onMounted(() => {
  eventBus.on('custom-event', (data: any) => {
    console.log(data)

    if (data === '') {
      mianbao.value = '未分配部门'
    } else {
      mianbao.value = data
    }
  })
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.mianbao {
  padding-left: 147px;
  margin-top: -41px;
  margin-bottom: 20px;
}
</style>
