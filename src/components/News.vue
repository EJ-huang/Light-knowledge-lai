<template>
    <div class="contenter-bg ">
        <div class="flex justify-center">
            <h2 class="text-center text-6xl text-white pt-12">趨勢論壇報名詳細資訊</h2>
            <div class="line"></div>
        </div>

        <div class="content-center flex flex-col  lg:flex-row justify-center p-4 pt-5">
            <div class="main pt-12 lg:pt-36 lg:pb-36">
                <ul class="flex">
                    <div id="triangle"></div>
                    <li class="text-left pl-4 lg:pb-24">
                        <p class="text-gold text-2xl pb-4">活動日期</p>
                        <p class="text-4xl">2021/12/09 (四)  19:30 - 21:00</p>
                    </li>
                </ul>
                <hr>
                <ul class="flex pt-4">
                    <div id="triangle"></div>
                    <li class="text-left pl-4">
                        <p class="text-gold text-2xl  pb-4">參與方式</p>
                        <p class="lg:text-4xl text-white pb-4">Zoom Video Webinar線上串流直播</p>
                        <small class="text-left text-lg text-fifth">※提醒你!本課程為「線上直播」<br>為維護你的權益<br>請勿與他人共用你的專屬連結!</small>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="aside pt-4 lg:pt-36">
                <div class="flex lg:ml-6  pr-36">
                    <div class="flex" id="triangle"></div>
                    <div class="pl-4 flex flex-col lg:flex-col">
                        <div class="side1"><p class="text-gold text-lg ">票價費用</p></div>
                        <div class="flex side2 lg:flex-row p-8 gap-4">
                            <img src="../assets/ticket1.png" alt="">
                            <img src="../assets/ticket2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="main flex flex-col lg:flex-row items-center justify-center text-center lg:h-52  text-white p-8">
              <p class="lg:text-4xl mb-8">報名就有機會抽中『 陳波懶人不敗投資術課程 』<font class="text-gold">價值$8,800</font></p>
                <button class="btn flex items-center justify-center gap-4 bg-orange hover:bg-blue-700 text-white font-bold py-2 px-12  rounded">
                    <img src="../assets/arrorw.png" alt="">
                    <p>/ 搶佔免費講座席次</p>
                </button>
           </div>
    </div>
</template>

<style lang="scss" scoped>
.contenter-bg{
    background-image: url('../assets/NewsBg.png');
    background-size: contain;

        hr {
            display: none;
        }
        .line{
            width: 38px;
            height: 8.5rem;
            border-bottom: 5px solid #fff;
            position: absolute;
        }
        #triangle{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 20px 20px;
            border-color: transparent transparent #F8CA7D transparent;
        }
        .btn{
            width: 363px;
            margin-bottom: 30px;
            margin-left: 1rem;
        }

        @media (max-width: 1280px){
            background-image: url('../assets/NewBg1.png');
            background-size: cover;

            hr {
                display: block;
                position: relative;
                margin-left: 1rem;
                width:22rem;
                text-align:center;
                margin-top:30px;
                border-bottom:2px dashed #489EBD;
            }
            .btn{
                width: 20rem;
                margin-bottom: 30px;
                margin-left: 0;
            }
        }
}
</style>