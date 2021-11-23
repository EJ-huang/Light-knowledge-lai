<template>
<div class="container">
  <div class="header-ph row lg:hidden">
    <div class="flex flex-col items-center md:content-around p-5">
        <img src="../assets/logo.png" alt="">
          <div class="header-main flex justify-center text-center bg-secondary text-lg  py-2 px-12 text-white mt-5 rounded-md p-2">
              <h1 class="flex content-center ">用對「公式」</h1>
          </div>
        <div class="text text-3xl font-bold">
          <span>3萬本金</span> <br>
          <span>也能幫你滾出</span>
          <font>百萬獲利!</font>
        </div>
    </div>
    <div class="head flex justify-center">
      <img src="../assets/Heade.png" alt="">
    </div>
    <div class="flex content pt-20 text-center text-2xl">
      <h1>曾歷經頂尖交易作手地獄訓練並在兩年內研究過 <p class="text-secondary">35,040張盤勢...</p>以及 <p class="text-secondary">上百種操作模式</p> </h1>
    </div>
    <div class="main h-60 bg-secondary text-white  mt-12 pt-12 p-8">
        <p>這是讓我贏得全球交易競賽前四強的武器</p>
        <p class="text-3xl">短線交易最高效的</p>
        <p class="text-3xl">秘密公式!</p>
        <div class="main_box bg-white text-secondary flex justify-evenly">競賽中2周創造4倍獲利</div>
    </div>
  </div>


  <!-- PC -->
  <div class="container hidden  lg:block">
    <div class="header">
      <div class="header-img">
        <img src="../assets/logo.png" alt="">
      </div>
        <div class="header-box justify-center bg-secondary text-lg w-64 text-white rounded-md p-2">
            <h1 class="p-2">用對「公式」</h1>
        </div>
        <div class="header-box1 text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay='1500'>
          <span>3萬本金</span><br>
          <span>也能幫你滾出 <font>百萬獲利！</font> </span>
        </div>
        <div class="header-box2 flex flex-col w-1/4" data-aos="fade-up" data-aos-duration="1500"
      data-aos-delay='1500'>
          <img src="../assets/Group.png" alt="">
        </div>
        <div class="header-box3 flex flex-col text-2xl" data-aos="fade-up" data-aos-duration="1500" data-aos-delay='1500'>
          <span>曾歷經頂尖交易作手地獄訓練 並在2年內研究過</span>
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
</div>

</template>


<script>
// import AOS from 'aos/dist/aos.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, onUnmounted } from "vue";


gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'Header',
  setup(){
    let tl = null;
    const triggers = ScrollTrigger.getAll();

    function gsapSet(){
      gsap.to(".header-box", {
        scrollTrigger: ".header-box",
        duration: 1,
        // rotation: 360,
        background: "orange",
        yoyo: true,
        repeat: -1,
        start: 'top bottom',
        end: 'bottom bottom',
      }),
      gsap.to(".header-box1 ",{
        scrollTrigger: ".header-box1 ",
        duration: 3,
        color: "#fa0",
        background: "#000",
        yoyo: true,
        repeat: -1,
        ease: "power2"
      })
    }

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });
    //   const beforeEnter = (el) => {
    //       console.log('before enter')
    //       el.style.transform = 'translateX(180px)'
    //       el.style.opacity = 0
    //   }
    //   const enter = (el) => {
    //       console.log('start to enter')
    //       gsap.to(el, {
    //           duration: 1,
    //           x: 0,
    //           opacity: 1
    //       })
    //       el.style.opacity = 1
    //   }
    //   const leave = (el) => {
    //       console.log('leave')
    //       gsap.to(el,{
    //           duration: 0.6,
    //           y: 0,
    //           opacity: 0
    //       })
    //   }
    // return { beforeEnter, enter, leave }
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
  // width: 900px;

  .header-ph{
    .text{
      text-align: center;
      font{
        color: #77ADAE;
      }
    }
  }
  .header{
    background: linear-gradient(to left, transparent, #fff),
      url("../assets/bg11.png");
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
      font{
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
      position: relative;
      top: 5%;
      left: 50%;
      width: 35%;
    }
  }
    .main_box{
      position: relative;
      top: 10%;
      left: 18%;
      width: 12rem;
      padding: 10px;
    }
  @media (min-width: 1280px) {
    .main_box{
      left: 45%;
    }
    .header-box4{
      position: relative;
      top: 5%;
      left: 50%;
      width: 50%;
    }
  }
  @media (max-width: 1440px) {
      .header-box4{
        top: 10%;
        left: 60%;
        width: 35%;
      }   
  }
  // @media (min-width: 1440px) {
  //   .header{
  //     .main_box{
  //       left: 45%;
  //     }
  //     .header-box4{
  //       position: relative;
  //       top: 10%;
  //       left: 60%;
  //       width: 35%;
  //     }      
  //   }

  // }
}
</style>