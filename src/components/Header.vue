<template>
        <div class="header">
          <div class="row  flex flex-col lg:flex-row justify-center text-white">
              <div class="row">
                <div class="header-img">
                  <img src="../assets/logo1.png" alt="">
                </div>

                  <div class="header-box1 text-left z-10 space-y-4" data-aos="fade-down" data-aos-duration="1500" data-aos-delay='1500'>
                    <span>各國瘋狂印鈔後</span><br>
                    <span>全球通膨急遽升溫、國際指數不斷堆高… </span><br>
                    <span class="text-4xl flex-wrap">2022年的股市</span><br>
                    <span>是否將迎來<font>雪崩般暴跌？</font></span>
                  </div>
                    <div class="icon absolute z-0">
                      <img src="../assets/Ellipse.png"  alt="">
                    </div>
                  <!-- <div class="header-box2 flex flex-col w-1/4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay='1500'>
                    <span>台股投資趨勢論壇4大頂尖交易人，帶你看見2022長線、短線獲利契機！</span>
                  </div> -->
                  <div class="header-box3 z-10  text-left text-2xl" data-aos="fade-up" data-aos-duration="1500" data-aos-delay='1500'>
                    <span>台股投資趨勢論壇</span><br>
                    <p>4大頂尖交易人，帶你看見2022長線、短線獲利契機！</p>
                  </div>
                  <div class="icon2 absolute z-0">
                    <img src="../assets/Group1.png"  alt="">
                  </div>
          </div>

              <div class="header-box4  flex flex-row  sm:mt-24 lg:mt-40 lg:pl-80">
                <div class="row">
                    <div class="teacher-content1 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">投機之王 - 5萬8翻身上億資產</div>
                        <div class="line"></div>
                    </div>
                    <img src="../assets/wawa.png" alt="">
                    <img src="../assets/icon.png" class="pl-8 lg:pl-12" alt="">

                </div>
                <div class="  pt-20 ">
                    <img src="../assets/kai.png" alt="">
                    <div class="teacher-content2 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">外資歌神 - 曾任外資機構操盤管理職</div>
                        <div class="line2"></div>
                    </div>
                </div>
                <div class="">
                    <div class="teacher-content3 absolute lg:hidden">
                        <div class="teacher-name  bg-white-500 ">金控自營部操盤人 - 十年績效不曾為負</div>
                        <div class="line3"></div>
                    </div>
                        <img src="../assets/hor.png" alt="">
                        <img src="../assets/icon2.png" class="pl-8 lg:pl-12" alt="">
                        <!-- <div class="teacher-name bg-white-500  pl-12 -mt-36 text-4xl ">冒牌生</div> -->
                </div>
                <div class=" pt-20">
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
      top: 55%;
      left: 10%;
      // font-size: 36px;
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
        .header-box1{
          font-size: 12px;
          top: 10%;
        }
        .header-box3{
          font-size: 12px;
          top: 22%;
        }
        .header-box4{
          padding: 30px;
          margin-top: 25rem;
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
    @media (max-width: 1024px) and (min-width: 376px){
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
            // bottom: 8%;
            left: 20%;
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
            top: 48%;
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
            // bottom: 3%;
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
      .teacher-content4{
        right: 5rem;
        bottom: 2rem;
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