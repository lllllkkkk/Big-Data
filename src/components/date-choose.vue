<template>
  <div class="date-choose">
    <div>今日散滑时间</div>
    <div class="start-time">
      <span>开始时间</span
      ><el-date-picker
        v-model="startTime"
        type="datetime"
        @change="onChangeStartTime"
        placeholder="选择开始时间"
      ></el-date-picker>
    </div>
    <div class="end-time">
      <span>结束时间</span
      ><el-date-picker
        v-model="endTime"
        type="datetime"
        placeholder="选择结束时间"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
// import 'moment'
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
    };
  },
  mounted() {},
  methods: {
    onChangeStartTime(val){
      console.log(val,'修改开始时间')
    }
  },
};
</script>

<style scoped>
.date-choose {
  display: flex;
  flex-direction: column;
}
.start-time span{
  font-size: 12px;
}
.start-time .el-date-editor {
  margin-left: 10px;
}
.start-time >>> .el-date-editor .el-input__inner{
  border: none;
}
.end-time span{
  font-size: 12px;
}
.end-time .el-date-editor {
  margin-left: 10px;
}
.end-time >>> .el-date-editor .el-input__inner{
  border: none;
}
</style>