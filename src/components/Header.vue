<template>
<head>
  <meta charset="utf8">
  <link rel="stylesheet" href="public/css/google.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <title>头部</title>

</head>
  <!--头部导航-->
  <div class="g-top-nav">
    <div class="g-logo">
      <img  class="g-logo-img" src="public/images/logo.png" alt="logo">
    </div>
    <div class="g-title">一个活泼的小猫</div>
    <div class="g-nav">
<a @click="HeaderJS" href="#" class="dashboard">仪表盘</a>
      <a  @click="HeaderJS" href="#" class="disposition">配置</a>
      <a  @click="HeaderJS" href="#" class="manage">管理</a>
      <a  @click="HeaderJS" href="#" class="recording">记录</a>
    </div>
    <div class="g-profile">
      <div class="dropdown">
        <a class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
          管理员
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    HeaderJS()
    {
      $(".g-nav a").click(function (){
        $(".g-nav a").removeClass("dashboard");
        $(this).addClass("dashboard")
      })
      // $("a[href='"+ window.location.pathname +"']").addClass("dashboard");

    }
  },
  mounted() {
    let Bootstrapmain = document.createElement('script');
    Bootstrapmain.type = 'text/javascript';
    Bootstrapmain.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';
    document.body.appendChild(Bootstrapmain);
    let Jqueryslim = document.createElement('script');
    Jqueryslim.type = 'text/javascript';
    Jqueryslim.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js';
    document.body.appendChild(Jqueryslim);
    let Popper = document.createElement('script');
    Popper.type = 'text/javascript';
    Popper.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js';
    document.body.appendChild(Popper);



  },
}

</script>




<style>
</style>