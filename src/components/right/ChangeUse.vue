<template>
  <div id="change">
      <header>
          <div class="hr"></div><div class="head">我的信息</div>
      </header>
      <div class="user">
          <div class="name">
              <div class="main"><span>班级:</span></div>
              <div class="inp">
                  <select class="inpt" v-model="selected">
                    <option value ="大一">大一</option>
                    <option value ="大二">大二</option>
                    <option value ="大三">大三</option>
                </select>
              </div>
          </div>
          <div class="name2">
              <div class="main"><span>性别:</span></div>
              <div class="inp">
                  <label>
                      <input class="radio_type" type="radio" value="male" name="kk" v-model="checked">
                    <span class="label">男</span>
                  </label>
                 <label>
                     <input class="radio_type" type="radio" value="fmale" name="kk" v-model="checked">
                    <span class="label">女</span>
                 </label>
            </div>
          </div>
          <div class="pass">
              <div class="main"><span>手机号:</span></div>
              <div class="inp"><input type="text" v-model="number"></div>
          </div>
          <!-- <div class="name">
              <div class="main"><span>请输入原密码:</span></div>
              <div class="inp">
                  <input type="text" v-model="ypass">
            </div>
            <div class="passd" v-show="ycu"><span>原密码错误</span></div>
          </div>
          <div class="name">
              <div class="main"><span>请输入新密码:</span></div>
              <div class="inp">
                  <input type="text" v-model="xpass">
            </div>
          </div>
          <div class="name">
              <div class="main"><span>确认密码:</span></div>
              <div class="inp">
                  <input type="text" v-model="qpass">
            </div>
            <div class="passd" v-show="byz"><span>秘密不一致</span></div>
          </div> -->
          <div class="name1">
              <div class="main"><span>我的签名:</span></div>
              <div class="inp"><textarea name="" id="" cols="100" rows="6" v-model="qm"></textarea></div>
          </div>
          <div class="hrr"></div>
          <div class="butto">
              <div class="but" @click="btn">保存</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "changeuse",
  data() {
    return {
        id:'',
        items:'', //个人信息
        selected:'', //班级
        checked:'', //性别
        number:'', //电话号码
        // ypass:'', //原密码
        // xpass:'',//新密码
        // qpass:'', //确认密码
        qm:'', //我的签名
        // ycu:false, //原密码错误
        // byz:false,//密码不一致
    };
  },
  methods:{
      async ininPut(){
          const res = await this.$axios.put('/users/'+this.id,{gender:this.checked,personal:this.qm,mobile:this.number,classx:this.selected})  
      },
      async init(){
          const res = await this.$axios.get('/users/'+this.id)
          this.items = res.data.data
          this.selected = this.items.classx
          this.checked = this.items.gender
          this.number = this.items.mobile
          this.qm = this.items.personal
      },
      btn(){ //保存
        // if(this.items.password === this.ypass && this.xpass === this.qpass){
            this.ininPut()
            this.$message('修改成功')
        // }else{
        //     if(this.items.password !==this.ypass){
        //         this.ycu = true
        //     }
        //     if(this.xpass !== this.qpass){
        //         this.byz = true
        //     }
        // }
      }
  },
  created(){
    this.id = localStorage.getItem('_id')
    this.init() 
  }
};
</script>

<style lang="scss" scoped>
    #change{
        flex: 0.85;
        // width: 200px;
        height: 86vh;
        background-color: #fff;
        margin-left: 5px;
        border-radius: 6px;
        header{
            width: 100%;
            height: 50px;
            display: flex;
            border-bottom: 1px solid #ccc;
            .hr{
                width: 3px;
                background: #00a1d6;
               height: 16px;
               margin: auto 0;
               margin-left: 30px;
            }
            .head{
                line-height: 50px;
                color: #00a1d6;
                margin-left: 5px;
            }
        }
        .user{
            // padding: 20px 100px 100px;
            display: flex;
            flex-direction: column;
            .name{
                display: flex;
                color: #898989;
                margin-top: 40px;
                .main{
                    width: 120px;
                    text-align: right;
                    span{
                        margin-top: 2px;
                        display: inline-block;
                    }
                }
                .inp{
                    margin-left: 20px;
                    input{
                        border: 1px solid #dbdbdb;
                        border-radius: 3px;
                        padding: 3px 8px;
                        &:hover{
                            border-color: #b7b7b7;
                        }
                    }
                    select {
                        appearance: none;
                        background: url("../../assets/xlc.png") no-repeat scroll right center transparent;
                        background-origin: content-box;
                        background-size:16px; //这个自己重写成适合的大小
                        width: 50px;
                        padding: 0 8px;
                        height: 19px;
                        line-height: 19px;
                        border-radius: 3px;
                        border: solid 1px #dbdbdb;
                        color: #666;
                        cursor: pointer;
                        &:hover{
                            border-color: #b7b7b7;
                        }
                     }
                     .inpt{
                             width: 70px;
                         }
                }
                .passd{
                    color: red;
                    font-size: 12px;
                    margin-left: 12px;
                    span{
                        margin-top: 8px;
                        display: inline-block;
                    }
                }
            }
            .name2{
                 display: flex;
                color: #898989;
                margin-top: 40px;
                .main{
                    width: 120px;
                    text-align: right;
                    span{
                        margin-top: 5px;
                        display: inline-block;
                    }
                }
                .inp{
                    margin-left: 20px;
                    .label{
                        line-height: 18px;
                        display: inline-block;
                        margin-left: 5px;
                        margin-right:15px;
                        color: #777;
                        }
                        .radio_type{
                            width: 18px;
                            height: 18px;
                            appearance: none;
                            position: relative;
                        }
                        .radio_type:before{
                            content: '';
                            width: 18px;
                            height: 18px;
                            border: 1px solid #7d7d7d;
                            display: inline-block;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                        .radio_type:checked:before{
                            content: '';
                            width: 18px;
                            height: 18px;
                            border: 1px solid #00a1d6;
                            background:#00a1d6;
                            display: inline-block;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                        .radio_type:checked:after{
                            content: '';
                            width: 10px;
                            height:5px;
                            border: 2px solid white;
                            border-top: transparent;
                            border-right: transparent;
                            text-align: center;
                            display: block;
                            position: absolute;
                            top: 6px;
                            left:5px;
                            vertical-align: middle;
                            transform: rotate(-45deg);
                        }
                        .radio_type:checked+label{
                            color: #00a1d6;
                        }
                        input{
                            border: 0;  // 去除未选中状态边框
                            outline: none; // 去除选中状态边框
                            background-color: rgba(0, 0, 0, 0)
                        }
                }
            }
            .name1{
                display: flex;
                color: #898989;
                margin-top: 40px;
                .main{
                    width: 120px;
                    text-align: right;
                    span{
                        margin-top: 2px;
                        display: inline-block;
                    }
                }
                .inp{
                    margin-left: 20px;
                     textarea{
                         border: 1px solid #dbdbdb;
                         border-radius: 3px;
                         padding: 3px 8px;
                         &:hover{
                            border-color: #b7b7b7;
                        }
                     }
                }
            }
            .pass{
                display: flex;
                color: #898989;
                margin-top: 40px;
                .main{
                    width: 120px;
                    text-align: right;
                    span{
                        margin-top: 2px;
                        display: inline-block;
                    }
                }
                .inp{
                    margin-left: 20px;
                     input{
                        border: 1px solid #dbdbdb;
                        border-radius: 3px;
                        padding: 3px 8px;
                        &:hover{
                            border-color: #b7b7b7;
                        }
                    }
                }
            }
            .hrr{
                height: 1px;
                background: #ccc;
                margin-top: 60px;
            }
            .butto{
                width: 110px;
                margin: 0 auto;
                margin-top: 80px;
                .but{
                padding: 10px 38px;
                color: white;
                background-color: #20a0ff;
                cursor: pointer;
                border-radius: 6px;
                }
                :hover{
                    background-color: #00b5e5;
                   border-radius: 6px;
                }
            }
            
        }
    }
</style>