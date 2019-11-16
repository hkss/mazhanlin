<template>
  <div class="login" @click.self="isshow=false" >
    <div class="mask">
      <div class="box">
        <h1>登录</h1>

        <div class="role" :class="{'form-control':true}">
          <div class="role_input">
            <input type="text" v-model="user.type" placeholder="请输入角色" @focus="xuan_con" />
          </div>

          <ol v-show="isshow" class="wrap_ul">
            <div class="box_ul">
              <li v-for="(item,index) in arr" :key="index" @click="xuanze(index)">{{item}}</li>
            </div>
          </ol>
        </div>

        <div class="con" v-show="isshow" :class="[ishow=true?'con_after':'']"></div>

        <div class="hidenn" v-if="!isshow">
          <div>
            <input type="text" class="form-control" placeholder="请输入账号" v-model="user.name" />
          </div>
          <div>
            <input type="password" class="form-control" placeholder="请输入密码" v-model="user.pass" />
          </div>
        </div>
        <div>
          <button class="login_btn" @click="denlu()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        type: "",
        name: "",
        pass: ""
      },
      arr: ["超级管理员", "普通管理员"],
      isshow: false,
    };
  },

  methods: {
    xuan_con() {
      this.isshow = true;
    },
    //点击li
    xuanze(i) {
      console.log(i)
      this.user.type = this.arr[i];
      this.isshow = false;
    },
    denlu() {
      this.Event.$emit("ss", this.user.pass);
      if (
        this.user.type == this.arr[1] &&
        this.user.name == "hkss" &&
        this.user.pass =='123'
      ) {
        localStorage.setItem("name", this.user.name);
        localStorage.setItem("pass", this.user.pass);
        localStorage.setItem("type", this.user.type);
        this.$router.push("/index");
      } else {
        alert("请输入正确的密码");
      }
    }
  }
};
</script>
<style scoped>
.login{
  width: 100%;height: 100%;
}
ol {
  text-align: start;
}

li {
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  color: #000;
}

.role {
  position: relative;
}

.box_ul {
  height: 87px;

  border: 1px solid #d7dae1;

  box-shadow: -2px -4px 5px 0px #f3f3f3;

  width: 320px;
  border-radius: 5px;
}

.wrap_ul {
  width: 320px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: 35px;
  margin-left: -160px;
  border-top: 1px solid #d4d7de;
  border-bottom: 1px solid #d4d7de;
  border-radius: 5px;
  box-shadow: 5px 10px 5px 1px #f3f3f3;
}

.con_after {
  display: block;
  content: "";
  clear: both;
  width: 320px;
  height: 100px;
}

.login {
  width: 100vw;
  background: #ffe7ba;
  height: 100vh;
}

h1 {
  color: orange;
  font-size: 35px;
  line-height: 60px;
}

.box {
  width: 400px;
  height: 300px;
  background: #fff;
  color: #dccfcc;

  position: absolute;
  text-align: center;
  left: 50%;

  top: 50%;
  margin-left: -200px;
  margin-top: -150px;
  border-radius: 20px;
}

input {
  margin-top: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #dccfcc;
  height: 38px;
  width: 320px;
  padding: 0;
}

.login_btn {
  background: #c0ff3e;
  width: 70px;
  height: 40px;
  color: #fff;
  margin-top: 10px;
}

</style>