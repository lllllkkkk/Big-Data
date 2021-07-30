<template>
  <div class="home">
    <!-- <div> -->
      <div class="left">
        <div class="left-top">
          <div class="time-and-people" style="border:solid 1px red;">
            <DateChoose></DateChoose>
            <LineCharts></LineCharts>
          </div>
          <div class="lyout-charts" style="border:solid 1px red;">
            <VenueLyoutCharts></VenueLyoutCharts>
          </div>
        </div>

        <div class="bar-and-pie">
          <div class="bar-charts" style="width:460px;border:solid 1px red;">
            <BarCharts></BarCharts>
          </div>
          <div class="pie-charts"  style="width:470px;border:solid 1px red;">
            <PieCharts></PieCharts>
          </div>
        </div>
      </div>
      <div class="right">
        <div style="width:450px;height:850px;border:solid 1px red;">
          <PriceList></PriceList>
        </div>
        <div style="width:450px;height:850px;border:solid 1px red;">
          <ShufflingFigure></ShufflingFigure>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

import DateChoose from "../../components/date-choose.vue";
import BarCharts from "../../components/bar-chart.vue";
import LineCharts from "../../components/line-chart.vue";
import PieCharts from "../../components/pie-chart.vue";
import PriceList from "../../components/price-list.vue";
import ShufflingFigure from "../../components/shuffling-figure.vue";
import VenueLyoutCharts from "../../components/venue-lyout-charts.vue";
export default {
  components: {
    DateChoose,
    BarCharts,
    LineCharts,
    PieCharts,
    PriceList,
    ShufflingFigure,
    VenueLyoutCharts,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(process.env.NODE_ENV, "llll");
    console.log(this.getOnIcePeople());
  },
  methods: {
    async getOnIcePeople() {
      //   let obj = {
      //     startDateTime: "2021-07-29 15:01:00",
      //     endDateTime: "2021-07-29 15:01:00",
      //     shopNum: "1001",
      //   };
      axios
        .get(
          "http://192.168.1.97:8092/managementSystem/wks/getNumberOfPeople?startDateTime='2021-05-11 8:30:00'&endDateTime='2021-05-11 17:00:00'&shopNum='0001'"
        )
        .then((response) => {
          console.log(response, "ksdf");
        });
    },
    //     let res = await HomeDomain.getOnIcePeople(obj)
    //     console.log(res,'skjdc')
    // }
  },
};
</script>

<style scoped>
.home {
  display: flex;
  /* padding-top: 20px; */
  background-image: url('../../assets/image/bg.jpg') ;
  background-repeat:no-repeat;
  color: #fff;
}
.left {
  width: 930px;
  
}
.left-top {
  display: flex;
}
.lyout-charts {
  width: 455px;
  height: 420px;
  margin-left: 20px;
}
.time-and-people {
  width: 450px;
  height: 420px;
}
.bar-and-pie {
  height: 420px;
  display: flex;
  margin-top: 20px;
}
.right{
  display: flex;
  margin-left: 20px;
}
</style>