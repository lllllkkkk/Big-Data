<template>
  <div class="date-choose">
    <span class="textSty">散滑时间</span>
    <img class="imgSty" src="../assets/image/arrow.png" alt="" />
    <div class="start-time">
      <span>开始时间</span
      ><el-date-picker
        v-model="startTime"
        type="datetime"
        @change="onChangeStartTime"
        :picker-options="pickerOptions"
        placeholder="选择开始时间"
        format="yyyy-MM-dd HH:mm:ss"
      ></el-date-picker>
    </div>
    <div class="end-time">
      <span>结束时间</span
      ><el-date-picker
        v-model="endTime"
        type="datetime"
        @change="onChangeEndTime"
        :picker-options="pickerOptions"
        placeholder="选择结束时间"
        format="yyyy-MM-dd HH:mm:ss"
      ></el-date-picker>
    </div>
    <div class="lineCharts">
      <span class="textSty"> 上冰人数 </span>
      <img class="imgSty" src="../assets/image/arrow.png" alt="" />
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import apiUrl from "../api/index";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
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
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PolarComponent,
  GridComponent,
]);

export default {
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  data() {
    return {
      dataList:[],
      startTime: "",
      endTime: "",
      pickerOptions: {
        disabledDate: (time) => {
          return this.dealDisabledDate(time);
        },
      },
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
            areaStyle: {},
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    //选择开始日期
    onChangeStartTime(val) {
      this.startTime = moment(val).format("YYYY-MM-DD HH:mm:ss");

      if (this.startTime && this.startTime !== "Invalid date") {
        this.getOnIcePeople();
      }
    },
    //选择结束日期
    onChangeEndTime(val) {
      this.endTime = moment(val).format("YYYY-MM-DD HH:mm:ss");
      if (this.endTime && this.endTime !== "Invalid date") {
        this.getOnIcePeople();
      }
    },
    //禁用今日以前的时间
    dealDisabledDate(time) {
      let strDate = new Date().toLocaleDateString();
      let times = new Date(strDate).getTime();
      return time.getTime() < times;
    },
    async getOnIcePeople() {
      // if (this.endTime && this.startTime) {
        let res = await apiUrl.getNumberOfPeople(
          this.startTime,
          this.endTime,
          "1001"
        );
        this.dataList = res;
        this.option.xAxis.data = res.map(item => item.dateTime)
        this.option.series[0].data = res.map(item => item.peopleNum)
      // }
      setInterval(async () => {
        if (this.endTime && this.startTime) {
        let res = await apiUrl.getNumberOfPeople(
          this.startTime,
          this.endTime,
          "1001"
        );
        this.dataList = res;
        this.option.xAxis.data = res.map(item => item.dateTime)
        this.option.series[0].data = res.map(item => item.peopleNum)
      }
      },900000)
    },
  },
};
</script>

<style scoped>
.date-choose {
  display: flex;
  flex-direction: column;
  position: relative;
}
.start-time {
  margin-top: 18px;
}
.start-time span {
  font-size: 16px;
  letter-spacing: 3px;
  background-image: linear-gradient(#fdfb93, #a9eec5);
  -webkit-background-clip: text;
  color: transparent;
}
.start-time .el-date-editor {
  margin-left: 5px;
}
.start-time >>> .el-date-editor .el-input__inner {
  border: none;
  /* background: rgb(15, 15, 42); */
  -webkit-background-clip: text;
}
.end-time span {
  font-size: 16px;
  letter-spacing: 3px;
  background-image: linear-gradient(#fdfb93, #a9eec5);
  -webkit-background-clip: text;
  color: transparent;
}
.end-time .el-date-editor {
  margin-left: 5px;
}
.end-time >>> .el-date-editor .el-input__inner {
  border: none;
  /* background: rgb(15, 15, 42); */
  -webkit-background-clip: text;
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
.lineCharts {
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
}
</style>