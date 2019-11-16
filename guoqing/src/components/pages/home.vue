<template>
  <div class="home">
    <h1>欢迎进入{{type|trantype}}系统</h1>
    <p>welcome</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    this.type = localStorage.getItem("type");
  },
  filters: {
    trantype(e) {
      return (e = 1 ? "普通管理员" : "");
    }
  }
};
</script>
<style scoped>
h1 {
  font-size: 36px;
  line-height: 60px;
  color: #ff8247;
  margin-left: 24px;
}
</style>