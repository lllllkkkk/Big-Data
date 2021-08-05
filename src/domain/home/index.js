import api from '@/api/index'

const HomeDomain = {
    async getOnIcePeople(data){
        let info = JSON.stringify(data)
        let res = await api.getTest(info)
        return res
    }
}

export default HomeDomain