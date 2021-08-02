<template>
    <div class="bar-chart">
        <span class="textBarSty">实时情况</span>
        <img class="barImgSty" src="../assets/image/arrow.png" alt="" />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style scoped>
.bar-chart{
    position: relative;
}
.textBarSty {
  font-size: 24px;
  /* font-family: BigruixianBlackGBV1.0 Regular; */
  letter-spacing: 5px;
  background-image: linear-gradient(#74d1ff, #daeeff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
}
.barImgSty {
  width: 260px;
  height: 16px;
  position: absolute;
  left: 125px;
  top: 9px;
}
</style>