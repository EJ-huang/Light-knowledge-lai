<template>
<div class="">
  <div class="flex md:flex-col flex-wrap md:content-around p-5">
      <img src="../assets/logo.png" alt="">
      <div class=" justify-center bg-secondary text-lg w-15 text-white mt-5 rounded-md p-2">
          <h1 class="flex content-center">用對「公式」</h1>
      </div>
      <div class="text-3xl">3萬本金也能幫你滾出 <p style="color: #46AFB0">百萬獲利!</p></div>
  </div>
  <div class="head">
    <img src="../assets/Heade.png" alt="">
  </div>
  <div class="content pt-20">
    <h1>曾歷經頂尖交易作手地獄訓練並在兩年內研究過 <p class="text-secondary">35,040張盤勢...</p>以及 <p class="text-secondary">上百種操作模式</p> </h1>
  </div>
  
  <div class="main h-60 bg-secondary text-white mt-12 pt-12 ">
      <p>這是讓我贏得全球交易競賽前四強的武器</p>
      <p class="text-3xl">短線交易最高效的秘密公式!</p>
      <div class="main_box bg-white text-secondary flex justify-evenly">競賽中2周創造4倍獲利</div>
  </div>
</div>

</template>


<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>