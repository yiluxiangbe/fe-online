# Hixtrip FE Online

## 准备

- fork 此仓库
- 根据如下要求实现相关代码
- 完成要求
  - 提交`pull request`
  - 提供页面截图

## 需求

1. 目前已经有`src/api/user.ts` 以及 `src/api/org.ts` 两个 API
2. 需要实现如下效果界面：

![](./docs/preview.jpg)

> 功能要求：

- 不限 `React` 或者 `Vue`
- 需要拆分 `OrgTree` 以及 `UserTable` 两个组件
  - 两个组件自己维护相关的数据。
  - 体现两个组件的互相通信。
- 组织架构根据点上级节点进行查询子级节点实现异步加载。
- 用户 `Table ` 数据跟据点击 `组织架构树形节点` 以及 `输入搜索关键字` 查询。
  - 需要考虑防抖节流等功能点
- 风格不限
  - 示例图仅仅是效果展示，不需要完全符合。
  - 可以使用 `UI Framework`, 如 `ant-design`, `element-ui`等
  - 如果不用`UI Framework`, 可以直接用原生的`<ul> <li>`, `<table>` 实现，不用实现相关的 CSS 样式, 可以加分。

## 其他简答题

### 如何将如下的`JSON`正确解析成 `Object`

```json
{
  "userId": 111323290434354540545
}
```

解答：

const str = '{"userId": 111323290434354540545}'
const obj = JSON.parse(jsonString, (key, value) => {
if (key === 'userId') {
return BigInt(value)
}
return value
})

### 前端需要*稳定*每隔`1s`向服务端请求`API`, 请问如何实现？

使用 setInterval 每间隔一秒向服务器发送一次请求
vue：
根组件 App.vue 的 mounted 生命周期中
mounted(){
this.timer = setInterval(() => {
// 在这里执行向服务端请求 API 的操作
fetchDataFromServer();
}, 1000);
}

根组件 App.vue 的 beforeDestroy 生命周期销毁定时器
beforeDestroy(){
clearInterval(this.timer);
}

### 什么情况下，你会为你的项目引入状态管理库，比如`Redux`, `Pinia`, 可以简述一下起到了什么作用么？

项目数据比较多复杂，组件之间数据传输频繁的情况下会使用状态管理库，起到集中管理数据的作用，每一个组件访问修改数据更容易。

### 为什么`ESM`与`CJS`不能兼容？

1.ESM 与 CJS 的模块导入导出方式不同，require 无法引入 ESM 包，只能用 import() 调用 ESM 模块
2.CJS 是同步加载，ESM 是异步加载；由于 CJS 是用于服务器端的模块体系，需要加载的模块都在本地，所以采用同步加载也不会出问题，但是 ESM 用于浏览器端时，可能涉及到一些异步请求，所以需要采用异步加载。
