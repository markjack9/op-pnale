<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

  <!--头部导航-->
  <div class="g-top-nav">
    <div class="g-logo">
      <img class="g-logo-img" src="/images/logo.png" alt="logo">
    </div>
    <div class="g-title">一个活泼的小猫</div>
    <div class="g-nav">
      <router-link to="dashboard" active-class="dashboard" >仪表盘</router-link>
      <router-link to="setting" active-class="dashboard">配置</router-link>
      <router-link to="manage" active-class="dashboard">管理</router-link>
      <router-link to="recording" active-class="dashboard">记录</router-link>
    </div>
    <div class="g-profile" >
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
         管理员
        </a>

        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">用户信息</a>
          <a class="dropdown-item" href="#">重置密码</a>
          <a class="dropdown-item" href="#">退出</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {}

    },
  methods: {

  },
  mounted() {
    let Popper = document.createElement('script');
    Popper.type = 'text/javascript';
    Popper.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';
    document.body.appendChild(Popper);
    let Popper2 = document.createElement('script');
    Popper2.type = 'text/javascript';
    Popper2.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(Popper2);
  },
  components: {

  }
}

</script>




<style scoped>

.g-content-nav div{
  margin: 10px;
  border: 1px solid #ccc;
}
.g-nav a{
  text-decoration: none;
  color: black;
  margin-right: 30px;
  font-size: 25px;
  font-weight: 600;

}
.g-nav a.dashboard {
  color: rgb(22,115,232);
  border-bottom: 5px solid rgb(22,115,232);
  padding-bottom: 14px;
}
.g-profile {
  margin-left: auto;
  margin-right: 50px;

}
.g-profile span{
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
}
.g-logo {
  margin: 0 20px;

}
.g-logo-img {
  height: 50px;
}
.g-title {
  font-size: 18px;
  font-weight: 600;
  width: 300px;

}
.g-top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.g-left-arrow img {
  margin: 0 5px 0 auto;
}

.g-left-menu a {
  text-decoration: none;
  color: #222222;
  display: flex;
  flex-flow: row;

}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>