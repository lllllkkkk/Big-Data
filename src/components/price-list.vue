<template>
  <div class="price-list">
    <span class="priceTextSty"> 价目表 </span>
    <img class="priceImgSty" src="../assets/image/arrow.png" alt="" />
    <img class="dataImgSty" :src="imgUrl" alt="">
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
      this.getPriceList()
  },
  methods: {
    async getPriceList() {
      let res = await PortData.portImgData('1','1','1001','3')
        this.imgUrl = 'https://www.147soft.cn:8092/images/' + res.list[0].imageUrl
    },
  },
};
</script>

<style scoped>
.price-list {
  position: relative;
}
.priceTextSty {
  font-size: 24px;
  font-family: BigruixianBlackGBV1.0 Regular;
  letter-spacing: 5px;
  background-image: linear-gradient(#74d1ff, #daeeff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
}
.priceImgSty {
  width: 260px;
  height: 22px;
  position: absolute;
  left: 100px;
  top: 6px;
}
.dataImgSty{
    width: 430px;
    height: 790px;
    margin-top: 8px;
}
</style>