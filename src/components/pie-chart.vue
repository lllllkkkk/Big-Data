<template>
  <!-- <div id="main2" style="width: 400px; height: 300px;background:red"> {{time}} </div> -->
  <div class="pie-chart">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
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
  PieChart,
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
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "花样" },
              { value: 735, name: "冰球" },
              { value: 580, name: "散滑" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
.chart {
  height: 350px;
  width: 430px;
  margin-left: 25px;
  margin-top: 40px;
}
</style>