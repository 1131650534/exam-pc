<template>
  <div class="in">
    <div class="sort" id='box'>
      <div @click="((e)=>{cut(e,'NavCon1')})" class="course1 active">科目</div>
      <div @click="((e)=>{cut(e,'NavCon2')})" class="doing">考试中</div>
      <div @click="((e)=>{cut(e,'NavCon3')})" class="end">已完成</div>
    </div>

  <keep-alive>
  
         <component :is="isComponent"></component>

  </keep-alive>
 
 

  </div>
</template>

<script>

export default {

  components: {
   "NavCon1":()=>import('@/components/right/NavCon1.vue'),
   "NavCon2":()=>import('@/components/right/NavCon2.vue'),
    "NavCon3":()=>import('@/components/right/NavCon3.vue')
  
  },
  data(){
    return{
     isComponent:'NavCon1',

    }
  },
  methods:{
    cut(e,x){
      this.isComponent = x

      // e.target.classList.add("active")
      //获取父节点
      var ali = e.target.parentNode;
      //获取所有子节点
       var allChildNodes=ali.childNodes;
       //循环遍历每一个子节点
         for (var i = 0; i < ali.children.length; i++) {
           //移除active类
           ali.children[i].classList.remove('active')
         }

       e.target.classList.add("active")
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/init.scss";
.in {
  width: 100%;
  //   height: 100%;
  //   border: 1px solid blue;
  .sort {
    height: 50px;
    background-color: #fff;
    border-radius: 6px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    div {
      height: 100%;
      width: 60px;
      text-align: center;
      cursor: pointer; //鼠标变小手
    }
    .course1:hover,.doing:hover,.end:hover {
      color: #54c1ec;
      font-size: 20px;
    }
  }
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
        .title {
          height: 30px;
        }
        .data {
          height: 30px;
          font-size: $tfs12;
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
        margin-left: 330px;
        outline: 0 none !important; //去除点击时出现的边框
        cursor: pointer;
      }
    }
  }
}
.active{
  color:#54c1ec;
  font-size: 20px;
}

</style>