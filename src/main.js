import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Http from 'axios-vue-http'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import ECharts from 'vue-echarts/components/ECharts'

// Vue.component('chart', ECharts)
Vue.use(ElementUI)
Vue.use(Http);
Vue.use(moment)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
