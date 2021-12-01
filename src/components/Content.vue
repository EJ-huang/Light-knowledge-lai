<template>
    <div class="content-center mt-8">
            <h2 class="text-center text-3xl lg:text-4xl pt-12">想在2022開局拿到紅盤好績效</h2>
            <h2 class="text-center text-3xl lg:text-4xl pt-12">提前為自己做好功課是必備的行動方針</h2>
            <div class="flex qu justify-center pt-12 md:pt-36 mb-8">
                <h2 class="text-center p-2 lg:text-3xl bg-gray-900 text-white">以下問題，一定要提前了解！</h2>
                <div class="line"></div>
                <div class="swo"><img src="../assets/sword.png" alt=""></div>
            </div>

            <div class="content-box grid justify-items-center grid-cols-1 lg:grid-cols-3 lg:p-12">
                <div class="box1 pb-4">
                    <img src="../assets/class_1.png" alt="">
                </div>
                <div class="box2">
                    <img src="../assets/class_4.png" alt="">
                </div>
                <div class="box3">
                    <img src="../assets/class_2.png" alt="">
                </div>
                <div class="box4 pt-0">
                    <img src="../assets/class_3.png" alt="">
                </div>
                <div class="box5">
                    <img src="../assets/class_5.png" alt="">
                </div>
                <div class="box6 pt-0">
                    <img src="../assets/class_6.png" alt="">
                </div> 
            </div>
            <div class="content-center">
                <h2 class="text-center lg:text-4xl p-12 lg:pb-40">全球股市或將迎來史上最大的「海嘯級行情」！   你做好準備了嗎？</h2>
            </div>
            <div class="content-footer main2 p-4  flex flex-col items-center text-center lg:h-60  bg-third text-white">
                <div class="triangle"></div>
                <div class="swo"><img src="../assets/Mask.png" alt=""></div>
              <p class="lg:text-4xl absolute mt-8 z-10">《百萬自媒體經營攻略 》</p>
              <p class="lg:text-4xl pb-4">不僅告訴你未來趨勢，更幫助你確立2022的最佳交易策略</p>
           </div>
    </div>
</template>


<script>
import { gsap } from "gsap";

export default {
    mounted: function () {
        this.scrollTrigger();
    },
    methods: {
        scrollTrigger(){
            gsap.timeline({
                scrollTrigger:{
                    trigger: '.content-center',
                    start: 'top center',
                    end: '30%',
                    scrub: true,
                }
            })
            .from(".content-box .box1", { x : -10, y: 0, rotation: 360, opacity: 0 , duration: 3 })
            .from(".content-box .box2", { x : -10, y: 100, rotation: 360, opacity: 0, duration: 3  })
            .from(".content-box .box3", { x : -10, y: 200, rotation: 360, opacity: 0, duration: 3  })
            .from(".content-box .box4", { x : 10, y: 0, rotation: 360, opacity: 0 , duration: 3 })
            .from(".content-box .box5", { x : 10, y: 100, rotation: 360, opacity: 0, duration: 3  })
            .from(".content-box .box6", { x : 10, y: 200, rotation: 360, opacity: 0, duration: 3  })
        }
    }
}
</script>


<style lang="scss" scoped>
.content-center{
    position: relative;
    .qu{
        position: relative;
        .line{
            width: 38px;
            height: 70px;
            border-bottom: 5px solid #065F76;
            position: absolute;
        }
        .swo{
            position: absolute;
            left: 2%;
            top: 50%;
        }
    }
    .main2{
        // position: relative;
        .triangle{
            z-index: 0;
            position: relative;
            width: 0;
            height: 0;
            bottom: 15%;
            border-style: solid;
            border-width: 0 100px 100px 100px;
            border-color: transparent transparent #324C5D transparent;
        }
        .swo{
            position: absolute;
            right: 10%;
            top: 90%;
        }
    }

     @media (max-width: 1440px){
    .qu{
        .swo{
            display: none;
        }
    }
         .main2{
             .triangle{
                 bottom: 5px;
             }
            .swo{
                display: none;
            }
         }
     }
}
</style>