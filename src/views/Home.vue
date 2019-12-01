<template>
  <div style=" background: url(https://s2.ax1x.com/2019/10/30/K5S8yD.jpg) no-repeat center center;" class="home">
    
    <HeadNav></HeadNav>

        <router-view></router-view>
   
  </div>
</template>

<script>
import HeadNav from "@/components/HeadNav.vue";


export default {
  name: "home",
  components: {
    HeadNav
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/init.scss";
.home {
  width: 100%;
  height: 100%;
 background-size: cover!important;
  background-size: 100% 100%;
}
</style>
