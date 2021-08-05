import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Http from 'axios-vue-http'
import moment from 'moment'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])


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
