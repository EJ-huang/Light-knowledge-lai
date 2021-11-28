<template>
        <div class="container-bg">
            <div class="flex flex-col text-center">
                <div class="flex justify-center p-12">
                    <h2 class="text-6xl pt-12 text-gray-900 font-bold pb-12">常見問題</h2>
                    <div class="line"></div>
                </div>
                <div class="row flex flex-col pt-0  lg:p-12">
                    <img src="../assets/q1.png"  alt="">
                    <img src="../assets/qcircle.png" id="one" class="hidden lg:block" alt="">
                    <img src="../assets/qcircle2.png" id="two" class="block lg:hidden" alt="">
                    <span class="text-black text-2xl font-bold">本課程採私人權限的「線上直播」，為維護你的權益，請勿與他人共用專屬連結。</span>
                </div>
                <div class="row flex flex-col pt-0 lg:p-12">
                    <img src="../assets/q2.png" alt="">
                    <span class="text-black text-left pl-12 text-2xl font-bold">講座中每隔一小時將休息5-10分鐘，起身喝水，動一下，讓專注力更集中!</span>
                </div>
                <div class="row flex flex-col pt-0 lg:p-12">
                    <img src="../assets/q3.png" alt="">
                    <span class="text-black text-left pl-12 text-2xl font-bold">為確保有流暢的學習過程，請關閉視訊與聲音功能<br>講座中除了講師畫面、簡報外，學員不會看到彼此的資訊!</span>
                </div>
                <div class="row flex flex-col pt-0 lg:p-12">
                    <img src="../assets/q4.png" alt="">
                    <span class="text-black text-left pl-12 text-2xl font-bold">可以加入尹星助教將盡快協助你!</span>
                    <div class="flex flex-col lg:flex-row items-center">
                        
                        <img src="../assets/qLine.png" alt="">
                        <p class="lg:pt-60">(點擊圖標跳轉LINE連結)</p>
                    </div>
                    
                </div>
            </div>
            <div class="main bg-seventh flex flex-col lg:flex-row items-center justify-center lg:h-60  text-white p-8">
              <p class="lg:text-4xl p-4 gap-4">報名就有機會抽中『 陳波懶人不敗投資術課程 』<font class="text-gold">價值$8,800</font></p>
                <button class="btn flex justify-center items-center gap-4 bg-orange hover:bg-blue-700 text-white font-bold py-2 px-12  rounded">
                    <img src="../assets/arrorw.png" alt="">
                    <p>/ 搶佔免費講座席次</p>
                </button>
           </div>
        </div>

        
</template>


<style lang="scss" scoped>
.container-bg{
    background-image: url('../assets/bg_qa.gif');
    background-size: cover;
    height: 100%;

    .line{
        width: 38px;
        height: 10rem;
        border-bottom: 5px solid #fff;
        position: absolute;
    }

    @media (max-width: 768px){
        #one{
            // display: none;
        }
    }

}
</style>