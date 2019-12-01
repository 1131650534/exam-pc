<template>
  <div class="leftmenu">
    <div class="oneslf">
      <div class="tx">
        <img src="../../assets/1.jpg" alt />
      </div>
      <p class="text">{{items.username}}</p>
    </div>
    <div class="left-nav">
      <div class="exam-box">
        <div class="exam-box1">
          <i class="iconfont icon-kaoshi-copy"></i>
          <div class="exam">考试</div>
        </div>
        <div class="item">
          <router-link class="item1" to="/home">
            <div class>
              <p>考试列表</p>
            </div>
          </router-link>

          <router-link class="item2" to="/foot/rightmaintask">
            <div class>
              <p>课后作业</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="vip-box">
        <div class="exam-box">
          <i class="iconfont icon-kaoshi-copy"></i>
          <div class="exam">我的</div>
        </div>
        <div class="item">
          <router-link class="item2" to="/foot/use">
            <div class>
              <p>个人中心</p>
            </div>
          </router-link>
          <router-link class="item2" to="/foot/changeuse">
            <div class>
              <p>修改信息</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items:"",
      id:""
    }
  },
  methods:{
     async init() {
      const res = await this.$axios.get("/users/" + this.id);
      this.items = res.data.data;
      // console.log(this.items)
    },
  },
  created(){
    this.id = localStorage.getItem('_id')
    this.init()
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.leftmenu {
  // width: 150px;
  height: 100%;
  // background-color: #fff;
  border-radius: 6px;
  .oneslf {
    width: 100%;
    height: 50px;
    background-color: #ccc;
    display: flex;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    .tx {
      margin-right: 10px;
      margin-top: $mgt5;
      // border: 2px solid skyblue;
      border-radius: 50%;
      margin-left: 20px;
      cursor: pointer; //鼠标变小手
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .text {
      line-height: 50px;
      margin-right: 20px;
      cursor: pointer; //鼠标变小手
    }
  }
  .left-nav {
    width: 100%;
    height: 80vh;
    // border: 1px solid red;
    background-color: #fff;
    margin-top: 2px;
  }
  .exam-box {
    width: 100%;
    font-size: $tfs12;
    cursor: pointer; //鼠标变小手
    .exam-box1 {
      width: 100%;
      display: flex;
      margin-left: $mgl10;
      font-size: $tfs12;
      .icon-kaoshi-copy {
        color: #8fcb8f;
        font-size: $tfs12;
        margin-top: $mgt20;
      }
      .exam {
        width: 100%;
        margin-left: $mgl10;
        margin-top: $mgt20;
      }
    }
    .item {
      width: 100%;
      margin-top: $mgt10;
      font-size: $tfs16;
      .item1 {
        display: inline-block;
        width: 100%;
        height: 50px;
        color: #000;
        // border-right: 5px solid #009adf;
        // background-color: #eafaff;
        p {
          margin-left: $mgl35;
          line-height: 50px;
        }
      }
      .item2 {
        display: inline-block;
        width: 100%;
        color: #000;
        margin-top: $mgt10;
        p {
          margin-left: $mgl35;
          line-height: 50px;
        }
      }
    }
  }

  .vip-box {
    width: 100%;
    font-size: $tfs12;
    margin-top: $mgt20;
    cursor: pointer; //鼠标变小手
    .exam-box {
      width: 100%;
      display: flex;
      margin-left: $mgl10;
      font-size: $tfs12;
      .icon-kaoshi-copy {
        color: #8fcb8f;
        font-size: $tfs12;
      }
      .exam {
        width: 100%;
        margin-left: $mgl10;
      }
    }
    .item {
      width: 100%;
      margin-top: $mgt10;
      font-size: $tfs16;
      // .item1 {
      //   // width: 97%;
      //   // height: 50px;
      //   // border-right: 5px solid #009adf;
      //   // background-color: #eafaff;
      //   // p {
      //   //   // margin-left: $mgl35;
      //   //   // line-height: 50px;
      //   //   // border-right: 5px solid #009adf;
      //   //   // background-color: #eafaff;
      //   // }
      // }
      .item2 {
        width: 100%;
        margin-top: $mgt10;
        color: #000;
        p {
          margin-left: $mgl35;
          line-height: 50px;
        }
      }
    }
  }
}
.router-link-active {
  div {
    width: 97%;
    height: 50px;
    border-right: 5px solid #009adf;
    background-color: #eafaff;

    p {
      color: skyblue;
    }
  }
}
</style>