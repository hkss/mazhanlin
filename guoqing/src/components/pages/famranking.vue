<template>
  <div class="famtype">
    <table border="1" cellpadding="20px">
      <thead>
        <tr class="tou">
          <th class="xuhao">序号</th>
          <th class="pic">图片</th>
          <th class="describe">报名人数</th>
          <th class="del">授课机构</th>
          <th class="del">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in famranking" :key="item.id">
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
          <td class="picaa">
            <img :src="item.img" alt />
          </td>
          <td>{{item.num}}</td>
          <td></td>
          <td>
            <div class="shanchu" v-on:click="deltr(index)">删除</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            <p>{{des}}</p>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  props: ["famranking"],
  data() {
    return {
      desmiao: "",
      des: "",

      add: false,
      mask: false
    };
  },
  methods: {
    queding(id) {
      this.mask = false;
    },

    delcomfirm() {
      this.mask = false;
    },
      
    deltr(index) {this.$emit("delfamrank",index);
      this.mask = true;
    },

    shifou() {
      this.add = false;
      this.mask = false;
    }
  }
};
</script>
<style scoped>
ul {
  height: 100%;
}

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

img {
  width: 40px;
  height: 40px;
}

</style>