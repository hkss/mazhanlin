<template>
  <div class="updatapass">
    <h1>修改密码</h1>
    <div class="delcomfirm" v-show="mask" @click.self="delcomfirm()">
      <div class="del_con" v-show="mask">
        <h1>确定修改么</h1>

        <div class="confirm">
          <div id="add" @click="queding(user.newpass)">确定</div>
          <div id="cancel" @click.self="shifou()">取消</div>
        </div>
      </div>
    </div>
    <div class="box">
      <form action>
        <ul>
          <li>
            <span>账号</span>
            <input type="text" name="username" placeholder="manage" v-model="user.manage" />
          </li>
          <li>
            <span>原始密码</span>
            <input type="text" name="pass" placeholder="请输入原始密码" v-model="user.pass" />
          </li>
          <li>
            <span>新密码</span>
            <input type="password" name="newpass" placeholder="请输入新密码" v-model="user.newpass" />
          </li>
          <li>
            <span>确认密码</span>
            <input type="password" name="comf_pass" placeholder="请确认密码" v-model="user.comf_pass" />
          </li>
        </ul>
      </form>
      <div class="btn" @click="updata">修改</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        manage: "",
        pass: "",
        newpass: "",

        comf_pass: ""
      },
      a: "",
      mask: false,
      arr: []
    };
  },
  methods: {
    queding(pass) {
      this.$emit("updatapass", pass);
      console.log(pass);
      this.mask = false;
      localStorage.setItem("name", this.user.manage);
      localStorage.setItem("pass", this.user.newpass);
      this.$router.push("/");
    },

    delcomfirm() {
      this.mask = false;
    },
    shifou() {
      this.add = false;
      this.mask = false;
    },

    updata() {
      if (
        (this.user.comf_pass == "") |
        (this.user.manage == "") |
        (this.user.newpass == "") |
        (this.user.manage == "")
      ) {
        alert("全都是必填项");
      }
      {
        if ((this.user.name = localStorage.getItem("name"))) {
          if (this.user.pass != localStorage.getItem("pass")) {
            alert("请输入正确的密码");
          } else {
            if (this.user.newpass == this.user.comf_pass) {
              this.mask = true;
            } else {
              alert("确认密码和新密码不一致");
            }
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.updatapass {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.delcomfirm {
  z-index: 99;
}

.box {
  padding-left: 24px;
  position: relative;
}

.btn {
  width: 68px;
  height: 38px;
  border: 1px solid #dde0e7;
  text-align: center;
  border-radius: 5px;
  color: #606266;
  text-align: center;
  line-height: 38px;
  position: absolute;
  left: 50%;
  margin-left: -34px;
  margin-top: 10px;
}

h1 {
  font-size: 38px;
  line-height: 60px;
  color: #ff8247;
  padding-left: 22px;
}

li {
  margin-top: 10px;
}

span {
  height: 40px;
  line-height: 40px;
  width: 101px;
  display: inline-block;
  text-align: center;
}

input {
  width: 910px;
  height: 38px;
  border: 1px solid #dde0e7;
  border-radius: 5px;
  text-indent: 1rem;
}

</style>