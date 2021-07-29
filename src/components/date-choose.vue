<template>
  <div class="date-choose">
    <div>
      <span>开始时间</span
      ><el-date-picker
        v-model="startTime"
        type="datetime"
        placeholder="选择日期时间"
      ></el-date-picker>
    </div>
    <div>
      <span>结束时间</span
      ><el-date-picker
        v-model="endTime"
        type="datetime"
        placeholder="选择日期时间"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.date-choose {
  display: flex;
  flex-direction: column;
}
</style>