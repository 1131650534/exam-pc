<template>
  <div class="head-nav">
      <Logo class="logo"></Logo>
      <TopTab></TopTab>
      <UserName></UserName>
     
  </div>
  
</template>

<script>
import Logo from "./head/Logo";
import TopTab from "./head/TopTab";
import UserName from "./head/UserName";

export default {
  name: "head-nav",
  components: {
      Logo,
      TopTab,
      UserName,
     
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/init.scss";
.head-nav {
    width: 100%;
    height: 50px;
    background-color: #fff;
    // border: 1px solid #cccccc;
    display: flex;
    .logo{
      margin-left: $mgl135;
    }
}
</style>