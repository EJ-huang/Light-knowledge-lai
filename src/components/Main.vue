<template>

    <div class="row flex flex-wrap justify-center">
        <div class="flex teacher w-auto p-12 lg:p-24 items-center" data-aos="fade-right" data-aos-duration="1500">
            <img src="../assets/teacher1.png" alt="">
            <h1 class="flex pt-8 lg:p-32 justify-center">金融怪才-徐諒諒</h1>
        </div>
        <hr class="mt-2">
        <div class="row" data-aos="fade-left" data-aos-duration="2000">
            <div class="main text-left m-10 p-2 leading-10">
                <h1 class="font-bold text-2xl">嗨，我是徐諒諒</h1>
                <p>在投資世界裡，有交易公式與沒公式的人，命運會很懸殊!</p>
                <p>有明確的交易方法<span class="text-secondary">只要勝率有6成，長期下來都能賺錢</span>(你同意吧?)</p>
            </div>
            <div class="content text-left m-10 p-2 leading-10">
                <h1 class="font-bold text-2xl">我在新手時期很幸運的遇到一位操盤界大師</h1>
                <p>他出資培訓我，讓我每天操作美股當沖，一天的資金只有30美金，輸光了就要罰站到天亮!</p>
                <p>於是...我開始長達3個月的腿部肌耐力訓練，整整三個月我都在罰站中渡過。<br>這真的很崩潰，你能想像一個新手沒有任何財經知識，直接下場操作還要被懲罰的心情嗎?</p>
                <p>為了改變處境，我開始在每一次交易用A4紙畫出盤型與自己的觀察</p>
            </div>            
        </div>
    </div>




    <div class="main h-60 text-center bg-advantage text-secondary text-2xl mt-12 pt-12">
      <p>每天長達10小時緊盯螢幕並實測上百種操作模式</p>
      <p>我抓出了一組獲利交易公式...</p>
  </div>
  <div class="down p-8 text-left lg:text-center leading-10">
      <p>這讓我感到很驚訝，因為這跟很多數人使用的技術幾乎無關:</p>
      <ol class="list-disc lg:list-none">
          <li>不需要運用一堆技術指標</li>
          <li>不需要看均線</li>
          <li>甚至不需要盯盤</li>
      </ol>
  </div>

<div class="main h-100 bg-dark_black  text-2xl mt-12 pt-12 lg:p-3">
    <div class="box flex items-center justify-center h-12  bg-secondary text-2xl text-white mt-5 py-1  mx-5 my-5  rounded-md p-4">
        <img src="../assets/star1.png" alt="">
        <h1 class="flex content-center mt-4">IMPORTANT</h1>
    </div>
      <h1 class="text-white pt-2  text-center text-2xl">這套公式最重要的事情在於</h1>
      <ol class="list-disc lg:list-none flex flex-col text-center p-10 lg:p-4  text-white text-2xl">
          <li>看懂「型態」，運用線團中的「型態」可以大幅幫助你<span>提高勝率!</span></li>
          <li>透過「公式」規劃出<span>股市當日的走向!</span></li>
          <li>遵守紀律，照著規劃出的行情<span>提前佈局交易單!</span></li>
      </ol>
  </div>

</template>


<script>
import AOS from 'aos/dist/aos.css'
export default {
  name: 'Main',
  props: {
    msg: String
  },
    mounted: function(){
      AOS
    // gsap.from('.square', {duration:4, scale: 2})
  }
}
</script>

<style lang="scss" scoped>
    .teacher{
          img:hover{
    transform: rotateY(180deg) scale(1.2);
  }
    }
    .main{
        .box{
            position: relative;
            img{
                width: 150px;
                padding-right: 10px;
            }
        }
        ol{
            span{
                color: #46AFB0;
            }
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
        }
    }
</style>