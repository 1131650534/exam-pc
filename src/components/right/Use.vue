<template>
    <div id="use">
        <header>
          <div class="hr"></div><div class="head">个人中心</div>
      </header>
      <div class="users">
          <div class="use-n">
              <div class="main">用户名:</div>
              <div class="inp">{{items.username}}</div>
          </div>
          <div class="use-n">
              <div class="main">名称:</div>
              <div class="inp" v-if="items.zname">{{items.zname}}</div>
              <div class="inp" v-else>无</div>
          </div>
          <div class="use-n">
              <div class="main">性别:</div>
              <div class="inp">{{xb}}</div>
          </div>
          <div class="use-n">
              <div class="main">班级:</div>
              <div class="inp">{{items.classx}}</div>
          </div>
          <div class="use-n">
              <div class="main">电话号码:</div>
              <div class="inp" v-if="items.mobile">{{items.mobile}}</div>
              <div class="inp" v-else>无</div>
          </div>
          <div class="use-n">
              <div class="main">个性签名:</div>
              <div class="inp" v-if="items.personal">{{items.personal}}</div>
              <div class="inp" v-else>无</div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:'',
                items:'',
                xb:''
            }
        },
        methods:{
            async init(){
                const res = await this.$axios.get('/users/'+this.id)
                this.items = res.data.data
                if(this.items.gender === 'male'){
                    this.xb = "男"
                }else{
                    this.xb = '女'
                }
            }
        },
        created(){
            this.id = localStorage.getItem('_id')
            this.init()
        }
    }
</script>

<style lang="scss" scoped>
    #use{
        flex: 0.85;
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
        .users{
            padding: 20px 100px 100px;
            display: flex;
            flex-direction: column;
            .use-n{
                display: flex;
                color: #898989;
                margin-top: 40px;
                .main{
                    width: 100px;
                    text-align: right;
                }
                .inp{
                    margin-left: 20px;
                }
            }
        }
    }
</style>