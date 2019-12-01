<template>
  <div id="about">
    <header>
      <div class="examination">
        <i class="el-icon-edit"></i><img src="../assets/logozi.png" alt="">
      </div>
      <div class="use">
        <img src="../assets/1.jpg" />
        <span>{{name.username}}</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b">修改资料</el-dropdown-item>
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <main>
      <div class="text">
        <div class="title">单选题(共{{items.length}}题)</div>
        <div class="hr"></div>
        <div class="content" v-if="items">
          <div class="title-on">{{items[x].title}}</div>
          <template>
            <el-radio-group v-model="radio" size="medium">
              <el-radio :label="items[x].A">A.{{items[x].A}}</el-radio>
              <br />
              <el-radio :label="items[x].B">B.{{items[x].B}}</el-radio>
              <br />
              <el-radio :label="items[x].C">C.{{items[x].C}}</el-radio>
              <br />
              <el-radio :label="items[x].D">D.{{items[x].D}}</el-radio>
            </el-radio-group>
          </template>
        </div>
        <el-row>
          <div class="butt">
            <span @click="chec">
              <el-checkbox v-model="checked">标记</el-checkbox>
            </span>
            <el-button plain @click="black" class="black">上一题</el-button>
            <el-button plain @click="next">下一题</el-button>
          </div>
        </el-row>
      </div>
      <div class="right">
        <div>剩余时间</div>
        <div class="time">{{sj}}分{{m}}秒</div>
        <div>当前进度:{{x+1}}/{{items.length}}</div>
        <div @click="flag">
          <el-button type="text" @click="centerDialogVisible = true">
            <i class="el-icon-date"></i>答题卡
          </el-button>
        </div>
        <div @click="open">
          <el-button type="success">
            <i class="el-icon-date"></i> 提交
          </el-button>
        </div>
      </div>
    </main>

    <el-dialog title="答题卡" :visible.sync="centerDialogVisible" width="40%" center>
      <div class="tag">
        <span class="tag-title">选择题</span>
        <span class="tag-y">已做答:</span>
        <span class="tag4 tag1"></span>
        <span>标记:</span>
        <span class="tag4 tag2"></span>
        <span>未完成:</span>
        <span class="tag4 tag3"></span>
      </div>
      <div class="select">
        <ul class="clearfix ulr">
          <li v-for="(item,index) in items" :key="index" @click="to(index)">{{index+1}}</li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  minimum: 0.1, //    配置最低百分比
  ease: "ease", //    配置动画模式
  speed: "500", //    配置动画速度
  trickle: false, //    关闭进度条步进
  showSpinner: false //    关闭进度环
});
export default {
  data() {
    return {
      radio: "", //单选答案
      checked: false, //标记
      centerDialogVisible: false,
      items: '', //题目数据
        // {
        //   title: "世界上最答的对象是什么",
        //   a: "ddddd1",
        //   b: "ddddss1",
        //   c: "ddddcc1",
        //   d: "dddddsss1",
        
        //   answer: "ddddd1"
        // },
        // {
        //   title: "世界上最答的对象是什么2",
        //   a: "ddddd2",
        //   b: "ddddss2",
        //   c: "ddddcc2",
        //   d: "dddddsss2",
        //   answer: "ddddd2"
        // },
        // {
        //   title: "世界上最答的对象是什么3",
        //   a: "ddddd3",
        //   b: "ddddss3",
        //   c: "ddddcc3",
        //   d: "dddddsss3",
        //   answer: "ddddd3"
        // }
      
      x: 0,
      m: 59, //倒计时分钟
      sj: "", //倒计时秒
      callIndex: "", //第几项题
      rid:'', //人id
      sjid:'', //试卷id
      fen:'' ,//上传分数
      num:0 ,//
      all:'',//所有数据
      name:'' //用户名接口
    };
  },
  methods: {
     async init2() { //用户信息
      const res = await this.$axios.get("/users/" + this.rid);
      this.name = res.data.data;
    },
    async init() { //数据
      const res = await this.$axios.get("/paper");
      this.all = res.data.data
      this.items = res.data.data[this.callIndex].title; 
      this.sj = res.data.data[this.callIndex].datax-1 //时间
      this.sjid = res.data.data[this.callIndex]._id
      // console.log(this.sjid)
    },
    async upda(){ //上传分数
      for(let i = 0; i<this.items.length;i++){
        if(this.items[i].radio===this.items[i].answea){
          this.num++
        }
      }
      this.fen =this.num*100/this.items.length
      this.all[this.callIndex].fen = this.fen
      var dd = JSON.parse(localStorage.getItem('arr'))
     if(!dd){
       let d=[]
       localStorage.setItem('arr',JSON.stringify(d))
       var dd = JSON.parse(localStorage.getItem('arr'))
     }
     if(dd.length==0){
       dd.push(this.all[this.callIndex])
     }
     let tan = true
     for(let i=0;i<dd.length;i++){

       if(dd[i]._id === this.sjid){
         tan = false
         console.log(dd[i])
         dd[i] = this.all[this.callIndex]
       }
     }
     if(tan){
         dd.push(this.all[this.callIndex])
     }
    

      localStorage.setItem('arr',JSON.stringify(dd))

    },
    open() {
        this.bcda()
        this.$confirm('是否提交试卷?', '提示', { //提交作业
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.upda()
          this.$router.push({name:'rightmain'})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
    handleCommand(command) {
      if(command == 'a'){
        this.$router.push({name:'use'})
      }
      if(command == 'b'){
        this.$router.push({name:'changeuse'})
      }
      if(command == 'c'){
        this.$router.push({name:'rightmain'})
      }
    },
    judge() {
      //渲染当前是否标记
      if (this.items[this.x].checked == undefined) {
        this.checked = false;
      } else {
        this.checked = this.items[this.x].checked;
      }
    },
    xrda() {
      //渲染当前答案
      if (this.items[this.x].radio == undefined) {
        this.radio = "";
      } else {
        this.radio = this.items[this.x].radio;
      }
    },
    black() {
      //上一题
      if (this.x == 0) {
        this.$message("没有上一题了");
        this.xrda();
        this.bcda();
      } else {
        NProgress.start();
        NProgress.done();
        this.bcda();
        this.x--;
        this.judge();
        this.xrda();
      }
    },
    next() {
      //下一题
      if (this.x < this.items.length - 1) {
        NProgress.start();
        NProgress.done();
        this.bcda();
        this.x++;
        this.judge();
        this.xrda();
      } else if (this.x == this.items.length - 1) {
        this.bcda();
        this.xrda();
        this.$message("没有下一题了");
      }
    },
    to(index) {
      //答题卡跳转
      this.centerDialogVisible = false;
      NProgress.start();
      NProgress.done();
      this.x = index;
      this.xrda();
      this.judge();
    },
    flag() {
      //点击答题卡事件
      this.bcda();
      let ul = document.querySelector(".ulr");
      for (let j = 0; j < this.items.length; j++) {
        if (this.items[j].radio !== undefined && this.items[j].radio !== "") {
          ul.children[j].style.background = "#ccc";
        }
      }
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].checked == true) {
          ul.children[i].style.background = "pink"; //标记
        }
      }
    },
    chec() {
      //保存标记
      this.items[this.x].checked = !this.checked;
    },
    bcda() {
      //保存答案
      this.items[this.x].radio = this.radio;
    }
  },
  mounted() {
    // console.log(this.$route.query.index)
    this.callIndex = this.$route.query.index;
    this.rid = localStorage.getItem('_id')
    this.init2()
    this.init()
    let timer = setInterval(() => {
      this.m--;
      if (this.m === 0) {
        this.sj--;
        this.m = 59;
        if (this.sj < 0) {
          this.m = 0;
          this.sj = 0;
          clearInterval(timer);
          this.$router.push({name:'rightmain'})
        }
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
#about {
  header {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .examination {
      font-size: 40px;
      color: #4d65ce;
      line-height: 80px;
    }
    .use {
      line-height: 80px;
      margin-right: 100px;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
  main {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    .text {
      width: 1180px;
      height: 500px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      padding: 20px;
      .title {
        font-size: 20px;
        color: #303133;
        padding: 18px 20px;
        margin-bottom: 12px;
      }
      .hr {
        border: 1px solid #ebeef5;
      }
      .content {
        .title-on {
          height: 58px;
          line-height: 58px;
          font-size: 18px;
          color: #303133;
        }
        .el-radio-group {
          .el-radio {
            padding: 10px 10px 10px 10px;
            .el-radio__inner {
              width: 20px;
              height: 20px;
            }
            .el-radio__label {
              padding: 20px;
              font-size: 30px !important;
            }
          }
        }
      }
      .el-row {
        margin-top: 100px;
        .butt {
          width: 250px;
          margin: 0 auto;
          .black {
            margin-left: 10px;
          }
        }
      }
    }
    .right {
      padding: 0 20px;
      .time {
        color: red;
        margin: 15px 0;
      }
    }
  }
  .el-dialog {
    .tag {
      padding: 10px 0;
      border-bottom: 1px solid #ebeef5;
      .tag-title {
      }
      .tag-y {
        margin-left: 420px;
      }
      .tag4 {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: 6px;
        margin-right: 12px;
        margin-bottom: -5px;
      }
      .tag1 {
        background: #ccc;
      }
      .tag2 {
        background: pink;
      }
      .tag3 {
        background: white;
        box-shadow: 0px 0px 1px #ccc inset;
      }
    }
    .select {
      li {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
        margin: 5px 0 0 10px;
        cursor: pointer;
      }
      :first-child {
        margin-top: 5px;
        margin-left: 0px;
      }
      :nth-child(10){
        margin-top: 5px;
        margin-left: 0px;
      }
      :nth-child(19){
        margin-top: 5px;
        margin-left: 0px;
      }
    }
  }
  .clearfix:after {
    content: "";
    height: 0;
    display: block;
    clear: both;
  }
}
</style>