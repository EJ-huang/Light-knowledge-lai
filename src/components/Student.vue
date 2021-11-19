<template>

    <div class="p-2 lg:p-0">
        <!-- <transition appear @before-enter="beforeEnter" @enter="enter" @leave="leave"> -->
            <div class="row flex  md:flex-col flex-wrap  md:content-around p-5" >
                <div class="flex items-start bg-secondary text-lg w-32 text-white mt-5 rounded-md p-2">
                    <h1 class="flex  font-bold">非常多的學生</h1>
                </div>
                <div class="text-3xl text-left pt-2">學會這套秘密公式 已經成為出色的股市操盤手！</div>
            </div>
        <!-- </transition> -->

    <hr class="mt-2 lg:hidden">
        <div class="main text-left lg:text-center text-2xl p-2 lg:p-0 leading-10">
            <p>許多人一聽到<span>「股市交易公式」</span>會開始緊張，因為他們會害怕自己無法學會</p>
        </div>
        <div class="student-main h-20 text-center lg:text-3xl  text-secondary bg-advantage  pt-2 m-0">
            <h1>老師，我是新手這個公式會跟數學一樣困難嗎？</h1>
        </div>
        <div class="student-second  text-center">
            
        </div>
        <div class="down p-8 text-left lg:text-center leading-10">
            <h1>對於在求學階段對數學有陰影的人，不用擔心，只要你的視力正常，能分辨出圖形，沒有色盲，基本上都能在短時間內學會！</h1>
        </div>
        <div class=" student-third flex items-center justify-evenly text-2xl bg-advantage py-10">
            <p>沒有投資經驗的新手，已經在市場中做到 <span>穩定獲利 !</span></p>
        </div>
        <div class=" student-fourth text-2xl bg-advantage  py-24">
            <p>從新手開始買房子，這位學生 <span>買了房子 !</span></p>
        </div>  
        <div class="main2 lg:flex md:flex-col items-center text-left text-2xl pt-12 p-2 leading-10 text-secondary">
            <p>記得曾有學生問我：「老師，股市真的能用小資金操作嗎？ 3萬、5萬塊也可以？」<span> 這位學生問完的隔天，我開了一個示範帳戶，裡面放入3萬7的小資金，直接實測給他看！</span></p>
            <img src="../assets/student4.png" alt="">
        </div>
        <div class=" student-fifth bg-advantage text-2xl  py-16 lg:py-32">
            <p>從新手開始買房子，這位學生 <span>買了房子 !</span></p>
        </div> 
        <div class="row main flex md:flex-col items-center pt-12" data-aos="flip-right" data-aos-duration="1500"
        data-aos-delay='1500' >
            <div class="box1 items-center">
                <div class="flex side-box justify-center bg-black text-2xl text-white mt-12  py-1 px-2  mx-5 my-5 lg:my-15 rounded-md p-5">
                    <img src="../assets/star2.png" alt="">
                    <h1 class="flex content-center pt-2">限額!名額有限!</h1>
                </div>
                
                <p class="text-white">短線交易的秘密公式</p>
                <p class="text-white"> 開始規劃出明確走勢</p>
                <p class="text-secondary">用三萬小資金，創造百萬獲利!</p>

                <button class="btn flex items-center  bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-12 ml-12 lg:ml-24  rounded mt-8 lg:mt-16">
                    <img src="../assets/arrorw.png" alt="">/ 搶佔免費講座席次
                </button>
            </div>
        </div>
    </div>    


</template>


<script>
// import { ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'Student',
  props: {
    msg: String
  },

  setup(){
      const beforeEnter = (el) => {
          console.log('before enter')
          el.style.transform = 'translateX(180px)'
          el.style.opacity = 0
      }
      const enter = (el) => {
          console.log('start to enter')
          gsap.to(el, {
              duration: 1,
              x: 0,
              opacity: 1
          })
          el.style.opacity = 1
      }
      const leave = (el) => {
          console.log('leave')
          gsap.to(el,{
              duration: 0.6,
              x: 100,
              opacity: 0
          })
      }
    return { beforeEnter, enter, leave }
  }
}
</script>

<style lang="scss" scoped>
.student-second{
    //   position: relative;
    //   top: 10%;
    //   left: 25%;
    //   width: 12rem;
    //   padding: 10px;
}
.student-third{
    background-image: url('../assets/student1.png');
    background-size: contain;
    background-position-x: 60%;
    height: 20rem;
    // width: 100%;
    padding-right: 10rem;
    padding-bottom: 10rem;
    background-repeat: no-repeat;
    span{
        color: #46AFB0;
    }
    p{
        float: left;
    }
    img{
        float: right;
    }
}
.student-fourth{
    background-image: url('../assets/student3.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 30%;
    height: 20rem;
    width: 100%;
    padding-left: 12rem;
    span{
        color: #46AFB0;
    }
}
.main2{
    span{
        color: #000;
    }
    img{
        width: 100%;
    }
}
.student-fifth{
    background-image: url('../assets/student2.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 30%;
    height: 17rem;
    width: 100%;
    padding-left: 12rem;
    span{
        color: #46AFB0;
    }
}
.box1{
    background-image: url('../assets/foot2.png');
    background-size: cover;
    height: 300px;
    width: 100%;
    background-repeat: no-repeat;

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
        .main2{
            img{
                width: 20%;
            }
        }
        .box1{
            background-size: contain;
            height: 30rem;
            width: 30rem;
        }
        .student-second{
            left: 45%;
        }
        .student-third{
            padding-right: 30rem;
        }
        .student-fourth{
            background-position-x: 30%;
            padding-left: 60rem;
        }
        .student-fifth{
            background-position-x: 30%;
            padding-left: 60rem;
        }
}
</style>