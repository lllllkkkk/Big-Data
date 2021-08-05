// import request from '../api/resquest'
 
// const api= {
//   getTest(data){
//       console.log(data,'klklkl')
//         return request({
//           url: '/wks/getNumberOfPeople',
//           method: 'get',
//           data: data
//         })
//   }
// }

// export default api

import axios from 'axios'

const urlConfig = {
    dev:'http://192.168.1.97:8092/managementSystem',
    prod:'https://www.147soft.cn/managementSystem'
}
const apiUrl = process.env.NODE_ENV === 'production' ? urlConfig.prod : urlConfig.dev

const apiObj = {
    async getSumPeople(shopNum){
        let url = `${apiUrl}/wks/getReceptionAll?shopNum=${shopNum}`
        let res = await axios.get(url)
        return res.data.data
    },
    async getShoesAndCoachInfo(shopNum){
        let url = `${apiUrl}/wks/getShoesAndCoachInfo?shopNum=${shopNum}`
        let res = await axios.get(url)
        return res.data.data
    }
    ,
    async getNumberOfPeople(startDateTime,endDateTime,shopNum){
        let url = `${apiUrl}/wks/getNumberOfPeople?startDateTime=${startDateTime}&endDateTime=${endDateTime}&shopNum=${shopNum}`
        let res = await axios.get(url)
        return res.data.data
    }
}


export default apiObj