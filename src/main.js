import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Http from 'axios-vue-http'
Vue.use(Http);
// import echarts from 'echarts';

// Vue.use(echarts) 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
