import axios from "axios";
const urlConfig = {
    dev:'http://192.168.1.97:8092/managementSystem',
    prod:'https://www.147soft.cn/managementSystem'
}
const apiUrl = process.env.NODE_ENV === 'production' ? urlConfig.prod : urlConfig.dev

const portData = {
    async portImgData(page, size, shopNum, type) {
        let url = `${apiUrl}/changguan/getBigDataPics?type=${type}&pageNo=${page}&pageSize=${size}&shopNum=${shopNum}`
        let res = await axios.get(url)
        return res.data.data
    }
}

export default portData