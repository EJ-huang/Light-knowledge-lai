<template>
<div class="">
        <footer class="px-4 py-8 bg-orange  pb-24">
            <div class="flex flex-wrap items-center justify-center mx-auto space-y-4">
                <div class=" pr-3 space-x-4 sm:space-x-8">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-600">
                    </div>
                    <div class="box lg:pb-12">
                        <img src="../assets/logo1.png" alt="">
                    </div>
                    <div class="flex flex-col items-start">
                        <span>客服信箱：hello@enstar.com.tw</span>
                        <span>客服電話：0918-276-326</span>
                        <span>公司地址： 10491台北市中山區民生東路二段161號7樓</span>
                    </div>
                </div>
                <div class="icon flex lg:pt-24 items-center">
                    <img src="../assets/fb.png" @click="url" alt="">
                    <img src="../assets/yt.png" @click="yt" alt="">
                    <img src="../assets/line.png" @click="line" alt="">
                </div>
            </div>
        </footer>
</div>

</template>


<script>
export default {
    methods: {
        url(){
            window.open("https://www.facebook.com/enstar.tw/");
        },
        yt(){
            window.open("https://www.youtube.com/channel/UCCxR-ctkwkC7Ufi2d_LxHSg");
        },
        line(){
            window.open("https://line.me/ti/p/I7MwD5yg14");
        }
    }
}
</script>

<style lang="scss" scoped>
// .main2{
    // background-color: #1E252C;
        p{
            color:#00DCC2;
        }
        .icon{
            img{
                float: left;
                margin: 20px;
                padding-right: 10%;
                border-right: 1px solid #fff;
                    &:last-child{
                        border-right: 10px;
                    }
            }
        }


// }
</style>
