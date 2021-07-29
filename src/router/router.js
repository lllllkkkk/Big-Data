
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../pages/home/home.vue'

const routes = [
    {
        path:'/',
        redirect:'/Home'
    }, 
    {
        path: '/Home',
        name: 'Home',
        component: Home
    }

]

export default new Router({
    routes
})