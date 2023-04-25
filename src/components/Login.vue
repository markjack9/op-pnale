<template>
  <div class="loginidex">
    <div class="login">
      <div class="header">登录</div>
      <div class="container">
        <label>
          <input type="text"  v-model="userinfo.name" placeholder="请输入用户名">
        </label>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="container1">
        <label>
          <input type="password" v-model="userinfo.password" placeholder="请输入密码">
        </label>
        <span class="left"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <button @click="dologin()"  class="btn" >登录</button>
    </div>
  </div>
  <!--  <router-view></router-view>-->
</template>
<style scoped>
.loginidex {
  margin: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login {

  align-items: center;
  width: 358px;
  height: 588px;
  background-color: #282c34;
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  color: #61dafb;
}
.container {
  height: 30px;
  width: 250px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}


/* semantic color variables for this project */


body {
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input {
  width: 100%;
  height: 100%;
  position: relative;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding-left: 5px;
  background-color: #282c34;
  color: #61dafb;
  caret-color: #61dafb;
}
input::placeholder {
  color: #61dafb;
}

span {
  position: absolute;
  content: "";
  display: block;
  background-color: #61dafb;
  transition: transform .1s ease-in-out;
}
.top,
.bottom {
  left: 0;
  right: 0;
  height: 2px;
}
.left,
.right {
  top: 0;
  bottom: 0;
  width: 2px;
  transform: scaleY(0);
}
.top {
  top: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition-delay: .2s;
}
.left {
  left: 0;
  transform-origin: bottom center;
  transition-delay: .3s;
}
.bottom {
  bottom: 0;
}
.right {
  right: 0;
  transform-origin: top center;
  transition-delay: .1s;
}
input:focus ~ .right {
  transform: scaleY(1);
  transform-origin: bottom center;
}
input:focus ~ .left {
  transform: scaleY(1);
  transform-origin: top center;
}
input:focus ~ .top {
  transform: scaleY(1);
  transform-origin: right center;
}
.container1 {
  height: 30px;
  width: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 5px;
  width: 200px;
  margin-top: 40px;
  background-color: #61dafb;
  color: #fff;
}
</style>
<script>
import axios from 'axios';

export default {

  data(){
    return {
      userinfo: {
        name: "",
        password: "",
      }

    };
  },
  methods: {
    dologin() {
      axios.post('http://192.168.0.117:8081/login', {
        username: this.userinfo.name,
        password: this.userinfo.password
      }).then((res)=> {
        if (res.data.code === 1000){
          console.log("登陆成功")
          localStorage.setItem("loginResult",JSON.stringify(res.data));
          this.$router.push({path: '/'})

        } else {
          console.log(res.data.message)
        }

      }).catch(function (error) {
        console.log("错误信息",error)
      });
    }
  }

}
</script>