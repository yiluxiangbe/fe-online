import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

// 导入element-plus
import ElementPlus from 'element-plus'
// 导入element-plus样式
import 'element-plus/dist/index.css'

import router from './router/index'

// 导入公共组件
import Head from './components/head/index.vue'

// 导入事件总线
import { setupEventBus } from './EventBus.ts'

// createApp接受一个组件作为参数，这里我们需要将根组件App.vue挂载在id为app的dom元素上
const app = createApp(App)
// 注册全局组件
setupEventBus(app)

app.component('Head', Head)
// 将element-plus应用到dom元素上
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// userApi.query({}).then((users) => {
//   document.getElementById('user')!.innerHTML = JSON.stringify(users)
// })

// orgApi.query('1').then((users) => {
//   document.getElementById('org')!.innerHTML = JSON.stringify(users)
// })
