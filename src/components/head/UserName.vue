<template>
  <div class="username">
    <div class="tx">
      <img src="../../assets/1.jpg" alt />
    </div>
    <p class="text">{{items.username}}</p>
    <!-- <div class="select">
      <i class="iconfont icon-daosanjiao"></i>
      <div class="content">
        <div class="exit">退出</div>
      </div>
    </div>-->
    <div class="exit" @click="exit">退出</div>
  </div>
</template>

<script>
export default {
  name: "username",
  data() {
    return {
      id:'',
     items:""
    }
  },
  methods: {
    async init() {
      const res = await this.$axios.get("/users/" + this.id);
      this.items = res.data.data;
    },
    exit() {
      this.$router.push({ name: "login" });
    }
  },
  created(){
    this.id = localStorage.getItem('_id')
    this.init()
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.username {
  position: fixed;
  right: 20px;
  display: flex;
  margin-right: 55px;
  .tx {
    margin-right: 10px;
    margin-top: $mgt5;
    cursor: pointer; //鼠标变小手
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .text {
    line-height: 50px;
    cursor: pointer; //鼠标变小手
  }
  .exit {
    line-height: 50px;
    color: skyblue;
    margin-left: 100px;
    cursor: pointer;
  }
  .exut:hover {
    background: #b0e0e6;
  }
  // .select {
  //   position: relative;
  //   display: inline-block;
  //   margin-left: 20px;
  //   margin-top: 17px;
  //   cursor:pointer;//鼠标变小手
  //   .content {
  //     // background-color: pink;
  //     display: none;
  //     position: absolute;
  //     background-color: #f9f9f9;
  //     min-width: 80px;
  //     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  //     padding: 12px 16px;
  //     margin-top: 17px;
  //     margin-left: -40px;
  //     border-radius: 6px;
  //     cursor:pointer;//鼠标变小手
  //     div{
  //       margin-top: $mgt10;
  //     }
  //   }
  // }
  .select:hover .content {
    display: block;
  }
}
</style>