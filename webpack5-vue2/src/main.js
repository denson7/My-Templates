import Vue from 'vue'
import App from './App.vue'
// vue路由配置，vue3.x对应vue-router4.x，vue2.x需要指定vue-router@3.x版本
import router from "./router"

Vue.config.productionTip = false
const obj = {a: 11}
console.log(obj?.a)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})