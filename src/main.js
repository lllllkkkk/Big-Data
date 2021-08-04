import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Http from 'axios-vue-http'
import moment from 'moment'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(Http);
Vue.use(moment)
// import echarts from 'echarts';

// Vue.use(echarts) 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
