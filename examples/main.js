import Vue from 'vue'
import App from './App.vue'
import DXui from "../packages"
Vue.config.productionTip = false
Vue.use(DXui)
new Vue({
  render: h => h(App),
}).$mount('#app')
