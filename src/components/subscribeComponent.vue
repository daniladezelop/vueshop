<template>
    <div class="subscribe">
        <div class="container wrapper">
            <div class="subscribeTextBlock">
                <img src="../img/photoSubscribe.png" alt="photoSubscribe" class="photoSubscribe">
                <p class="subscribeText">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                </p>
            </div>
            <div class="subscribeFormInfoBlock">
                <p class="subscribeInfo">
                    <span class="subscribeInfoBold">SUBSCRIBE</span><br>FOR OUR NEWLETTER AND PROMOTION
                </p>
                <div class="subscribeForm">
                    <input placeholder="Enter Your Email" type="email" class="subscribeInput">
                    <button class="subscribeButton">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .subscribe {
        width: 100%;
        height: 448px;
        background-image: url(../img/SubscribeBacground.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .subscribeTextBlock {
        width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .subscribeText {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #222224;
    }
    .photoSubscribe {
        width: 96px;
        height: 96px;
    }
    .subscribeFormInfoBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
    }
    .subscribeInfo {
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #222224;
    }
    .subscribeInfoBold {
        font-weight: 700;
        font-size: 24px;
    }
    .subscribeInput {
        width: 256px;
        height: 49px;
        padding-top: 7px;
        padding-bottom: 7px; 
        padding-left: 22px;
        background: #E1E1E1;
        border: none;
        border-radius: 30px 0px 0px 30px;
    }
    .subscribeButton {
        width: 100px;
        height: 49px;
        color: #FFF;
        background: #F16D7F;
        padding: 7px;
        border: none;
        border-radius: 0px 30px 30px 0px;
        cursor: pointer;
    }
</style>