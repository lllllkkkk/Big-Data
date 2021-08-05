<template>
  <!-- <div id="main2" style="width: 400px; height: 300px;background:red"> {{time}} </div> -->
  <div class="lineCharts">
    <!-- <span class="textSty"> 上冰人数 </span>
    <img class="imgSty" src="../assets/image/arrow.png" alt="" />
    <v-chart class="chart" :option="option" /> -->
  </div>
</template>

<script>


export default {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  data() {
    return {
      // time:0
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      },
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
/* .lineCharts {
  margin-top: 20px;
  position: relative;
}
.textSty {
  font-size: 24px;
  font-family: BigruixianBlackGBV1.0 Regular;
  letter-spacing: 5px;
  background-image: linear-gradient(#74d1ff, #daeeff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
}
.imgSty {
  width: 260px;
  height: 22px;
  position: absolute;
  left: 120px;
  top: 6px;
}
.chart {
  height: 200px;
  width: 390px;
  margin-left: 15px;
  margin-top: 10px;
} */
</style>