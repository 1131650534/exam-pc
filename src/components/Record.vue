<template>
    <div class="record">
        <div><h2>暂无数据！</h2></div>
    </div>
</template>

<script>
    export default {
        name:'record'
    }
</script>

<style lang="scss" scoped>
@import "../assets/css/init.scss";
.record{
  width: 80%;
  margin: 0 auto;
  margin-top: $mgt5;
  background: white;
  font-size: 25px;
  height: 85vh;
  border-radius: 6px;
  div{
      width: 150px;
      margin:0 auto;
      line-height: 85vh;
  }
}
</style>