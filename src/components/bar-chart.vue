<template>
  <div class="bar-chart">
    <span class="textBarSty">实时情况</span>
    <img class="barImgSty" src="../assets/image/arrow.png" alt="" />
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import apiUrl from "../api/index";
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          data: ["使用", "未使用"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["教练", "滑冰助手", "滑冰鞋"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "使用",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [],
          },
          {
            name: "未使用",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [],
          },
        ],
      },
    };
  },
  async mounted() {
    let res = await apiUrl.getShoesAndCoachInfo("0001");
    this.option.series[0].data = [
      res.coachNum,
      res.zhuShouUseCount,
      res.shoesUseCount,
    ];
    this.option.series[1].data = [
      res.coachCount,
      res.zhuShouNoUseCount,
      res.shoesNoUseCount,
    ];
    this.getShoesAndCoachInfo();
  },
  methods: {
    async getShoesAndCoachInfo() {
      setInterval(async () => {
        let res = await apiUrl.getShoesAndCoachInfo("0001");
        this.option.series[0].data = [
          res.coachNum,
          res.zhuShouUseCount,
          res.shoesUseCount,
        ];
        this.option.series[1].data = [
          res.coachCount,
          res.zhuShouNoUseCount,
          res.shoesNoUseCount,
        ];
      }, 9000000);
    },
  },
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