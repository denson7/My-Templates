import { createApp } from 'vue'
import { registerStore } from '@/store'
import { registerRouter } from '@/router'
import App from './App.vue'

function main() {
  // 创建vue实例
  const app = createApp(App)
  // 注册pinia
  registerStore(app)
  // 注册路由
  registerRouter(app)
  // 挂载实例
  app.mount('#app')
}

main()
