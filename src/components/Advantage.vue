<template>
        <div class="container-ad bg-sixth">
            <div class="flex justify-center">
                <h2 class="text-3xl lg:text-6xl pt-12 text-gray-900 font-bold pb-12">尹星輕知識講座3大優勢</h2>
                <div class="line"></div>
            </div>
            <div class="inside flex flex-col lg:flex-row items-center justify-center text-2xl pb-12 lg:pt-24">
                <div class="box-ad1">
                    <img src="../assets/advantage1.png" alt="">
                </div>
                <div class="box-ad2">
                    <img src="../assets/advantage2.png" alt="">
                </div>
                <div class="box-ad3">
                    <img src="../assets/advantage3.png" alt="">
                </div>
                
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
                    trigger: '.container-ad',
                    start: 'top center',
                    end: '20%',
                    scrub: true,
                }
            })
            .from(".inside .box-ad1", { x : -100, y: 0, opacity: 0 , duration: 3, autoAlpha: 1 })
            .from(".inside .box-ad2", { x : -200, y: 0, opacity: 0 , duration: 3 ,autoAlpha: 1 })
            .from(".inside .box-ad3", { x : -300, y: 0, opacity: 0 , duration: 3 ,autoAlpha: 1 })
        }
    }
}
</script>

<style lang="scss" scoped>
.container-ad{
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