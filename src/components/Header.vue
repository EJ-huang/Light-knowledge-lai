<template>
        <div class="header">
          <div class="row  flex flex-col lg:flex-row justify-center text-white">
              <div class="row">
                <div class="header-img">
                  <img src="../assets/logo1.png" alt="">
                </div>

                  <div class="header-box1 text-left z-10 space-y-4">
                    <span>各國瘋狂印鈔後</span><br>
                    <span>全球通膨急遽升溫、國際指數不斷堆高… </span><br>
                    <span class="text-2xl lg:text-5xl flex-wrap">2022年的股市</span><br>
                    <span class="text-2xl lg:text-5xl">是否將迎來<font>雪崩般暴跌？</font></span>
                  </div>
                    <div class="icon absolute z-0">
                      <img src="../assets/Ellipse.png"  alt="">
                    </div>
                  <div class="header-box3 z-10  text-left text-2xl">
                    <span>台股投資趨勢論壇</span><br>
                    <p>4大頂尖交易人，帶你看見2022長線、短線獲利契機！</p>
                  </div>
                  <div class="icon2 absolute z-0 lg:hidden">
                    <img src="../assets/Group1.png"  alt="">
                  </div>
                  <div class="icon3 absolute z-0">
                    <img src="../assets/logo2.png"  alt="">
                  </div>
          </div>

              <div class="header-box4  flex flex-row  sm:mt-24 lg:mt-40 lg:pl-80">
                <div class="row box1 hidden lg:block">
                    <div class="teacher-content1 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">投機之王 - 5萬8翻身上億資產</div>
                        <div class="line"></div>
                    </div>
                    <img src="../assets/wawa.png" alt="">
                    <img src="../assets/icon.png" class="pl-8 lg:pl-12" alt="">
                </div>
                <div class="row box1-1 lg:hidden">
                    <div class="teacher-content1 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">投機之王 - 5萬8翻身上億資產</div>
                        <div class="line"></div>
                    </div>
                    <img src="../assets/wawa.png" alt="">
                    <img src="../assets/icon.png" class="pl-8 lg:pl-12" alt="">
                </div>
                <div class="pt-20 box2 hidden lg:block">
                    <img src="../assets/kai.png" alt="">
                    <div class="teacher-content2 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">外資歌神 - 曾任外資機構操盤管理職</div>
                        <div class="line2"></div>
                    </div>
                </div>
                <div class="pt-20 box2-2 lg:hidden">
                    <img src="../assets/kai.png" alt="">
                    <div class="teacher-content2 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">外資歌神 - 曾任外資機構操盤管理職</div>
                        <div class="line2"></div>
                    </div>
                </div>
                <div class="box3 hidden lg:block">
                    <div class="teacher-content3 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">金控自營部操盤人 - 十年績效不曾為負</div>
                        <div class="line3"></div>
                    </div>
                        <img src="../assets/hor.png" alt="">
                        <img src="../assets/icon2.png" class="pl-8 lg:pl-12" alt="">
                </div>
                <div class="box3-3 lg:hidden">
                    <div class="teacher-content3 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">金控自營部操盤人 - 十年績效不曾為負</div>
                        <div class="line3"></div>
                    </div>
                        <img src="../assets/hor.png" alt="">
                        <img src="../assets/icon2.png" class="pl-8 lg:pl-12" alt="">
                </div>
                <div class="pt-20 box4 hidden lg:block">
                    <img src="../assets/lia.png" alt="">
                    <div class="teacher-content4 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">金融怪才 - 自學成材殺入全球交易競賽前四強</div>
                        <div class="line4"></div>
                    </div>
                </div>
                <div class="pt-20 box4-4 lg:hidden">
                    <img src="../assets/lia.png" alt="">
                    <div class="teacher-content4 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">金融怪才 - 自學成材殺入全球交易競賽前四強</div>
                        <div class="line4"></div>
                    </div>
                </div>
            </div>
          </div>
          <div class="main p-4  flex flex-col items-center text-center lg:h-60 mt-60 md:mt-16  lg:mt-44 bg-third text-white">
              <p class="lg:text-4xl pt-8 mb-8">為什麼頂尖交易人，此刻都對股市崩跌開始有所警惕！？</p>
              <p class="lg:text-4xl"> 線圖、基本面、資金流向哪一點讓股市出現衰敗徵兆！？</p>
           </div>
        </div>

    
</template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    mounted: function () {
        this.scrollTrigger();
    },
    methods: {
      scrollTrigger(){
        ScrollTrigger.matchMedia({
          "(min-width: 768px)" : function(){
          gsap.fromTo('.header-box4 .box1',{ y: -200, opacity: 0 },  { y: 0, opacity: 1, duration: 2})
          gsap.fromTo('.header-box4 .box2',{ y: 200,opacity: 1 },  { y:-0,opacity: 1, duration: 4})
          gsap.fromTo('.header-box4 .box3',{ y: -200,opacity: 1 },  { y:-0,opacity: 1, duration: 4})
          gsap.fromTo('.header-box4 .box4',{ y: 200,opacity: 1 },  { y:-0,opacity: 1, duration: 4})
          },
        })
      }
    }
}
</script>

<style lang="scss" scoped>
// .container{
//   margin: 0;
//   padding: 0;
// }
.header{
    position: relative;
    background-image: url('../assets/bg_header.png');
    background-repeat: no-repeat;
    background-size: cover;

    // height: 750px;
    // width: 100vw;
    .header-img{
      position: absolute;
      top: 5%;
      right: 5%;
    }
    .icon{
      top: 42%;
      left: 10%;
    }
    .icon2{
      bottom: 30%;
      left: 10%;
    }
    .icon3{
      bottom: 35%;
      left: 10%;
    }
    .header-box1{
      position: absolute;
      top: 20%;
      left: 10%;
      font-size: 36px;
      font{
        color: #F8CA7D;
      }
    }
    .header-box3{
      position: absolute;
      bottom: 50%;
      left: 10%;
      .header-box3_inside{
        padding: 5px;
        background: rgba(255, 255, 255, 0.8);
      }
      font{
        color: #77ADAE;
        background: rgba(255, 255, 255, 0.8);
      }
    }
    .header-box4{
      padding-left: 40rem;
    }
}
    @media (max-width: 376px) {
      .header{
        background-image: url('../assets/bg_header1.png');
        background-size: cover;
        // height: 100vh;
        .header-img{
          left: 10%;
        }
        .icon{
          top: 20%;
          left: 10%;
        }
        .icon2{
          bottom: 70%;
          left: 10%;
        }
        .icon3{
          padding: 10px;
          bottom: 23%;
          left: 0;
        }
        .header-box1{
          font-size: 12px;
          top: 10%;
        }
        .header-box3{
          font-size: 12px;
          top: 20%;
        }
        .header-box4{
          padding: 30px;
          margin-top: 23rem;
          .teacher-content1{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 31%;
            .line{
              border-right: 1px solid #fff;
              height: 60px;
              position: absolute;
              left: 10%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content2{
            background-color: #fff;
            font-size: 12px;
            padding: 5px;
            color: #595757;
            bottom: 38%;
            left: 15%;
            .line2{
              border-right: 1px solid #fff;
              height: 10px;
              position: absolute;
              left: 60%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content3{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 34%;
            right: 5%;
            .line3{
              border-right: 1px solid #fff;
              height: 18px;
              position: absolute;
              left: 30%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content4{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            bottom: 35%;
            right: 5%;
            .line4{
              border-right: 1px solid #fff;
              height: 50px;
              position: absolute;
              right: 10%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
        }
      }
    }
    @media (min-width: 428px) and (max-height: 926px){
      .main{
        margin-top: 5rem;
      }
      .header{
        .header-box4{
          padding-left: 0;
        }
        background-size: cover;
        height: 100vh;
        .header-img{
          left: 10%;
        }
        .icon{
          top: 20%;
          left: 10%;
        }
        .icon2{
          bottom: 70%;
          left: 10%;
        }
        .header-box1{
          font-size: 12px;
          top: 10%;
        }
        .header-box3{
          font-size: 12px;
          top: 20%;
        }
        .header-box4{
          padding: 30px;
          .teacher-content1{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 34%;
            .line{
              border-right: 1px solid #fff;
              height: 60px;
              position: absolute;
              left: 10%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content2{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            bottom: 24%;
            left: 15%;
            .line2{
              border-right: 1px solid #fff;
              height: 10px;
              position: absolute;
              left: 60%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content3{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 38%;
            right: 5%;
            .line3{
              border-right: 1px solid #fff;
              height: 18px;
              position: absolute;
              left: 30%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content4{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            bottom: 20%;
            right: 8%;
            .line4{
              border-right: 1px solid #fff;
              height: 50px;
              position: absolute;
              right: 10%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
        }
      }
    }
    @media (max-width: 1024px) and (min-width: 376px){
      .header{
        .header-box4{
          padding-left: 0;
        }
        background-size: cover;
        // height: 100vh;
        .header-img{
          left: 10%;
        }
        .icon{
          top: 20%;
          left: 10%;
        }
        .icon2{
          bottom: 70%;
          left: 10%;
        }
        .icon3{
          bottom: 18%;
          left: 5%;
        }
        .header-box1{
          font-size: 12px;
          top: 10%;
        }
        .header-box3{
          font-size: 12px;
          top: 20%;
        }
        .header-box4{
          padding: 30px;
          margin-top: 27rem;
          // margin-bottom: 10rem;
          .teacher-content1{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 34%;
            .line{
              border-right: 1px solid #fff;
              height: 60px;
              position: absolute;
              left: 10%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content2{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            bottom: 32%;
            left: 15%;
            .line2{
              border-right: 1px solid #fff;
              height: 10px;
              position: absolute;
              left: 60%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content3{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            top: 38%;
            right: 5%;
            .line3{
              border-right: 1px solid #fff;
              height: 18px;
              position: absolute;
              left: 30%;
              top: 100%;
              transform: rotate(-20deg);
            }
          }
          .teacher-content4{
            background-color: #fff;
            padding: 5px;
            color: #595757;
            font-size: 12px;
            bottom: 28%;
            // right: 8%;
            .line4{
              border-right: 1px solid #fff;
              height: 50px;
              position: absolute;
              right: 10%;
              bottom: 100%;
              transform: rotate(-20deg);
            }
          }
        }
      }
    }
    @media (max-width: 768px) {

    }
    @media (max-width: 1024px) {
      .main{
        margin-top: 10rem;
      }
      .teacher-content4{
        right: 5%;
        bottom: 15%;
      }
      .header-box4{
        margin-top: 22rem;
      }
    }
    @media (max-width: 1440px){
      .header{
        .header-box4{
          // padding-left: 50rem;
        }
      }
    }

</style>