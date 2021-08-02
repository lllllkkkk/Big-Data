<template>
    <div class="shuffling-figure-sty">
        <span class="fidureTextSty"> 轮播图 </span>
        <img class="figureImgSty" src="../assets/image/arrow.png" alt="" />
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
.shuffling-figure-sty{
    position: relative;
}
.fidureTextSty {
  font-size: 24px;
  font-family: BigruixianBlackGBV1.0 Regular;
  letter-spacing: 5px;
  background-image: linear-gradient(#74d1ff, #daeeff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
}
.figureImgSty {
  width: 260px;
  height: 16px;
  position: absolute;
  left: 100px;
  top: 8px;
}
</style>