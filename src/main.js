import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Http from 'axios-vue-http'
import moment from 'moment'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // 同时必须引入css样式文件
// import 'swiper/dist/css/swiper.css'

// 挂载到vue全局上
// Vue.use(VueAwesomeSwiper)
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
