<template>
  <div class="home">
    <DateChoose></DateChoose>
  </div>
</template>

<script>
// import HomeDomain from "../../domain/home/index";
import axios from "axios";

import DateChoose from "../../components/date-choose.vue";
export default {
  components: {
    DateChoose,
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
          "http://192.168.1.97:8092/managementSystem/wks/getNumberOfPeople?startDateTime='2021-05-11 8:00:00'&endDateTime='2021-05-11 17:00:00'&shopNum='0001'"
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

<style lang='scss' scoped>
</style>