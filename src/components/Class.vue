<template>
<div class="page">
      <div class="flex md:flex-col items-center flex-wrap md:content-around p-5">
          <div class="main1">

          </div>
        <div class="text-3xl text-left pt-2 pb-2">除了講座以外，我曾在</div>
        <div class="inside flex justify-items-start pb-2">
            <div class=" justify-center bg-secondary text-lg text-white lg:mt-5 rounded-md p-2 mr-2">
                <h1 class="flex content-center font-bold">hahow</h1>
            </div>
            <div class=" justify-center bg-yellow-500 text-lg text-white lg:mt-5 rounded-md p-2">
                <h1 class="flex content-center font-bold">尹星</h1>
            </div>
        </div>

    <div class="text-3xl text-left pt-2 pb-2"> 開設過許多課程</div>
<hr class="mt-2 mb-8 pb-2">
    <h1>累積學員近千人，評價都還不錯！</h1>
            <!-- <div class="box1 pt-2">
                <img src="../assets/classbg1.png" alt="">
            </div> -->
            <div class="main-bg flex flex-col items-center">
                <div class="main main-container  w-64 lg:w-2/4 pt-4  ">
                        <div class="imgbgc lg:hidden">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                            <img src="../assets/classbg1.png" alt="">
                        </div>
                
                        <div class="box2 side-1 h-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>非常物超所值的課程 !</p>
                                <p>這是套循序漸進、邏輯清晰、簡單易懂、非常實用的課程，量價觀念清楚，老師直接提供型態學、進場出場策略等，利用模擬單學習，非常適合新手或還在茫茫股海中尋找方向的朋友反覆觀看，非常物超所值的課程，值得推薦!</p>
                        </div>
                        <div class="box2 side-2  h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>量價交易精隨</p>
                                <p>講得很有架構和系統~很棒</p>
                        </div>
                        <div class="box2 side-3 h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>非常超值的課程</p>
                                <p>老師課程安排十分完整，加上口條清楚，學習上非常輕鬆。事實上，這樣的課程賣10倍的價格都算是合理，非常佛心的價格，在Hahow平台更是錦上添花，非常值得推薦。</p>
                        </div>
                        <div class="box2 side-4 h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>誠意滿滿</p>
                                <p>課程每段時間切分得恰當，內容意豐富，課後互動頻率高，誠意滿滿，感受用心經營的熱忱</p>
                        </div>
                        <div class="box2 side-5 h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>收穫良多</p>
                                <p>非常喜歡第九章的第二單元，從實戰當中搭配老師的講解來學習，真的收穫很多。</p>
                        </div>
                        <div class="box2 side-6 h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>課程內容簡明有效</p>
                                <p>課程內容雖然簡明，但有效。實際進場交易的好策略，長期一定會賺錢。</p>
                        </div>
                        <div class="box2 side-7 h-auto w-auto p-4 border-2 mb-4 rounded" >
                            <img src="../assets/star3.png" alt="">
                                <p>課程學習心得</p>
                                <p>經過老師的講解，對於原本學習過內容，像是型態與價量的關係，有著更深的體悟。尤其是前三章節的心法，第二次看的時候真心覺得，才開始理解這部分的重點性。總之，這堂課程非常值得！</p>
                        </div>
                        <div class="box2 side-8 h-auto w-auto p-4 border-2 mb-4 rounded z-20" >
                            <img src="../assets/star3.png" alt="">
                                <p>非常實用的一門課程，很值得推薦</p>
                                <p>我是期貨小白，所以在聽完全部的課程後，不僅對期貨有一些了解，對於趨勢的看法、價量的解讀、進出場點的判斷，都給我一個新的感受，尤其用在現股上，勝率也比在未學習前來的高，很幸運可以聽到這門課，很棒，非常值得推薦。</p>
                        </div>
                </div>
            </div>

  </div>
  <div class="footer-box flex flex-col items-center">
    <img src="../assets/classbg3.png" class="bg1" alt="">
    <img src="../assets/classbg4.png" class="bg2" alt="">
  </div>
</div>

  
</template>



<script>
import { onMounted, onUnmounted } from "vue";
import  { gsap }  from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
export default {
        mounted: function() {
        this.scrollTrigger();
    },
    methods: {
        scrollTrigger(){
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".main-container",
                    start: "top center",
                    end: "center",
                    scrub: true,
                    // markers: true
                    // pin: true,
                    // pinSpacing: false
                },
            })
            .from(".side-1", { x : -800, y: 0, rotation: 180, opacity: 0 })
            .from(".side-2", { x : -800, y: 0, opacity: 0 })
            .from(".side-3", { x : 0, y: 0, opacity: 0 })
            .from(".side-4", { x : -800, y: 0, opacity: 0 })
            .from(".side-5", { x : -800, y: 0, opacity: 0 })
            .from(".side-6", { x : -800, y: 0, opacity: 0 })
            .from(".side-7", { x : -800, y: 0, opacity: 0 })
            .from(".side-8", { x : -800, y: 0, opacity: 0 })

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer-box",
                    start: "top center",
                    end: "center top",
                    // markers: {startColor: "green", endColor: "red", fontSize: "24px"},
                    scrub: true,
                    // pin: true,
                    // pinSpacing: false
                },
            })
            .from(".bg1", { x : 0, y: 0, opacity: 0})
            .from(".bg2", { x : -400, y: 0, opacity: 0})
        }
    },
    setup() {

        
    //     let tl = null;

    //     function getDocumentHeight() {
    //         const body= document.body;
    //         const html=document.documentElement;
    //         return Math.max(
    //             body.offsetHeight,
    //             body.scrollHeight,
    //             html.clientHeight,
    //             html.offsetHeight,
    //             html.scrollHeight
    //         );
    //     }

    //    const documentTop = () => (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;


    //     const gsapInit = () => {
    //         tl = gsap.timeline({defaults: { duration: 1 }});
    //         tl.to(".pic1", {"margin-left": "0",  "opacity":1});
    //         tl.to(".pic9", {"transform":"scaleY(1)","opacity":5});
    //         tl.pause();
    //     }

    //   const handleWinScroll = () => {
    //       const scrollTop = documentTop();
    //       const docHeight = getDocumentHeight();
    //       const winHeight = window.innerHeight;
    //       const scrollPercent = (scrollTop) / (docHeight + winHeight);
    //       tl.progress(scrollPercent);
    //   }


    //   onMounted(()=> {
          
    //       window.addEventListener("scroll", handleWinScroll);
    //       gsapInit();
    //   })

    //   onUnmounted(()=> {
    //       window.removeEventListener("scroll" ,handleWinScroll);
    //   })
    
    //   return {}
    },
}
</script>


<style lang="scss" scoped>
    .pic{
        overflow: hidden;
        opacity: 0;
    }
    // .pic1{
    //     width: 0;
    // }
    // .pic9{
    //     transform:scaleY(-1.4);
    // }
    
.main-container{
    .pic{
        overflow: hidden;
        opacity: 0;
    }
    .pic1{
        margin-left: -120px;
    }
    .pic9{
        transform:scaleY(-1.4);
    }
    // .box1{
    //     position: absolute;
    //     z-index: -1;
    //     img{
    //         width: 200px;
    //     }
    // }
    .imgbgc{
        padding: 10px;
        background-color: #fff;
        position: absolute;
        right: 0;
        z-index: 2;
        margin: 15px;
        border: 1px solid #F4F7F7;
        border-radius: 20px;
        width: 40vw;
        img{
            margin-bottom: 5px;
        }
    }
    .box2{
        position: relative;
        z-index: 2;
        background-color: #F4F7F7;
;
        
        img{
            padding-bottom: 15px;
        }
        p{
            text-align: left;
        }
    }
}

@media (min-width: 1280px) {
    box{

    }
}
</style>
