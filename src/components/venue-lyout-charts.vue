<template>
  <div class="venue-lyout-charts">
    <span class="textLyoutSty"> 场馆布局 </span>
    <img class="lyoutImgSty" src="../assets/image/arrow.png" alt="" />
    <img class="portImgSty" :src="imgUrl" alt="">
  </div>
</template>

<script>
import PortData from '../assets/js/port-img-data.js'
export default {
  data() {
    return {
      imgUrl:''
    }
  },
  mounted() {
    this.getImgUrl()
  },
  methods: {
    async getImgUrl(){
      let res = await PortData.portImgData('1','1','0001','2')
        console.log(res,'你好不好')
        this.imgUrl = 'https://www.147soft.cn:8092/images/' + res.list[0].imageUrl
      
    }
  },
};
</script>

<style scoped>
.venue-lyout-charts {
    position: relative;
}
.textLyoutSty {
  font-size: 24px;
  /* font-family: BigruixianBlackGBV1.0 Regular; */
  letter-spacing: 5px;
  background-image: linear-gradient(#74d1ff, #daeeff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
}
.lyoutImgSty {
  width: 260px;
  height: 16px;
  position: absolute;
  left: 125px;
  top: 9px;
}
.portImgSty{
  width: 430px;
  height: 350px;
  margin-top: 8px;
}
</style>