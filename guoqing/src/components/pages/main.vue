<template>
  <div class="main">
    <h1>维修管理</h1>
    <div class="box">
      <ul>
        <router-link to="/index/main/maintain" active-class="active">维修</router-link>
        <router-link to="/index/main/main_con" active-class="active">维修评论</router-link>
      </ul>
      <router-view
        :maintain="maintain"
        :main_con="main_con"
        @delmain="del_maintain($event)"
        @del_con="del_con($event)"
     
      ></router-view>
    </div>
  </div>
</template>
<script>

export default {

  methods: {
    del_maintain(e) {
      var i = this.maintain.findIndex(item => item.id == e);
      this.maintain.splice(i, 1);
    },
    del_con(e) {
      var i = this.main_con.findIndex(item => item.id == e);
      this.main_con.splice(i, 1);
    }
  },
  data() {
    return {
      maintain: [
        {
          id: "1",
          name: "维修站1",
          tel: "13772346819",
          type: "手机、电脑、ipad"
        },
        {
          id: "2",
          name: "维修站2",
          tel: "1598284134",
          type: "家具、家电"
        },
        {
          id: "3",
          name: "维修站3",
          tel: "1598284134",
          type: "家具、家电"
        },
        {
          id: "4",
          name: "维修站4",
          tel: "1598284134",
          type: "家具、家电"
        },
        {
          id: "5",
          name: "维修站5",
          tel: "1598284134",
          type: "家具、家电"
        },
        {
          id: "6",
          name: "维修站6",
          tel: "1598284134",
          type: "家具、家电"
        }
      ],

      main_con: [
        {
          id: "1",
          user: "user1",
          con: "服务很好",
          time: "2019-7-16",
          shanchu: "删除"
        },
        {
          id: "2",
          user: "user2",
          con: "价格实惠",
          time: "2019-7-19",
          shanchu: "删除"
        },
        {
          id: "3",
          user: "user3",
          con: "乱收费",
          time: "2019-7-19",
          shanchu: "删除"
        },
        {
          id: "4",
          user: "user4",
          con: "乱收费",
          time: "2019-7-19",
          shanchu: "删除"
        },
        {
          id: "5",
          user: "user5",
          con: "乱收费",
          time: "2019-7-19",
          shanchu: "删除"
        },
        {
          id: "6",
          user: "user6",
          con: "乱收费",
          time: "2019-7-19",
          shanchu: "删除"
        }
      ]
    };
  }
};

</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.box {
  padding: 0px 60px 80px 60px;
}
h1 {
  font-size: 38px;
  line-height: 60px;
  color: #ff8247;
  padding-left: 22px;
}
ul {
  border-bottom: 2px solid #e4e7ed;
  margin-top: 23px;
  height: 36px;
  width: 100%;
}

a {
  font-size: 15px;
  height: 36px;
  float: left;
  margin-right: 40px;
  line-height: 36px;
}
.active {
  border-bottom: 2px solid #ff8247;
  color: #ff8247;
}
</style>