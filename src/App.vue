<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Thin',"Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .down-con {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 8.7vh;
  }
  .selection-1 .down {
    position: relative;
    margin: 0 auto 2.59vh;
    width: 2.81vw;
    height: 2.45vw;
  }
  .selection-1 .down:after {
    position: absolute;
    left: 0;
    top: -3vh;
    content: '';
    width: 2.81vw;
    height: 2.45vw;
    background: url('../src/assets/down.svg') center center no-repeat;
    background-size: cover;
    cursor: pointer;
    -webkit-animation: fall 1.2s infinite;
    animation: fall 1.2s infinite;
  }
  .slidedown {
    margin: 0 auto;
    width: 11.41vw;
    height: 2.76vw;
    line-height: 2.76vw;
    background: url('../src/assets/5.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }

  .title {
    color: #FFFFFF;
    text-align: center;
    font-size: 2.34vw;
    font-family: 'PingFangSC-Regular';
  }
  .disrc {
    color: #FFFFFF;
    line-height: 1.61vw;
    font-size: 0.94vw;
  }

  /*向下效果*/
  @-webkit-keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  @keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }

  /*漂浮*/
  @-webkit-keyframes float_01 {
    0% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
    50% {
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
  }
  @keyframes float_01 {
    0% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
    50% {
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
    }
    100% {
      -webkit-transform: translateY(5px);
      -moz-transform: translateY(5px);
      -ms-transform: translateY(5px);
      -o-transform: translateY(5px);
    }
  }
  @-webkit-keyframes float_02 {
    0% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
    50% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    100% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
  }
  @keyframes float_02 {
    0% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
    50% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    100% {
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
  }
  @-webkit-keyframes float_03 {
     0% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
    50% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
    }
    100% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
  }
  @keyframes float_03 {
    0% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
    50% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
    }
    100% {
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
      -ms-transform: translateY(30px);
      -o-transform: translateY(30px);
    }
  }
  @-webkit-keyframes float_04 {
    0% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    50% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
    }
    100% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
  }
  @keyframes float_04 {
    0% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    50% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
    }
    100% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
  }

  @media screen and (max-width: 750px) {
    .pc {
      display: none;
    }

    .down-con {
      bottom: 6.3vh;
    }
    .selection-1 .down {
      margin: 0 auto 2.85vh;
      width: 6.93vw;
      height: 6.13vw;
    }
    .selection-1 .down:after {
      top: -1vh;
      width: 6.93vw;
      height: 6.13vw;
    }
    .slidedown {
      width: 44.27vw;
      height: 10.93vw;
      line-height: 10.93vw;
      font-size: 3.73vw;
    }

    .title {
      font-size: 6.67vw;
    }
    .disrc {
      line-height: 6.67vw;
      font-size: 3.73vw;
    }

    #swiper .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #fff;
      opacity: .2;
    }
    #swiper .swiper-pagination-bullet-active {
      opacity: 1;
      background: rgb(236,106,0);
    }

    #swiper .swiper-pagination {
      bottom: 10.78vh;
    }

    #swiper02 .swiper-pagination {
      bottom: 0;
    }

    #swiper02 .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #fff;
      opacity: .2;
    }
    #swiper02 .swiper-pagination-bullet-active {
      opacity: 1;
      background: rgb(236,106,0);
    }

    #swiper02 {
      height: 58vh;
    }

  }
</style>
