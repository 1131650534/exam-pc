<template>
  <div class="navcon">
    <div class="course-in">
      <div class="course-box">
        <div class="jg">
          <div class="icon">期末</div>
          <div class="course">
            <p class="title">2019-2020第一学期职业技能知识竞赛</p>
            <p class="data">考试时间:明天</p>
          </div>
        </div>
       <div>
          <button class="btn">正在准备中</button>
        </div>  
      </div>
      <div class="course-box">
        <div class="jg">
          <div class="icon">期末</div>
          <div class="course">
            <p class="title">2019-2020第一学期综合知识月考</p>
            <p class="data">考试时间:明天</p>
          </div>
        </div>
       <div>
          <button class="btn">正在准备中</button>
        </div>  
      </div>
      <div class="course-box">
        <div class="jg">
          <div class="icon">期末</div>
          <div class="course">
            <p class="title">2019-2020第一学期历史月考</p>
            <p class="data">考试时间:明天</p>
          </div>
        </div>
       <div>
          <button class="btn">正在准备中</button>
        </div>  
      </div>
      <div class="course-box">
        <div class="jg">
          <div class="icon">期末</div>
          <div class="course">
            <p class="title">2019-2020第一学期java综合竞赛</p>
            <p class="data">考试时间:后天</p>
          </div>
        </div>
       <div>
          <button class="btn">正在准备中</button>
        </div>  
      </div>
      <div class="course-box">
        <div class="jg">
          <div class="icon">期末</div>
          <div class="course">
            <p class="title">2019-2020第一学期职业生涯会考</p>
            <p class="data">考试时间:后天</p>
          </div>
        </div>
       <div>
          <button class="btn">正在准备中</button>
        </div>  
      </div>

     
    </div>
  </div>
</template>

<script>
export default {
  name: "navcon"
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.navcon {
  .course-in {
    width: 100%;
    height: 80vh;
    margin-top: $mgt5;
    background-color: #fff;
    border-radius: 6px;
    line-height: 60px;
    .course-box {
              width: 90%;
              margin: 0 auto;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f2f3f2;
      .jg{
      height: 80px;
      //   line-height: 80px;
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
        .title {
          height: 30px;
        }
        .data {
          height: 30px;
          font-size: $tfs12;
        }
      }
      }
      
      .btn {
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 25px;
        color: #62bcf3;
        background-color: #ebf8ff;
        line-height: 30px;
        margin-top: 25px;
        margin-right: 150px;
        outline: 0 none !important; //去除点击时出现的边框
        cursor: pointer;
      }
    }
  }
}
</style>