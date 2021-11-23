<template>
    <div class="row main flex md:flex-col items-center flex-wrap md:content-around p-5">
        <div class=" bg-secondary text-lg  text-white mt-5 rounded-md p-2">
            <h1 class="flex">運用「公式」做交易</h1>
        </div>
        <div class="text-3xl text-left pt-2">你可以提前掌握任何金融商品的短期走勢 !</div>
        <hr class="mt-2">
        <div class="main text-left p-2 leading-10">
            <h1 class="font-bold text-2xl text-secondary">以下是我在直播節目中講解台股大盤</h1>
            <p>當天5/11透過公式判斷出走勢 5/12台股直接照著劃出的方向走！</p>
        </div>
        <img src="../assets/trade.png" alt="">
        <img src="../assets/trade1.png" alt="">
        <div class="foot lg:text-2xl pt-12 pb-12">
            <h1>當天我開給學生觀摩的示範帳戶<span>直接獲利42萬</span>!</h1>
        </div>
        <img src="../assets/foot.png" alt="">
        <div class="foot2 lg:text-2xl pb-2">
            <p>更多網路上無法公開的案例與短線交易公式我將在講座中跟你分享!</p>
        </div>
        <div class="row main-inside flex md:flex-col items-center w-full  pt-12">
            <div class="box1 box-inside1 items-center">
                <div class="flex side-box justify-center bg-black text-2xl text-white mt-12  py-1 px-2  mx-5 my-5 lg:my-10 rounded-md p-5">
                    <img src="../assets/star2.png" alt="">
                    <h1 class="flex content-center pt-2">名額有限</h1>
                </div>
                <div class="flex flex-col justify-center items-center lg:text-2xl">
                    <p class="text-white">短線交易的秘密公式，提前預測明日走勢</p>
                    <p class="text-secondary">股票,期貨,美股通通適用</p>
                </div>

                <button class="btn flex items-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-12 mt-8 ml-12 lg:ml-24  rounded lg:mt-16">
                    <img src="../assets/arrorw.png" alt="">/ 搶佔免費講座席次
                </button>
            </div>
        </div>

    </div>

</template>

<script>
import gsap from 'gsap/all';
export default {
    mounted: function(){
        this.scrollTrigger();
    },
    methods: {
        scrollTrigger(){
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".main-inside",
                    start: "top center",
                    end: "center 50%",
                    scrub: true,
                }
            })
            .from(".box-inside1", { x: -100, y: 300, rotation:180, opacity: 0})
        }
    }
}
</script>


<style lang="scss" scoped>
.foot{
    span{
        color: #46AFB0;
    }
}
.row{
    .box1{
        background-image: url('../assets/foot2.png');
        background-size: contain;
        height: 50vh;
        width: 100%;
        background-repeat: no-repeat;

        .side-box{
            img{
                width: 6rem;
                padding: 10px;
            }
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
        .box1{
            background-size: contain;
            // height: 40rem;
            width: 30rem;
        }
    }
}

</style>