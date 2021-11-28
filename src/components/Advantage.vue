<template>

        <div class="container-bg bg-sixth">
            <div class="flex justify-center">
                <h2 class="text-3xl lg:text-6xl pt-12 text-gray-900 font-bold pb-12">尹星輕知識講座3大優勢</h2>
                <div class="line"></div>
            </div>
            <div class="inside flex flex-col lg:flex-row items-center justify-center text-2xl pb-12 lg:pt-24">
                <div class="box ">
                    <img src="../assets/advantage1.png" alt="">
                </div>
                <div class="box">
                    <img src="../assets/advantage2.png" alt="">
                </div>
                <div class="box">
                    <img src="../assets/advantage3.png" alt="">
                </div>
                
            </div>
        </div>


</template>


<style lang="scss" scoped>
.container-bg{
    position: relative;
    .line{
        width: 38px;
        height: 10rem;
        border-bottom: 5px solid #065F76;
        position: absolute;
    }

    @media (max-width: 375px){
        .line{
            height: 7rem;
        }
    }
}
</style>