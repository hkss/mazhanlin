<template>
  <div class="header">
    <div class="box">
      <span>{{name}}</span>
      <div class="btn" @click="tuichu">退出登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name")
    };
  },
  methods: {
    tuichu() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.header {
  height: 80px;
  width: 100%;
  background: #ff8247;
}
.box {
  width: 300px;
  float: right;
  height: 80px;
}
span {
  line-height: 80px;
  color: #fff;
  font-size: 40px;
}
.btn {
  color: #606266;
  float: right;
  width: 98px;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  height: 38px;
  border: 1px solid #b6b4b6;
  background: #fff;
  margin: 20px 45px 0 50px;
}
</style>