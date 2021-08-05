<template>
  <!-- <div id="main2" style="width: 400px; height: 300px;background:red"> {{time}} </div> -->
  <div class="pie-chart">
    <v-chart class="chart" :option="option" />
    <span class="people-sum-sty">场馆接待总人数：{{ peopleSum }}</span>
  </div>
</template>

<script>
import api from "../api/index";
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
    [THEME_KEY]: "light",
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
            data: [],
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
      peopleSum: "",
    };
  },
  async mounted() {
    let res = await api.getSumPeople("0001");
    if(res.headCount!=0){
          this.option.series[0].data = [
          {
            value: res.bingQiuCount,
            name: `冰球-${(res.bingQiuCount / res.headCount) * 100 + '%'}`,
          },
          {
            value: res.huaYangCount,
            name: `花样-${(res.huaYangCount / res.headCount) * 100 + '%'}`,
          },
          {
            value: res.sanKeCount,
            name: `散滑-${(res.sanKeCount / res.headCount) * 100 + '%'}`,
          },
        ];
        }
    this.peopleSum = res.headCount;
    this.getSumPeople();
  },
  methods: {
    async getSumPeople() {
      // setTimeout( this.getSumPeople(), 10000  );
      setInterval(async () => {
        let res = await api.getSumPeople("0001");
        if(res.headCount!=0){
          this.option.series[0].data = [
          {
            value: res.bingQiuCount,
            name: `冰球-${(res.bingQiuCount / res.headCount) * 100 + '%'}`,
          },
          {
            value: res.huaYangCount,
            name: `花样-${(res.huaYangCount / res.headCount) * 100 + '%'}`,
          },
          {
            value: res.sanKeCount,
            name: `散滑-${(res.sanKeCount / res.headCount) * 100 + '%'}`,
          },
        ];
        }
        
        this.peopleSum = res.headCount;
      }, 900000);
    },
  },
};
</script>

<style scoped>
.pie-chart {
  position: relative;
}
.chart {
  height: 350px;
  width: 430px;
  margin-left: 25px;
  margin-top: 40px;
}
.people-sum-sty {
  position: absolute;
  top: 0;
  left: 150px;
}
</style>