<template>
  <div class="venue-lyout-charts">
    <span class="textLyoutSty"> 场馆布局 </span>
    <img class="lyoutImgSty" src="../assets/image/arrow.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {},
  mounted() {},
  methods: {},
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
</style>