<template>
  <div class="foot">
      <LeftMenu class="leftmenu"></LeftMenu>

        <router-view></router-view>

  </div>
</template>

<script>
import LeftMenu from "./left/LeftMenu";
export default {
  name: "foot",
   components: {
      LeftMenu,
      
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/init.scss";
.foot {
  display: flex;
  width: 80%;
  // border: 1px solid red;
  margin: 0 auto;
  margin-top: $mgt5;
  .leftmenu{
    flex: 0.15;
  }
  .rightmain{
    flex: 0.85;
  }
}
</style>