<template>
  <div class="left">
    <ul @click="isshow=!isshow">
      <router-link to="/index/banner" active-class="active">bannner管理</router-link>
      <router-link to="/index/family" active-class="active">家教管理</router-link>
      <router-link to="/index/backwater" active-class="active">水站管理</router-link>
      <router-link to="/index/main" active-class="active">维修管理</router-link>
      <router-link to="/index/communi" active-class="active">通信管理</router-link>
      <router-link to="/index/updatepass" active-class="active">修改密码</router-link>

    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: true
    };
  }
};
</script>
<style scoped>
.left {
  background: #ffd39b;
  width: 200px;
  height: 100%;
}
ul {
  margin-top: 5px;
  margin-left: 5px;
  width: 190px;
  height: 100%;
}
a {
  width: 190px;
  height: 30px;
  background: ffd39b;
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  display: block;
}

.active {
  background: #ff8247;
}
</style>