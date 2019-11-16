<template>
  <div class="index">
    <v-header></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right :goods="goods"></v-right>
    </div>
  </div>
</template>
<script>
import vHeader from "../views/header";
import vLeft from "../views/left";
import vRight from "../views/right";

export default {
  data() {
    return {
      goods: [
        {
          id: "1",
          describe: "社区1",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/77646/13/11689/70255/5d91b980E1f03722e/2e00b508a3b7e20e.jpg.webp",
          del: "删除"
        },
        {
          id: "2",
          describe: "社区2",
          img:
            "//img13.360buyimg.com/pop/s590x470_jfs/t1/61790/24/11679/79274/5d91aa83E8f9b6ac8/291e53ae73886c6d.jpg.webp",
          del: "删除"
        },
        {
          id: "3",
          describe: "社区3",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/50915/23/12137/75172/5d904900E140c9506/17378ae084034491.jpg.webp",
          del: "删除"
        }
      ]
    };
  },
  components: {
    vHeader,
    vLeft,
    vRight
  }
};
</script>
<style scoped>
.index {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
.main {
  display: flex;
  flex: 1;
  background: olivedrab;
}
</style>