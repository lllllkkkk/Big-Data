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
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      pickerOptions: {
        disabledDate: (time) => {
          return this.dealDisabledDate(time);
        },
      },
    };
  },
  mounted() {},
  methods: {
    //选择开始日期
    onChangeStartTime(val) {
      console.log(val, "修改开始时间");
      this.startTime = val;
      this.$emit("start-time", val);
    },
    //选择结束日期
    onChangeEndTime(val) {
      console.log(val, "修改结束时间");
      this.endTime = val;
      this.$emit("end-time", val);
    },
    //禁用今日以前的时间
    dealDisabledDate(time) {
      let strDate = new Date().toLocaleDateString();
      let times = new Date(strDate).getTime();
      return time.getTime() < times;
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
  height: 16px;
  position: absolute;
  left: 120px;
  top: 8px;
}
</style>