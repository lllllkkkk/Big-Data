// import axios from 'axios'
import config from '../config/index.js'
// const service = axios.create({
//     baseURL: config.baseURL[process.env.NODE_ENV],
//     contentType: 'application/json',
//     timeout: 1000 * 60 * 20 // 请求超时时间
// })
// service.interceptors.request.use(config => {
//     console.log(config,'config')
//     return config
// }, error => {
//     Promise.reject(error)
// })
// service.interceptors.response.use(
//     response => {

//         const res = response.data
//         console.log(res,'res')
//     },
//     error => {
//         console.log(error,'error')
//         return Promise.reject(error)
//     }
// )
// export default service

import axios from 'axios'
// 一些请求的基本配置 
const service = axios.create({
    baseURL: config.baseURL[process.env.NODE_ENV],
    contentType: 'application/json',
    timeout: 1000 * 60 * 20 // 请求超时时间
})

export default function request(url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
        const options = { url, method, data }
        service(options).then(res => {
            console.log('返回数据', res)
            resolve(res.data)
        }).catch(error => {
            reject()
            console.error(error)
        })
    })
}