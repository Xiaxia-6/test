//登录

<template>
  <div class="login" id="login">
    <div class="log-bg">
    </div>
    <div class="log-box">
      <input type="text" placeholder="请输入邮箱..." class="log-input">
      <input type="password" placeholder="请输入密码..." class="log-input" >
      <button class="log-btn">登录</button>
    </div>
  </div>
</template>

<script>
/*  export default {
    name: 'Login',
    data(){
      return {
        isLoging: false,
        account: '',
        password: ''
      }
    },
    methods:{

      //登录逻辑
      login(){
        if(this.account!='' && this.password!=''){
          this.toLogin();
        }
      },

      //登录请求
      toLogin(){

        //一般要跟后端了解密码的加密规则
        //这里例子用的哈希算法来自./js/sha1.min.js
        let password_sha = hex_sha1(hex_sha1( this.password ));

        //需要想后端发送的登录参数
        let loginParam = {
          account: this.account,
          password_sha
        }

        //设置在登录状态
        this.isLoging = true;

        //请求后端,比如:
        /!*this.$http.post( 'example.com/login.php', {
            param: loginParam).then((response) => {
          if(response.data.code == 1){
            let expireDays = 1000 * 60 * 60 * 24 * 15;
            this.setCookie('session', response.data.session, expireDays);
            //登录成功后
            this.$router.push('/user_info');
          }
          }, (response) => {
              //Error
          });
            *!/

        //演示用
        setTimeout(()=>{
          //登录状态15天后过期
          let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session','blablablablabla...', expireDays);
          this.isLoging = false;
          //登录成功后
          this.$router.push('/user_info/');
        },3000)
      }
    }
  }*/
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
    text-align: left;
    line-height: 50px;
    border: none;
    margin:0 auto 15px;
    height:50px;
    color:#fff;
    font-size:13px;
    border-radius: 5px;
    position: relative;
  }
  .log-box{
    text-align: center;
    margin-top: 20px;
  }
  .log-box .log-btn{
    background-color: #21ab38;
    text-align: center;
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

</style>
