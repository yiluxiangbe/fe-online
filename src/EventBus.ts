// eventBus.js
import mitt from 'mitt'

// 创建事件总线实例
const eventBus = mitt()

// 通过provide将事件总线注入到应用程序中
export function setupEventBus(app: any) {
  app.provide('eventBus', eventBus)
}
