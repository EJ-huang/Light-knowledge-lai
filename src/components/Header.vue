<template>
<!-- <div class="container"> -->
  <div class=" row lg:hidden">
    <div class="flex md:flex-col flex-wrap md:content-around p-5">
        <img src="../assets/logo.png" alt="">
        <div class="header-main flex justify-center text-center bg-secondary text-lg w-15 text-white mt-5 rounded-md p-2">
            <h1 class="flex content-center ">用對「公式」</h1>
        </div>
        <div class="text-3xl">3萬本金也能幫你滾出 <p style="color: #46AFB0">百萬獲利!</p></div>
    </div>
    <div class="head flex justify-center">
      <img src="../assets/Heade.png" alt="">
    </div>
    <div class="flex content pt-20 justify-center">
      <h1>曾歷經頂尖交易作手地獄訓練並在兩年內研究過 <p class="text-secondary">35,040張盤勢...</p>以及 <p class="text-secondary">上百種操作模式</p> </h1>
    </div>
    <div class="main h-60 bg-secondary text-white mt-12 pt-12 ">
        <p>這是讓我贏得全球交易競賽前四強的武器</p>
        <p class="text-3xl">短線交易最高效的秘密公式!</p>
        <div class="main_box bg-white text-secondary flex justify-evenly">競賽中2周創造4倍獲利</div>
    </div>
  </div>
  <div class="container hidden  lg:block">
    <div class="header">
      <div class="header-img">
        <img src="../assets/logo.png" alt="">
      </div>
        <div class="header-box justify-center bg-secondary text-lg w-64 text-white rounded-md p-2">
            <h1 class="p-2">用對「公式」</h1>
        </div>
        <div class="header-box1" data-aos="fade-down" data-aos-duration="1500"
      data-aos-delay='1500'>
          <span>3萬本金</span>
          <span>也能幫你滾出 <p>百萬獲利！</p> </span>
        </div>
        <div class="header-box2 flex flex-col w-1/4" data-aos="fade-up" data-aos-duration="1500"
      data-aos-delay='1500'>
          <img src="../assets/Group.png" alt="">
        </div>
        <div class="header-box3 flex flex-col" data-aos="fade-up" data-aos-duration="1500"
      data-aos-delay='1500'>
          <span>曾歷經頂尖交易作手地獄訓練 並在<em>2年內研究過</em></span>
          <p> 35,040張盤勢… 以及 上百種操作模式</p>
        </div>
          <div class="header-box4" data-aos="fade-down" data-aos-duration="1500">
            <img src="../assets/lialia.png"  alt=""> 
          </div>
        </div>
          <div class="main flex flex-col  justify-center text-center h-60 w-screen bg-secondary text-white">
            <p>這是讓我贏得全球交易競賽前四強的武器</p>
            <p class="text-3xl">短線交易最高效的秘密公式!</p>
            <div class="main_box bg-white w-1/4 text-secondary">競賽中2周創造4倍獲利</div>
        </div>
  </div>
<!-- </div> -->

</template>


<script>
// import AOS from 'aos/dist/aos.css'
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'Header',
  setup(){
    
  },
  props: {
    msg: String
  },
  mounted(){
    // AOS.init()

    // const scrollTrigger = {
    //   trigger: '.header-main',
    //   start: 'top bottom',
    //   end: 'bottom bottom',
    //   scrub: true
    // };
  },
  //   mounted: function(){
  //     AOS,
  //   gsap.from('.header-main', {duration:4, "--myColor":"orange", yoyo:true, repeat: -1})
  // }
}
</script>


<style lang="scss" scoped>
.container{
  float: none;
  width: 900px;
  .header{
    background: linear-gradient(to left, transparent, #fff),
      url("../assets/bg11.png");
    // background-image: url('../assets/bg11.png'),
    // linear-gradient(to right, rgba(0,0,0,1) 20%,rgba(0,0,0,0));
    height: 100vh;
    width: 100vw;
    background-size: cover;
    .header-img{
      position: absolute;
      top: 5%;
      right: 5%;
    }
    .header-box{
      position: absolute;
      top: 10%;
      left: 22%;
      font-size: 36px;
    }
    .header-box1{
      position: absolute;
      top: 20%;
      left: 16%;
      font-size: 52px;
      background-color:#F8F9FA;
      p{
        color: #77ADAE;
      }
    }
    .header-box2{
      position: absolute;
      top: 45%;
      left: 17%;
    }
    .header-box3{
      position: absolute;
      top: 65%;
      left: 10%;
      font-size: 36px;
    }
    .header-box4{
      position: absolute;
      bottom: 10;
      right: 10%;
      width: 45rem;
    }
  }
    .main_box{
      position: relative;
      top: 10%;
      left: 25%;
      width: 12rem;
      padding: 10px;
    }
  @media (min-width: 1280px) {
    .main_box{
      left: 45%;
    }
  }
}
</style>