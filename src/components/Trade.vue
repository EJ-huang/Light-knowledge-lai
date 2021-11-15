<template>
      <div class="row flex md:flex-col flex-wrap md:content-around p-5">
        <div class=" justify-center bg-secondary text-lg w-15 text-white mt-5 rounded-md p-2">
            <h1 class="flex content-center">運用「公式」做交易</h1>
        </div>
      <div class="text-3xl text-left">你可以提前掌握任何金融商品的短期走勢 !</div>
      <hr class="mt-2">
    <div class="main text-left p-2 leading-10">
        <h1 class="font-bold text-2xl">以下是我在直播節目中講解台股大盤</h1>
        <p>當天5/11透過公式判斷出走勢 5/12台股直接照著劃出的方向走！</p>
    </div>
    <img src="../assets/trade.png" alt="">
    <img src="../assets/trade1.png" alt="">
    <div class="foot pt-12 pb-12">
        <h1>當天我開給學生觀摩的示範帳戶<span>直接獲利42萬</span>!</h1>
    </div>
    <img src="../assets/foot.png" alt="">
        <p>更多網路上無法公開的案例與短線交易公式我將在講座中跟你分享!</p>
    <div class="box1">
        <div class="flex side-box justify-center bg-black text-2xl text-white mt-12  py-1 px-2  mx-5 my-5 rounded-md p-5">
            <img src="../assets/star2.png" alt="">
            <h1 class="flex content-center pt-2">名額有限</h1>
        </div>
        
        <p class="text-white">短線交易的秘密公式，提前預測明日走勢</p>
        <p class="text-secondary">股票,期貨,美股通通適用</p>

        <button class="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-12  rounded mt-8">
        / 搶佔免費講座席次
        </button>
    </div>
    <!-- <img src="../assets/foot2.png" alt=""> -->
  </div>
</template>


<style lang="scss" scoped>
.foot{
    span{
        color: #46AFB0;
    }
}
.row{
    .box1{
        background-image: url('../assets/foot2.png');
        background-size: cover;
        height: 300px;
        width: 100%;
        background-repeat: no-repeat;

        .side-box{
            // width: 100%;
            img{
                width: 100px;
            }
        }
    }
}

</style>