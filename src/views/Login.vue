<template>
  <div style=" background: url(https://s2.ax1x.com/2019/10/30/K5S8yD.jpg) no-repeat center center;" class="register">
<!-- https://imgchr.com/i/K5S8yD -->

    <div   class="cw-box " id="dd" ref="dd">
      <p class="cw-text">用户名密码错误</p>
    </div>

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
              <input type="text" v-model="registerUser.username" placeholder="用户名" />
            </div>
            <div class="ts">{{registerUser.msgusername}}</div>
          </div>

          <div class="in-box">
            <div class="name">
              <!-- <div class="text">密码:</div> -->
               <i class="iconfont icon-password"></i>
              <input type="password" v-model="registerUser.password" placeholder="请输入密码" />
            </div>
            <div class="ts">{{registerUser.mgspassd}}</div>
          </div>

          <button class="btn" type="button" @click="login">登陆</button>
          <div class="tiparea">
            <p>
              没有账号？
              <router-link class="a" to="/register">立即注册</router-link>
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
        username: "123456",
        password: "123456tb",
        msgusername: "",
        mgspassd: "",
      },
    ok:false,

    };
  },
  methods: {
    async login() {
      const res = await this.$axios.post("/users/login", {
        username: this.registerUser.username,
        password: this.registerUser.password
      });
      if (res.data.meta.status == 200) {
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('_id',res.data.data._id)
        this.$router.push("/home");
        return;
      } else {
        this.cwdd();
      }
    },
    submin() {
      this.login();
    },

    getStyle(obj, attr) {
      return obj.currentStyle
        ? obj.currentStyle[attr]
        : getComputedStyle(obj)[attr];
    },
    cwdd() {
      
   this.$refs.dd.classList.add("zzz");
   clearTimeout(addclass);
   var addclass =setTimeout(() => {
     this.$refs.dd.classList.remove("zzz");
   }, 4000);
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
 
  .cw-box {
    width: 100px;
    text-align: center;
    position: absolute;
    left: 45%;
    top: 20%;
    padding: 15px 20px;
    margin: 0 auto 10px;
    font-size: 13px;
    border: 1px solid #DDC0C4;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    background-color: #FFDCE0;
 display: none;
    .cw-text {
      color: #86181D;
    }
  }
   .zzz{
display: block;
animation: bounce 1s linear;

  }
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
      height: 220px;
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
          
          input,
          select {
            width: 250px;
            height: 35px;
            margin-left: $mgl10;
            border-radius: 6px;
            border: 1px solid #c0c4cc;
            outline: none;
            padding-left: 20px;
            box-sizing: border-box; //
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
  .a{
     color: #409eff;
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
.btn {

}
</style>