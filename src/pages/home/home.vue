<template>
  <div class="home">
    <div class="left">
      <div class="left-top">
        <div class="time-and-people">
          <DateChoose></DateChoose>
          <img class="img-light" src="../../assets/image/light.png" alt="" />
        </div>
        <div class="lyout-charts">
          <VenueLyoutCharts></VenueLyoutCharts>
          <img class="img-light" src="../../assets/image/light.png" alt="" />
        </div>
      </div>

      <div class="bar-and-pie">
        <div class="bar-charts">
          <BarCharts></BarCharts>
        </div>
        <div class="pie-charts">
          <PieCharts></PieCharts>
        </div>
        <img class="img-light" src="../../assets/image/light.png" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="price-list-sty">
        <PriceList></PriceList>
        <img class="img-light" src="../../assets/image/light.png" alt="" />
      </div>
      <div class="shuffling-figure">
        <ShufflingFigure></ShufflingFigure>
        <img class="img-light" src="../../assets/image/light.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import DateChoose from "../../components/date-choose.vue";
import BarCharts from "../../components/bar-chart.vue";
// import LineCharts from "../../components/line-chart.vue";
import PieCharts from "../../components/pie-chart.vue";
import PriceList from "../../components/price-list.vue";
import ShufflingFigure from "../../components/shuffling-figure.vue";
import VenueLyoutCharts from "../../components/venue-lyout-charts.vue";
export default {
  components: {
    DateChoose,
    BarCharts,
    // LineCharts,
    PieCharts,
    PriceList,
    ShufflingFigure,
    VenueLyoutCharts,
  },
  data() {
    return {
      chooseStartTime: "",
      chooseEndTime: "",
      dataList: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 170px 20px 0 20px;
  background-image: url("../../assets/image/bg.jpg");
  background-repeat: no-repeat;
  color: #fff;
  .left {
    width: 930px;
  }
}

.left-top {
  /* opacity: 0.4; */

  display: flex;
}
.lyout-charts {
  width: 455px;
  height: 420px;
  /* margin-left: 20px; */
  padding: 10px 0 0 10px;
  border: solid 1px rgba(76, 178, 248, 0.4);
  box-shadow: 0px 0px 15px rgba(76, 178, 248, 0.5) inset;
  position: relative;
  box-sizing: border-box;
  position: relative;
}
/* .time-and-people {
  width: 450px;
  height: 420px;
  padding: 10px 0 0 10px;
  border: solid 1px rgba(76, 178, 248, 0.4);
  box-shadow: 0px 0px 15px rgba(76, 178, 248, 0.5) inset;
  position: relative;
  box-sizing: border-box;
} */
.bar-and-pie {
  width: 925px;
  height: 420px;
  margin-top: 20px;
  display: flex;
  padding: 10px 0 0 10px;
  border: solid 1px rgba(76, 178, 248, 0.4);
  box-shadow: 0px 0px 15px rgba(76, 178, 248, 0.5) inset;
  position: relative;
  box-sizing: border-box;
  position: relative;
}
.bar-and-pie::before {
  content: "";
  width: 0;
  height: 22px;
  position: absolute;
  right: 7px;
  top: -4px;
  transform: rotate(135deg);
  border: 1px solid rgba(76, 178, 248, 0.5);
}
.bar-and-pie::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  right: -1px;
  top: -2px;
  border: 10px solid #050b1b;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.right {
  display: flex;
  margin-left: 20px;
}
.time-and-people {
  position: relative;
}
/* .time-and-people::before {
  content: "";
  width: 0;
  height: 22px;
  position: absolute;
  right: 7px;
  top: -4px;
  transform: rotate(135deg);
  border: 1px solid rgba(76, 178, 248, 0.5);
}
.time-and-people::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 431px;
  top: -1px;
  border: 9px solid #050b1b;
  border-bottom-color: transparent;
  border-left-color: transparent;
} */
.img-light {
  position: absolute;
  top: -44px;
  right: 30px;
}

.lyout-charts::before {
  content: "";
  width: 0;
  height: 22px;
  position: absolute;
  right: 7px;
  top: -4px;
  transform: rotate(135deg);
  border: 1px solid rgba(76, 178, 248, 0.5);
}
.lyout-charts::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 435px;
  top: -1px;
  border: 10px solid #050b1b;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.price-list-sty {
  width: 455px;
  height: 860px;
  display: flex;
  padding: 10px 0 0 10px;
  border: solid 1px rgba(76, 178, 248, 0.4);
  box-shadow: 0px 0px 15px rgba(76, 178, 248, 0.5) inset;
  position: relative;
  box-sizing: border-box;
  position: relative;
}
.price-list-sty::before {
  content: "";
  width: 0;
  height: 22px;
  position: absolute;
  right: 7px;
  top: -4px;
  transform: rotate(135deg);
  border: 1px solid rgba(76, 178, 248, 0.5);
}
.price-list-sty::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 436px;
  top: -2px;
  border: 9px solid #050b1b;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.shuffling-figure {
  width: 455px;
  height: 860px;
  margin-left: 20px;
  display: flex;
  padding: 10px 0 0 10px;
  border: solid 1px rgba(76, 178, 248, 0.4);
  box-shadow: 0px 0px 15px rgba(76, 178, 248, 0.5) inset;
  position: relative;
  box-sizing: border-box;
  position: relative;
}

.shuffling-figure::before {
  content: "";
  width: 0;
  height: 22px;
  position: absolute;
  right: 7px;
  top: -4px;
  transform: rotate(135deg);
  border: 1px solid rgba(76, 178, 248, 0.5);
}
.shuffling-figure::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 436px;
  top: -2px;
  border: 9px solid #050b1b;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
</style>