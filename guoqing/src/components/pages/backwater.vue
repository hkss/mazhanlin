<template>
  <div class="backwater">
    <h1>水站管理</h1>
    <div class="box">
      <ul>
        <router-link to="/index/backwater/water" active-class="active">水站</router-link>
        <router-link to="/index/backwater/water_manage" active-class="active">水站评论</router-link>
      </ul>
      <router-view
        :water="water"
        :water_manage="water_manage"
        @delwater="delwater1($event)"
        @delmessage="delmsg($event)"
      ></router-view>
      
    </div>
  </div>
</template>
<script>

export default {


  methods: {
    delwater1(e) {
      var i = this.water.findIndex(item => item.id == e);
      this.water.splice(i, 1);
    },
    delmsg(e) {
      var i = this.water_manage.findIndex(item => {
        item.id == e;
      });
      this.water_manage.splice(i, 1);
    }
  },
  data() {
    return {
      water: [
        {
          id: "1",
          name: "水站1",
          tel: "13772346819",
          price: "40员一桶"
        },
        {
          id: "2",
          name: "水站2",
          tel: "15982841634",
          price: "60员一桶"
        },
        {
          id: "3",
          name: "水站3",
          tel: "15982841634",
          price: "60员一桶"
        },
        {
          id: "4",
          name: "水站4",
          tel: "15982841634",
          price: "60员一桶"
        },
        {
          id: "5",
          name: "水站5",
          tel: "15982841634",
          price: "60员一桶"
        },
        {
          id: "6",
          name: "水站6",
          tel: "15982841634",
          price: "60员一桶"
        }
      ],
      water_manage: [
        {
          id: "1",
          user: "user1",
          con: "挺好的",
          time: "2019-7-15"
        },
        {
          id: "2",
          user: "user2",
          con: "服务态度很好哦",
          time: "2019-7-12"
        },
        {
          id: "3",
          user: "user3",
          con: "有点贵",
          time: "2019-7-11"
        },
        {
          id: "4",
          user: "user4",
          con: "有点贵",
          time: "2019-7-10"
        },
        {
          id: "5",
          user: "user5",
          con: "有点贵",
          time: "2019-7-13"
        },
        {
          id: "6",
          user: "user6",
          con: "有点贵",
          time: "2019-7-12"
        }
      ]
    };
  }
};
</script>
<style scoped>
.backwater {
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