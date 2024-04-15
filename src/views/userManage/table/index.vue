<template>
  <div class="side">
    <!-- 输入框 -->

    <div class="input"><el-input v-model="input" style="width: 240px" placeholder="输入用户名或则名字" /> <el-button type="primary" @click="search">搜索</el-button></div>

    <el-table ref="multipleTableRef" :data="displayList.list" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column property="name" label="姓名" width="120" />
      <el-table-column property="username" label="用户名" show-overflow-tooltip />
      <el-table-column #default="{ row }">
        <el-button v-show="userList[0].department === ''" type="primary" style="width: 40px" @click="drawer = true"> 添加 </el-button>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false"> <el-input v-model="bumen" style="width: 240px" placeholder="输入部门名" /> <el-button type="primary" @click="addDepartment(bumen, row.id)">添加</el-button> </el-drawer>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, onMounted } from 'vue'
import { ElTable } from 'element-plus'
import { inject } from 'vue'

const eventBus = inject('eventBus')
const drawer = ref(false)
const bumen = ref('')

interface User {
  id: string
  name: string
  username: string
  department: string
}

// 定义props
const props = defineProps<{
  userList: User[]
}>()

// 所有用户数据
const totalList = props.userList

let userList = ref([] as User[])

onMounted(() => {
  // 总的满足分组的用户信息
  userList.value = props.userList
  eventBus.on('custom-event', (data: any) => {
    let newArr = totalList.filter((item) => {
      return item.department === data
    })
    userList.value = newArr
    displayList.list = newArr
  })
})

// 给为分配人员添加部门
const addDepartment = (name, id) => {
  const obj = { name: name, id: id }
  eventBus.emit('custom-event1', obj)
  alert('保存成功')
  drawer.value = false
}
// 输入关键字搜索
const input = ref('')

// 根据搜索的关键字来显示用户列表数据
const displayList = reactive({
  list: [] as User[]
})
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

// 输入关键字数据修改
const search = () => {
  const regex = new RegExp(input.value, 'i') // 不区分大小写的正则表达式
  const matchedUsers = userList.value.filter((user: User) => regex.test(user.username) || regex.test(user.name))
  displayList.list = matchedUsers
  if (matchedUsers.length > 0) {
    console.log('Matched users:', matchedUsers)
  } else {
    console.log('No matched users found.')
  }
  input.value = ''
}
</script>
