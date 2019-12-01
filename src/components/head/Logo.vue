<template>
  <router-link to="/home">
    <div class="logo">
      <i class="iconfont icon-logo"></i>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.logo {
  font-size: 16px;
  margin-top: $mgt5;
  cursor: pointer; //鼠标变小手
  .icon-logo {
    font-size: 40px;
    color: skyblue;
  }
}
</style>