<template>
  <div class="top-tab">
    <router-link tag="div" class="cbj" to="/home">
      <div class="cbj-box">首页</div>
      <span class="top"></span>
    </router-link>

    <router-link tag="div" class="archives" to="/home/record">
      <div class="archives-box">成长档案</div>
      <span class="top"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TopTab",
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.top-tab {
  margin-left: $mgl50;
  cursor: pointer; //鼠标变小手
  display: flex;
  .cbj {
    width: 32px;
    line-height: 50px;
    .cbj-box {
      width: 100px;
    }
  }
  .archives {
    margin-left: 100px;
    width: 65px;
    line-height: 50px;
  }
}

.router-link-exact-active {
  color: skyblue;
}
.router-link-exact-active span {
  display: block;
  margin-top: -10px;
}

.top {
  width: 100%;
  height: 3px;
  background-color: skyblue;
  display: none;

  border-radius: 25px;
  animation: .2s identifier;
}
@keyframes identifier {
  0% {
    width: 0%;
    margin: -10px auto 15px auto;
    
  }
  20% {
    width: 20%;
    margin: -10px auto 15px auto;
    
  }
  40% {
    width: 40%;
    margin: -10px auto 15px auto;
    
  }
  60% {
    width: 60%;
    margin: -10px auto 15px auto;
    
  }
  80% {
    width: 80%;
    margin: -10px auto 15px auto;
    
  }
  100% {
    width: 100%;
    margin: -10px auto 15px auto;
    
  }
}
</style>