import axios from "axios";

const portData = {
    async portImgData(page, size, shopNum, type) {
        let url = `http://192.168.1.97:8092/managementSystem/changguan/getBigDataPics?type=${type}&pageNo=${page}&pageSize=${size}&shopNum=${shopNum}`
        let res = await axios.get(url)
        console.log(res,'world')
        return res.data.data
    }
}

export default portData