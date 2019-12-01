<template>
    <div class="navcon">
        <div class="course-in">
      <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

          <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

        <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

        <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

        <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

        <div class="course-box">
        <div class="icon">期末</div>
        <div class="course">
          <p class="title">计算机网络</p>
          <p class="data">交卷时间：15：00</p>
        </div>
        <button class="btn">现在做题</button>
      </div>

    </div>
    </div>
</template>

<script>
    export default {
        name:'navcon'
    }
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.navcon{
     .course-in {
    width: 100%;
    // height: 400px;
    margin-top: $mgt5;
    background-color: #fff;
    border-radius: 6px;
    line-height: 60px;
    .course-box {
      width: 90%;
      height: 80px;
      margin: 0 auto;
    //   line-height: 80px;
      border-bottom: 1px solid #f2f3f2;
      display: flex;
      cursor: default;
      .icon {
          width: 50px;
          height: 50px;
          background-color: skyblue;
          border-radius: 50%;
          text-align: center;
          line-height: 50px;
          margin-top: $mgt15;
      }
      .course {
        margin-left: $mgl35;
        .title{
            height: 30px;
        }
        .data{
            height: 30px;
            font-size: $tfs12;
        }
      }
      .btn{
          width: 80px;
          height: 30px;
          border: none;
          border-radius: 25px;
          color: #62bcf3;
          background-color: #ebf8ff;
          line-height: 30px;
          margin-top: 25px;
          margin-left: 330px;
          outline:0 none !important;//去除点击时出现的边框
          cursor:pointer;
      }
    }
  }
}
</style>