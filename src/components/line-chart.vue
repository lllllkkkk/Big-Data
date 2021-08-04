<template>
  <!-- <div id="main2" style="width: 400px; height: 300px;background:red"> {{time}} </div> -->
  <div class="lineCharts">
    <span class="textSty"> 上冰人数 </span>
    <img class="imgSty" src="../assets/image/arrow.png" alt="" />
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      // time:0
    };
  },
  mounted() {
    this.getOnIcePeople();
  },
  methods: {
    async getOnIcePeople() {
      if (this.chooseEndTime && this.chooseStartTime) {
        let url = `http://192.168.1.97:8092/managementSystem/wks/getNumberOfPeople?startDateTime=${this.chooseStartTime}&endDateTime=${this.chooseEndTime}&shopNum=0001`;
        let res = axios.get(url);
        console.log(res);
      }
    },
  },
};
</script>

<style scoped>
.lineCharts {
  margin-top: 30px;
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
  height: 16px;
  position: absolute;
  left: 120px;
  top: 8px;
}
</style>