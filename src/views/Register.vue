<template>
  <div style=" background: url(https://s2.ax1x.com/2019/10/30/K5S8yD.jpg) no-repeat center center;" class="register">
    <div class="box">
      <div class="title-box">
        <span class="title">最牛逼的考试系统</span>
      </div>

      <div class="from-box">
        <form class="form-table" action>
          <div class="in-box">
            <div class="name">
              <!-- <div class="text">用户名:</div> -->
              <i class="iconfont icon-yonghu"></i>
              <input
                type="text"
                v-model="registerUser.username"
                placeholder="用户名"
                @blur="checkusername"
              />
            </div>
            <div class="ts">{{registerUser.msgusername}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text"><i class="iconfont icon-yonghu"></i>密码:</div> -->
              <i class="iconfont icon-password"></i>
              <input
                type="password"
                v-model="registerUser.password"
                placeholder="请输入密码"
                @blur="checkpassd"
              />
            </div>
            <div class="ts">{{registerUser.mgspassd}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text">确认密码:</div> -->
              <i class="iconfont icon-password"></i>
              <input
                type="password2"
                v-model="registerUser.password2"
                placeholder="请确认密码"
                @blur="checkpassd2"
              />
            </div>
            <div class="ts">{{registerUser.mgspassd2}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text">手机号:</div> -->
              <i class="iconfont icon-shoujihao"></i>
              <input
                type="text"
                v-model="registerUser.mobile"
                placeholder="请输入手机号"
                @blur="checkmobile"
              />
            </div>
            <div class="ts">{{registerUser.msgmobile}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text">真实姓名:</div> -->
              <i class="iconfont icon-xingming1"></i>
              <input
                type="text"
                v-model="registerUser.name"
                placeholder="请输入真实姓名"
                @blur="checkname"
              />
            </div>
            <div class="ts">{{registerUser.msgname}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text">年级:</div> -->
              <i class="iconfont icon-nianji"></i>
              <select v-model="registerUser.selected" class="select">
                <option value="大一">大一</option>
                <option value="大二">大二</option>
                <option value="大三">大三</option>
              </select>
            </div>
            <!-- <div class="ts">{{registerUser.selected}}</div> -->
          </div>

          <button class="btn" type="submit" @click="submin">注册</button>
          <div class="tiparea">
            <p>
              已有有账号？
              <router-link to="/login">立即登陆</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerUser: {
        username: "",
        mobile: "",
        password: "",
        password2: "",
        name: "",
        msgusername: "",
        mgspassd: "",
        mgspassd2: "",
        msgmobile: "",
        msgname: "",
        selected: "大一"
      },
      arr: []
    };
  },
  methods: {
    async register() {
      const res = await this.$axios.post("/users/register", {
        username: this.registerUser.username,
        password: this.registerUser.password,
        mobile: this.registerUser.mobile,
        zname: this.registerUser.name,
        classx: this.registerUser.selected
      });
    },
    submin() {
      if (
        this.arr.length == 0 &&
        this.registerUser.name != "" &&
        this.registerUser.password != ""
      ) {
        this.register();
        this.$router.push("/login");
        return;
      }
      this.arr = [];
      alert("注册失败");
      console.log(this.arr);
    },
    checkusername() {
      if (this.registerUser.username.length == 0) {
        this.registerUser.msgusername = "用户名不能为空";
        this.arr.push(false);
      } else if (this.registerUser.username.length < 2) {
        this.registerUser.msgusername = "用户名至少2个字符";
        this.arr.push(false);
      } else {
        this.registerUser.msgusername = "";
        this.arr.push(false);
      }
      this.arr = [];
      return this.registerUser.username > 2;
    },
    checkpassd() {
      var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
      if (this.registerUser.password.length == 0) {
        this.registerUser.mgspassd = "密码不能为空";
        this.arr.push(false);
      } else if (this.registerUser.password.length < 6) {
        this.arr.push(false);
        this.registerUser.mgspassd = "密码至少6个字符";
      } else if (!re.test(this.registerUser.password)) {
        this.registerUser.mgspassd = "密码必须包含英文字母大小写和数字";
        this.arr.push(false);
      } else {
        this.registerUser.mgspassd = "";
        this.arr.push(false);
      }
      this.arr = [];
      return this.registerUser.password > 2;
    },

    checkpassd2() {
      if (this.registerUser.password2.length == 0) {
        this.registerUser.mgspassd2 = "确认密码不能为空";
        this.arr.push(false);
      } else if (!this.registerUser.password2 === this.registerUser.password) {
        this.arr.push(false);
        this.registerUser.mgspassd2 = "两次密码不一样！";
      } else {
        this.registerUser.mgspassd2 = "";
      }
      this.arr = [];
    },
    checkmobile() {
      var number = /^[0-9]*$/;
      if (this.registerUser.mobile.length == 0) {
        this.registerUser.msgmobile = "手机号不能为空";
        this.arr.push(false);
      } else if (this.registerUser.mobile.length != 11) {
        this.arr.push(false);
        this.registerUser.msgmobile = "手机号为11位数字";
      } else if (!number.test(this.registerUser.mobile)) {
        this.registerUser.msgmobile = "手机号必须全部为数字";
        this.arr.push(false);
      } else {
        this.registerUser.msgmobile = "";
        this.arr.push(false);
      }
      this.arr = [];
      return this.registerUser.mobile > 2;
    },
    checkname() {
      if (this.registerUser.name.length == 0) {
        this.registerUser.msgname = "姓名不能为空";
        this.arr.push(false);
      } else if (this.registerUser.name.length < 2) {
        this.registerUser.msgname = "姓名至少2个字符";
        this.arr.push(false);
      } else {
        this.registerUser.msgname = "";
        this.arr.push(false);
      }
      this.arr = [];
      return this.registerUser.name > 2;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/init.scss";
.register {
  
   background-size: cover!important;
  position: relative;
  width: 100%;
  height: 100%;
 
  background-size: 100% 100%;
  display: flex;
  align-items: center; //垂直居中
  .box {
    width: 400px;
    margin: 0 auto;

    .title-box {
      color: #fff;
      font-size: 25px;
      text-align: center;
    }
    .from-box {
      width: 400px;
      height: 450px;
      margin-top: $mgt15;
      background-color: #fff;
      border-radius: 6px;
      display: flex;
      flex-flow: row wrap;
      align-content: space-around;
      .form-table {
        width: 90%;
        height: 90%;
        // border: 1px solid red;
        margin: 0 auto;
        margin-left: 10px;
        text-align: center;
        // display: flex;
        // flex-direction:
        // align-items: center;
        .in-box {
          width: 100%;
          display: inline-block;

          // flex-direction: column;
          margin: 0 auto;
          margin-top: $mgt10;
          .name {
            position: relative;
            margin: 0 auto;
            i {
              position: absolute;
              left: 63px;
              top: 8px;
              color: #aaaaaa;
            }
          }
          .ts {
            color: red;
            font-size: 10px;
            margin-left: $mgl80;
            margin-top: $mgt5;
            text-align: left;
          }

          input,
          select {
            width: 250px;
            height: 35px;
            margin-left: $mgl10;
            border-radius: 6px;
            border: 1px solid #c0c4cc;
            padding-left: 20px;
            box-sizing: border-box; //
            outline: none;
          }
          input:focus {
            border-style: solid;
            border-color: #03a9f4;
            box-shadow: 0 0 3px #03a9f4;
          }
          .text {
            width: 100px;
            height: 30px;
            line-height: 30px;
            text-align: right;
          }
        }
        button {
          width: 250px;
          height: 40px;
          line-height: 40px;
          margin-top: $mgt10;
          border-radius: 6px;
          background-color: #66b1ff;
          outline: none;
          border: none;
          margin-left: 110px;
          color: #fff;
          margin-left: 10px;
        }
      }
    }
  }
}
.tiparea {
  text-align: right;
  font-size: 12px;
  font-size: $tfs12;
  margin-top: 25px;
}
.tiparea p a {
  color: #409eff;
}
</style>