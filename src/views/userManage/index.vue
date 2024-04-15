<template>
  <div class="main">
    <Head></Head>
    <div class="contain"><Side></Side> <Table :userList="tableData"></Table></div>
  </div>
</template>

<script setup lang="ts">
import Side from './side/index.vue'
import Table from './table/index.vue'
import { inject } from 'vue'

const eventBus = inject('eventBus')
interface User {
  id: string
  name: string
  username: string
  department: string
}
// 接受修改用户信息的事件
eventBus.on('custom-event1', (data: any) => {
  const arr: any = tableData.map((item) => {
    if (data.id === item.id) {
      item.department = data.name
      return item
    }
    return item
  })
  tableData = arr
})
let tableData: User[] = [
  {
    id: '1',
    username: '111',
    name: 'afaf',
    department: '技术部'
  },
  {
    id: '2',
    username: '222',
    name: 'sasasa',
    department: '营销部'
  },
  {
    id: '3',
    username: '333',
    name: 'detefef',
    department: '人事部'
  },
  {
    id: '4',
    username: '444',
    name: 'fvvvff',
    department: '技术部'
  },
  {
    id: '5',
    username: '555',
    name: 'yrtyty',
    department: '营销部'
  },
  {
    id: '6',
    username: '666',
    name: 'uyuyu',
    department: '营销部'
  },
  {
    id: '7',
    username: '777',
    name: 'fefesd',
    department: '技术部'
  },
  {
    id: '8',
    username: '888',
    name: 'dcdfefefe',
    department: '人事部'
  },
  {
    id: '9',
    username: '999',
    name: 'hswishiqsj',
    department: '人事部'
  },
  {
    id: '10',
    username: '100',
    name: 'wiudoiadoah',
    department: ''
  },
  {
    id: '11',
    username: '101',
    name: 'muednuebndawgd',
    department: ''
  },
  {
    id: '12',
    username: '102',
    name: 'swwwww',
    department: ''
  }
]
</script>
<style>
.contain {
  display: flex;
}
</style>
