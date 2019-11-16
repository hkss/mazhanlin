<template>
  <div class="water">
    <div class="btn">添加</div>
    <table border="1" cellpadding="20px" v-show="showww">
      <thead>
        <tr class="tou">
          <th class="xuhao">序号</th>
          <th class="pic">水站名称</th>
          <th class="describe">电话</th>
          <th class="del1">价格</th>
          <th class="del1">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in water" :key="item.id">
          <div class="delcomfirm" v-show="mask" @click.self="delcomfirm()">
            <div class="del_con" v-show="mask">
              <h1>确定删除么</h1>

              <div class="confirm">
                <div id="add" @click="queding(item.id)">确定</div>
                <div id="cancel" @click.self="shifou()">取消</div>
              </div>
            </div>
          </div>
          <td>{{index+1}}</td>
          <td class="picaa">{{item.name}}</td>
          <td>{{item.tel|totel}}</td>
          <td>{{item.price}}</td>
          <td>
            <div class="box">
              <div class="cancel" @click="chart(index)">查看</div>
              <div class="add" @click="deltr(item.id)">删除</div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            <p></p>
          </td>
        </tr>
      </tfoot>
    </table>

    <div
      slot="chankan_box_pubicl"
      class="chankan_box"
      v-show="!showww"
      @click.self="showww11111111()"
    >
      <div class="chankan">
        <p>
          <span>维修名称:</span>
          {{water[num].name}}
        </p>
        <p>
          <span>电话:</span>
          {{water[num].tel}}
        </p>
        <p>
          <span>价格:</span>
          {{water[num].price}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["water"],
  data() {
    return {
      des: "",

      add: false,
      mask: false,
      showww: true,
      num: 0
    };
  },
  methods: {
    queding(id) {
      this.$emit("delwater", id);
      this.mask = false;
    },

    delcomfirm() {
      this.mask = false;
    },
    deltr(id) {
      this.mask = true;
      // this.$emit("delNews", id);
    },

    shifou() {
      this.add = false;
      this.mask = false;
    },

    showww11111111() {
      this.showww = true;
    },
    chart(e) {
      console.log(this.water[e]);
      this.num = e;
      this.showww = false;
    }
  },
  filters: {
    totel(e) {
      return e.slice(0, 3) + "****" + e.slice(7);
    }
  }
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #ebeef5;
  text-indent: 0.5rem;
}

.picaa {
  text-align: center;
}

.tou {
  height: 47px;
  line-height: 47px;
  color: #909399;
}

.xuhao,
.describe,
.del1 {
  width: 210px;
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

ul {
  height: 100%;
}

.pic {
  width: 300px;
}

tbody tr {
  height: 58px;
  line-height: 58px;
  color: #606266;
}

th {
  text-align: left;
}

.shanchu {
  width: 70px;
  height: 40px;
  background: #f56c6c;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  margin-left: 10px;
}

tfoot tr {
  height: 50px;
  width: 100%;
}

.add,
.cancel {
  border-radius: 5px;
  float: left;
  width: 70px;
  height: 38px;
  text-align: center;
  line-height: 38px;
}

.add {
  background: #f56c6c;
  color: #fff;
  margin-left: 7px;
}

.cancel {
  border: 1px solid #dcdfe6;
  margin-right: 16px;
  margin-left: 10px;
}

</style>