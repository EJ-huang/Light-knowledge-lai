<template>
<div class="main items-center   ">
  <div class="flex md:flex-col flex-wrap p-5">
      <div class="box-1 justify-center bg-secondary text-lg  text-white mt-5 rounded-md p-2">
          <h1 class="flex font-bold">現場分享</h1>
      </div>
    <div class="text-3xl text-left lg:text-center pt-2">現場講座中將與你分享五大實戰要點</div>
  </div>
  <hr class="mt-2">
    <div class="main2 flex flex-col pt-8">
        <div class="box flex items-center text-secondary text-2xl">
            <h1>01</h1>
            <span>台股台指期當沖</span>
        </div>    
        <div class="content flex justify-center pt-8">
            <div class="content-1 flex pl-2">
                <p>如何透過公式，清楚的抓出任何投資商品的走勢？最精采的內容，線上不能公開的秘密，我將在現場跟你分享。</p>
            </div>
        </div>      
    </div>
    <div class="main2 flex flex-col pt-8">
        <div class="box flex items-center text-secondary text-2xl">
            <h1>02</h1>
            <span>提高勝率的八大型態</span>
        </div>    
        <div class="content flex justify-center pt-8">
            <div class="content-1 flex pl-2">
                <p>觀察超過3萬多張盤勢之後，我歸納出的8大型態，用對了，可以大幅度提高你的交易勝率！</p>
            </div>
        </div>      
    </div>
    <div class="main2 flex flex-col pt-8">
        <div class="box flex  items-center  text-secondary text-2xl">
            <h1>03</h1>
            <span>成功交易人的四大特質與十大特性</span>
        </div>    
        <div class="content justify-center flex pt-8">
            <div class="content-1 flex pl-2">
                <p>在投資領域，技術很重要，但是心態更重要，如果你在投資路上績效不理想，這些特質與特性可以幫助你重新檢視自己。</p>
            </div>
        </div>      
    </div>
    <div class="main2 flex flex-col pt-8">
        <div class="box flex items-center text-secondary ">
            <h1>04</h1>
            <span>停損的藝術，計算盈虧讓每次交易都俱備最佳cp值！</span>
        </div>    
        <div class="content justify-center flex pt-8">
            <div class="content-1 flex pl-2">
                <p>盈虧比，這個重要觀念，很多操作十多年的投資人都可能不知道，搞懂盈虧比，抓住最佳停損時機，才是交易能穩定獲利的王道。</p>
            </div>
        </div>      
    </div>
    <div class="main2 flex flex-col pt-8">
        <div class="box flex items-center text-secondary ">
            <h1>05</h1>
            <span>上班族也能操盤！特殊高勝率操盤法！每天10分鐘輕鬆交易！</span>
        </div>    
        <div class="content justify-center flex pt-8">
            <div class="content-1 flex pl-2">
                <p>上班族上班無法操盤怎麼做？完全不用擔心，你可以運用早上10分鐘，簡單的方式快速搞定交易。</p>
            </div>
        </div>      
    </div>

    <div class="row main flex md:flex-col items-center pt-12" data-aos="flip-right" data-aos-duration="1500"
     data-aos-delay='1500' >
        <div class="box1 p-4 items-center">
            <div class="flex side-box justify-center bg-black text-2xl text-white mt-12  py-1 px-2  mx-5 my-5 rounded-md p-5">
                <img src="../assets/star2.png" alt="">
                <h1 class="flex content-center pt-2">限額!名額有限!</h1>
            </div>
            <div class="inside flex justify-center items-center p-2">
                <div class="side box-content lg:h-2.5 w-16 p-4 border-2 text-white">報名即贈</div>
                <img src="../assets/teacherYT.png" alt="">
            </div>
            <p class="text-secondary">諒師獨家型態學教學影片</p>
            <button class="btn flex items-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-12 ml-12 lg:ml-24  rounded mt-4 lg:mt-16">
            <img src="../assets/arrorw.png" alt="">/ 搶佔免費講座席次
            </button>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
    .main2{
        .box{
            width: 20rem;
            background: #E2EEEB;
            border-radius: 0 10px 10px 0;
        }
        h1{
            font-size: 48px;
            font-weight: 700;
        }
        .content{
            img{
                width: 10rem;
                // float: right;
            }
            p{
                color: #000;
            }
            span{
                color: #46AFB0;
            }
        }
    }
    .inside{
        img{
            height: 100px;
        }
    }
    .box1{
        background-image: url('../assets/foot2.png');
        background-size: cover;
        height: 50vh;
        width: 100%;
        background-repeat: no-repeat;
        padding: 10px;

        .side-box{
            img{
                width: 6rem;
                padding: 10px;
            }
        }
    }
    .btn{
        img{
            width: 10%;
        }
    }
    @media (min-width: 1280px) {
        .main{
            .box{
                position: relative;
                left: 40%;
                width: 20rem;
                padding: 10px;
            }
            .box1{
                background-size: contain;
                height: 30rem;
                width: 30rem;
            }
            .box-1{
                position: relative;
                left: 40%;
                width: 20rem;
                padding: 10px;
            }
        }

    }
</style>
