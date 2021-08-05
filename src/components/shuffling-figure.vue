<template>
  <div class="shuffling-figure-sty">
    <span class="fidureTextSty"> 轮播图 </span>
    <img class="figureImgSty" src="../assets/image/arrow.png" alt="" />
    <swiper ref="mySwiper" :options="swiperOption" class="swiper">
      <!-- slides -->
      <swiper-slide
        class="swiper-slide"
        :key="banner"
        v-for="banner in banners"
      >
        <div class="item-img">
          <img
            class="img-swiper-sty"
            :src="banner"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import PortData from "../assets/js/port-img-data.js";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      banners: [],
      swiperOption: {
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        // speed: 500, //切换速度
        loop: true, //开启循环模式
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          waitForTransition: false,
        },
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true, //修改swiper的父元素时，自动初始化swiper
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log(this, "都有啥");
    console.log("Current Swiper instance object", this.mySwiper);
    this.swiper.slideTo(1, 100, false);
  },
  methods: {
    async getShufflingImg() {
      let res = await PortData.portImgData("1", "50", "0001", "1");
      console.log(res, "轮播图");
      this.banners = res.list.map(item => {
        return 'https://www.147soft.cn:8092/images/' + item.imageUrl
      }) 
    },
  },
};
</script>

<style scoped>
.shuffling-figure-sty {
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
  height: 22px;
  position: absolute;
  left: 100px;
  top: 6px;
}
.img-swiper-sty {
  width: 430px;
  height: 790px;
  margin-top: 8px;
}
.swiper{
    width: 440px;
}
</style>