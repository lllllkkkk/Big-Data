<template>
  <div class="bar-chart">
    <span class="textBarSty">实时情况</span>
    <img class="barImgSty" src="../assets/image/arrow.png" alt="" />
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
]);

export default {
  props: {
    chooseStartTime: {
      type: String,
      default: "",
    },
    chooseEndTime: {
      type: String,
      default: "",
    },
  },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      // time:0
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.bar-chart {
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
  height: 22px;
  position: absolute;
  left: 125px;
  top: 6px;
}
.chart {
  height: 350px;
  width: 430px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>