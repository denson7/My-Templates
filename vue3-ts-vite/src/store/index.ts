import { createPinia } from 'pinia'
import { App } from 'vue'

export function registerStore(app: App) {
  app.use(createPinia())
}
