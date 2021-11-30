<template>
        <div class="container-center2">
            <div class="flex flex-col items-center qu pt-24 ">
                <h2 class="flex justify-center p-2 text-4xl lg:text-3xl bg-gray-900 text-white lg:w-1/4 ">2021 / 12 / 09</h2>
                <h2 class="text-center text-3xl lg:text-4xl pt-12">趨勢論壇精彩議程</h2>
                <div class="line"></div>
            </div>


            <div class="flex flex-col items-center text-2xl lg:text-4xl text-center space-y-8 pt-20">
                <p class="justify-center bg-gray-200 text-secondary lg:text-6xl pb-2 num">01</p>
                <h2 class="text-left font-bold  pb-2">投資人在年末，最該注意什麼？</h2>
                 <p class="flex justify-center bg-secondary w-11/12 lg:w-3/4 text-white p-2 container-word_1">許多人認為產業成長在未來將衰退，2022台股能上2萬點嗎？</p>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-2/4 text-white p-2 container-word_1">2022年度，哪些產業題材是可以關注的重點？</p>
            </div>
            <hr>

            <div class="flex flex-col items-center text-2xl lg:text-4xl text-center space-y-8 pt-20">
                <p class="justify-center bg-gray-200 text-secondary lg:text-6xl pb-2 num">02</p>
                <h2 class="text-left font-bold  pb-2">國際通膨與升息對股市的影響及應變方向</h2>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-3/4 text-white p-2 container-word_2">通膨發酵，美國很可能升息，對於股市未來走勢，會產生哪些化學變化？</p>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-2/4 text-white p-2 container-word_2">發生波動時，該做什麼緊急應變？</p>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-2/4 text-white p-2 container-word_2">若空頭來襲，如何把握住這波「海嘯級行情」？</p>
            </div>
            <hr>

            <div class="flex flex-col items-center text-2xl lg:text-4xl text-center space-y-8 pt-20">
                <p class="justify-center bg-gray-200 text-secondary lg:text-6xl pb-2 num">03</p>
                <h2 class="text-left font-bold  pb-2">2022台股投資佈局要點與重點操作題材</h2>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-3/4 text-white p-2 container-word_3">許多人認為產業成長在未來將衰退，2022台股能上2萬點嗎？</p>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-2/4 text-white p-2 container-word_3">2022年度，哪些產業題材是可以關注的重點？</p>
            </div>
            <hr>

            <div class="flex flex-col items-center text-2xl lg:text-4xl text-center space-y-8 pt-20 pb-24">
                <p class="justify-center bg-gray-200 text-secondary lg:text-6xl pb-2 num">04</p>
                <h2 class="text-left font-bold  pb-2">2022投資交易具體策略與應變措施</h2>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-3/4 text-white p-2 container-word_4">面對通膨壓力、產業低基期的影響，在2022投資上具體的策略是什麼？</p>
                 <p class="justify-center bg-secondary  w-4/5 lg:w-2/4 text-white p-2 container-word_4">在投資交易上，提高投資績效的具體作法有哪些？</p>
            </div>
            <div class="swo"><img src="../assets/sword2.png" alt=""></div>
    </div>
</template>

<script>
import { gsap } from "gsap";

export default {
    mounted: function () {
        // this.color();
    },
    methods: {
        color(){
            gsap.to(".container-word_1", { background: "#fa0", yoyo: true, repeat: -1, duration: 1 })
            gsap.to(".container-word_2", { background: "#faf", yoyo: true, repeat: -1, duration: 1 })
            gsap.to(".container-word_3", { background: "#faa", yoyo: true, repeat: -1, duration: 1 })
            gsap.to(".container-word_4", { background: "#53FF53", yoyo: true, repeat: -1, duration: 1 })
        }
    }
}
</script>

<style lang="scss" scoped>
.container-center2{
    position: relative;
    background-image: url('../assets/Vector.png');
    background-size: contain;
    background-repeat: no-repeat;
        hr {
            text-align:center;
            margin-top:30px;
            border-bottom:2px dashed #CBCBCB;
        }
        .num{
            width: 100px;
            height: 2rem;
            padding-bottom: 1px;
            text-align: center;
            margin-bottom: 5rem;
        }
        .line{
            width: 38px;
            height: 10rem;
            border-bottom: 5px solid #065F76;
            position: absolute;
        }
        .swo{
            position: absolute;
            right: 10%;
            bottom: 15%;
        }

        @media (max-width: 1280px) {
            .num{
                margin-bottom: 0;
            }
        }
}
</style>