import api from '@/api/index'

const HomeDomain = {
    async getOnIcePeople(data){
        let info = JSON.stringify(data)
        console.log(info,'kkkk')
        let res = await api.getTest(info)
        console.log(res,'shujv')
        return res
    }
}

export default HomeDomain