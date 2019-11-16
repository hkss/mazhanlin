<template>
  <div class="manage">
    <select v-model="pinlun">
      <option value="全部" disabled>全部</option>

      <option v-for="val in water" :key="val.id" value="val.name">{{val.name}}</option>
    </select>
    <table border="1" cellpadding="20px">
      <thead>
        <tr class="tou">
          <th class="xuhao">序号</th>
          <th class="pic">用户名称</th>
          <th class="describe">评论内容</th>
          <th class="del">时间</th>
          <th class="del">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in water_manage" :key="item.id">
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
          <td>{{item.user}}</td>
          <td>{{item.con}}</td>
          <td>{{item.time|trantime}}</td>
          <td>
            <div class="shanchu" v-on:click="deltr(item.id)">删除</div>
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
  </div>
</template>
<script>

export default {

  props: ["water_manage", "water"],
  data() {
    return {
      pinlun: "全部",
      data: "",
      mask: false
    };
  },
  methods: {
    queding(id) {
      this.$emit("delmessage", id);
      this.mask = false;
    },

    delcomfirm() {
      this.mask = false;
    },
    deltr(id) {
      this.mask = true;
    },

    shifou() {
      this.add = false;
      this.mask = false;
    }
  }
};
var data = new Date();
</script>
<style scoped>
select {
  width: 838px;
  height: 38px;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
  margin: 24px 0 20px 100px;
}

table {
  border-collapse: collapse;
  border: 1px solid #ebeef5;
  text-indent: 0.5rem;
}

.tou {
  height: 47px;
  line-height: 47px;
  color: #909399;
}

.xuhao,
.describe,
.del {
  width: 210px;
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

</style>