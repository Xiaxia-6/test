<template>
  <div class="login" id="login">
    <div class="log-bg">
    </div>
    <div class="log-box">
      <input type="text" placeholder="请输入邮箱..." class="log-input"  v-model="username">
      <input type="password" placeholder="请输入密码..." class="log-input" v-model="password" >
      <a class="log-btn" @click="tologin">登录</a>
      <p class="error">{{UserError.errorText}}</p>
      <p class="error">{{passwordError.errorText}}</p>
      <p class="error">{{errorText}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorText: ''
      }
    },
    /*对输入框中的内容进行判断，当username每次改变，都会进行验证，并返回状态，如果没有错误信息，则span中没有内容*/
    computed: {
      UserError() {
        let errorText, status
        if (!/@/g.test(this.username)) {
          status = false
          errorText = '请输入正确格式的账号'
        } else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordError() {
        let errorText, status
        if (!/^\w{6,18}$/g.test(this.password)) {
          status = false
          errorText = '请输入6到18位的正确密码'
        } else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      tologin() {
        if (this.username == "admin@123" && this.password == "123456") {
          this.$router.push({path: 'index'})
        }
        else {
          this.errorText = ''
          this.loginjudeg()
        }
      }
    }
  }
</script>

<style scoped>
  .login{
    overflow: hidden;
    margin: 100px auto;
    width: 500px;
    height: 300px;
  }
  .log-btn{
    width:402px;
    display: block;
    line-height: 50px;
    border: none;
    margin:0 auto 15px;
    height:50px;
    color:#fff;
    background-color: #21ab38;
    text-align: center;
    font-size:13px;
    border-radius: 5px;
    position: relative;
  }
  .log-box{
    text-align: center;
    margin-top: 20px;
  }

  .log-btn:hover,.log-btn:focus {
    color: #fff;
    opacity: .8;
  }
  .log-input{
    width: 370px;
    overflow: hidden;
    padding: 0 15px;
    font-size: 13px;
    border: 1px solid #EBEBEB;
    margin:0 auto 15px;
    height: 48px;
    line-height: 48px;
    border-radius: 5px;
  }
  .log-box p{
    color: red;
    font-size: smaller;
  }
</style>
