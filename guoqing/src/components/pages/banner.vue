<template>
  <div class="banner">
    <h1 type="button" class="btn btn-default">banner管理</h1>
    <div class="tianjia" @click.self="cancel()">添加</div>

    <div class="mask" v-show="add" @click.self="shifou()">
      <div class="con">
        <h1>添加banner</h1>
        <div class="con_box">
          <div class="con_top">
            <span class="pic_top">图片</span>
            <div class="box_bot">
              <p>+</p>
              <input class="box_bot1" type="file" accept="image" />
            </div>
          </div>

          <div>
            <span>描述</span>
            <input type="text" placeholder="描述" v-model="describe" class="des" />
          </div>
        </div>

        <div class="confirm">
          <div id="add" @click="tianjia">添加</div>
          <div id="cancel" @click.self="shifou()">取消</div>
        </div>
      </div>
    </div>

    <table border="1" cellpadding="20px">
      <thead>
        <tr class="tou">
          <th class="xuhao">序号</th>
          <th class="pic">图片</th>
          <th class="describe">描述</th>
          <th class="del">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in goods" :key="item.id">
          <div class="delcomfirm" v-show="mask" @click.self="delcomfirm()">
            <div class="del_con" v-show="mask">
              <h1>确定删除么</h1>

              <div class="confirm">
                <div id="add" @click="queding()">确定</div>
                <div id="cancel" @click.self="shifou()">取消</div>
              </div>
            </div>
          </div>

          <td>{{index+1}}</td>
          <td>
            <img :src="item.img" alt />
          </td>
          <td>{{item.describe}}</td>
          <td>
            <div class="shanchu" @click="deltr(index)">删除</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <p></p>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  props: ["goods"],
  data() {
    return {
      describe: "",
      des: "",
      mask: false,
      add: false
    };
  },
  methods: {
    queding() {
     
      this.mask = false;
    },

    delcomfirm() {
      this.mask = false;
    },
    deltr(index) {
      localStorage.setItem('i',index)
      this.mask = true; this.$emit("delNews");
    },
    cancel() {
      this.add = true;
    },
    shifou() {
      this.add = false;
      this.mask = false;
    },
    tianjia() {
      (this.des = this.describe), (this.add = false);
      this.$emit('addnews',this.describe)
    }
  }
};
</script>
<style scoped>
.banner {
    width: 100%;
    height: 100%;
    padding-left: 20px;
  }
  
  input[class="box_bot1"] {
    position: absolute; 
    left: 50%;
    top: 50%;
    background: red;
    width: 20px;
    height: 20px;
    opacity: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
  
  .tianjia {
    background: #fff;
    width: 68px;
    height: 38px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    text-align: center;
    line-height: 38px;
  }
  
  table {
    border-collapse: collapse;
    border: 1px solid #ebeef5;
    text-indent: 0.5rem;
    margin-left: 100px;
    margin-top: 20px;
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
    height: 64px;
    line-height: 64px;
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
  
  .mask {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .con {
    width: 660px;
    height: 350px;
  
    background: #ffffff;
    position: absolute;
    left: 15px;
    top: 100px;
    bottom: 0px;
    right: 0px;
    margin: auto;
    padding-left: 20px;
    position: relative;
  }
  
  .con h1 {
    font-size: 16px;
    line-height: 60px;
  }
  
  .con_top {
    padding-bottom: 85px;
  }
  
  .con_box {
    position: relative;
    /* padding: 32px 0 0 26px; */
  }
  
  .box_bot {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px dashed #000;
    position: absolute;
    left: 55px;
    top: 0px;
    text-align: center;
    line-height: 100px;
    position: relative;
    font-size: 40px;
    border-radius: 15px;
  }
  
  .pic_top {
    margin-top: 15px;
    display: inline-block;
  }
  
  input[class="des"] {
    width: 500px;
    height: 38px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    margin-left: 55px;
    text-indent: 1rem;
  }
  
  .mask .confirm {
    width: 160px;
    height: 40px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  
  .confirm div {
    float: right;
  }
  
</style>