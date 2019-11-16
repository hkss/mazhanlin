<template>
  <div class="family">
    <h1>家教管理</h1>
    <div class="box">
      <ul>
        <li>
          <router-link to="/index/family/fambanner" active-class="active">家教banner</router-link>
        </li>
        <li>
          <router-link to="/index/family/famtype" active-class="active">家教类型</router-link>
        </li>
        <li>
          <router-link to="/index/family/famranking" active-class="active">家教排行</router-link>
        </li>
      </ul>
      <div class="btn" >添加</div>
    
      <router-view
        :fambanner="fambanner"
        :famranking="famranking"
        :famtype="famtype"
        @delNews="delfambanner($event)"
        @delfamtype="deltype($event)"
        @delfamrank="delranking($event)"
      ></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    delfambanner(e) {

      var i = this.fambanner.findIndex(item => item.id == e);
            // console.log(e,i)
      this.fambanner.splice(i+1, 1);
    },
    deltype(e) {
      var i = this.famtype.findIndex(item => item.id == e+1);
      this.famtype.splice(i, 1);
    },
    delranking(e) {
      console.log(e)
      var i = this.famranking.findIndex(item => item.id == e+1);
      this.famranking.splice(i, 1);
    }
  },

  data() {
    return { mask: false,
      add: false,  describe: "",
      des: "",
      fambanner: [
        {
          id: "1",
          type: "teacher banner1",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/77646/13/11689/70255/5d91b980E1f03722e/2e00b508a3b7e20e.jpg.webp",
          del: "删除"
        },
        {
          id: "2",
          type: "teacher banner2",
          img:
            "//img13.360buyimg.com/pop/s590x470_jfs/t1/61790/24/11679/79274/5d91aa83E8f9b6ac8/291e53ae73886c6d.jpg.webp",
          del: "删除"
        },
        {
          id: "3",
          type: "teacher banner3",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/50915/23/12137/75172/5d904900E140c9506/17378ae084034491.jpg.webp",
          del: "删除"
        },
        {
          id: "4",
          type: "banner4",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/50915/23/12137/75172/5d904900E140c9506/17378ae084034491.jpg.webp",
          del: "删除"
        },
        {
          id: "5",
          type: "banner5",
          img:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/50915/23/12137/75172/5d904900E140c9506/17378ae084034491.jpg.webp",
          del: "删除"
        }
      ],
      famranking: [
        {
          id: "1",

          img: "static/img/1jiajiao.webp",
          num: 20,
          shouke: "删除"
        },
        {
          id: "2",

          img: "static/img/2jiajiao.jpg",

          num: 3000,
          shouke: "删除"
        },
        {
          id: "3",

          img: "static/img/3jiajiao.jpg",

          num: 200,
          shouke: "删除"
        },
        {
          id: "4",
          img: "static/img/4jiajiao.webp",

          num: 400,
          shouke: "删除"
        },
        {
          id: "5",
          img: "static/img/5jiajiao.webp",

          num: 400,
          shouke: "删除"
        }
      ],

      famtype: [
        {
          id: "1",
          type: "初中",
          img: "static/img/chuzhon.jpg",
          del: "删除"
        },
        {
          id: "2",
          type: "高中",
          img: "static/img/gaozhon.jpg",
          del: "删除"
        },
        {
          id: "3",
          type: "小学",
          img: "static/img/samll.jpg",
          del: "删除"
        }
      ]
    };
  }
};
</script>
<style scoped>
.family {
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
}

.btn {
  border: 1px solid #e4e7ed;
  width: 68px;
  height: 38px;
  color: #7a7bb5;
  line-height: 38px;
  text-align: center;
  margin: 15px 0 20px 20px;
  border-radius: 5px;
}

</style>