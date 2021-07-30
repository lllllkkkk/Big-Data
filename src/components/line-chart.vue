<template>
  <div id="main2" style="width: 400px; height: 300px;background:red"> {{time}} </div>
  
</template>

<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
<script>


export default {
  data() {
    return {
        time:0
    };
  }, 
  mounted() {
    //   this.getmain2()
      
  },
  methods: {
    // getmain2() {
    //     console.log(this,'kkkkk')
    //   let myChart = this.$echarts.init(document.getElementById("main2"));
    //   let option = {
    //     xAxis: {
    //       type: "category",
    //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    //     },
    //     legend: {},
    //     toolbox: {
    //       //工具栏
    //       show: true,
    //       feature: {
    //         mark: { show: true },
    //         dataView: { show: true, readOnly: false },
    //         magicType: { show: true, type: ["line", "bar"] },
    //         restore: { show: true },
    //         saveAsImage: { show: true },
    //       },
    //     },
    //     tooltip: {
    //       trigger: "axis", //显示当前列的所有信息
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       //数据   五条折线数据  line 折线
    //       {
    //         data: [820, 932, 901, 934, 1290, 1330, 1320],
    //         type: "line",
    //       },
    //       {
    //         data: [11, 22, 33, 44, 55, 66, 77],
    //         type: "line",
    //       },
    //       {
    //         data: [111, 222, 333, 444, 555, 666, 777],
    //         type: "line",
    //       },
    //       {
    //         data: [711, 622, 533, 444, 355, 266, 177],
    //         type: "line",
    //       },
    //       {
    //         data: [611, 422, 533, 644, 755, 666, 177],
    //         type: "line",
    //       },
    //     ],
    //   };

    //   setInterval(function () {
    //     option.series.map((item) => {
    //       item.data.shift();
    //       return item.data.push(parseInt(Math.random() * 1500));
    //     });
    //     myChart.setOption(option);
    //   }, 2000);
    // },
  },
};
</script>

<style lang='scss' scoped>
</style>