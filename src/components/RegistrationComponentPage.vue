<template>
    <headerComponent class="header-component"/>
    <div class="registration">
        <div class="intro">
            <div class="wrapperIntro container">
                <p class="textIntro">REGISTRATION</p>
            </div>
        </div>
        <div class="regForm container">
            <div class="form">
                <div class="regGroup">
                    <p class="formText">Your Name</p>
                    <input type="text" class="inputForm" placeholder="First Name">
                    <input type="text" class="inputForm" placeholder="Last Name">
                </div>
                <div class="radioBoxGrid">
                    <div class="radioBox">
                        <input type="radio" id="Male">
                        <label for="Male" class="radioButtonText">Male</label>
                    </div>
                    <div class="radioBox">
                        <input type="radio" id="Female">
                        <label for="Female" class="radioButtonText">Female</label>
                    </div>
                </div>
                <div class="regGroup">
                    <p class="formText">Login details</p>
                    <input type="email" class="inputForm" placeholder="Email">
                    <input type="password" class="inputForm" placeholder="Password">
                </div>
                <p class="grayText">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                <button class="join"><p class="joinText">JOIN NOW</p></button>
            </div>
            <div class="promo">
                <p class="promoHeading promoText">LOYALTY HAS ITS PERKS</p>
                <p class="promoIntro promoText">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                <ul class="promoList promoText">
                    <li class="promoListElement">15% off welcome offer</li>
                    <li class="promoListElement">Free shipping, returns and exchanges on all orders</li>
                    <li class="promoListElement">$10 off a purchase on your birthday</li>
                    <li class="promoListElement">Early access to products</li>
                    <li class="promoListElement">Exclusive offers & rewards</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from "./headerComponent.vue";
    export default {
        components: {
            headerComponent
        }
    }
</script>

<style scoped>
    .form {
        width: 360px;
    }
    .promo {
        width: 652px;
    }
    .registration {
        padding-top: 75px;
    }
    .intro {
        width: 100%;
        height: 148px;
        background: #F8F3F4;
        margin-bottom: 96px;
    }
    .textIntro {
        font-weight: 400;
        font-size: 24px;
        line-height: 148px;
        color: #F16D7F;
    }
    .textIntro {
        font-weight: 400;
        font-size: 24px;
        line-height: 148px;
        color: #F16D7F;
    }
    .regForm {
        display: flex;
        justify-content: space-between;
    }
    .regGroup {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .inputForm {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 16px;
        width: 100%;
        border: 1px solid #B1B1B1;;
    }
    .formText {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
    }
    .radioButtonText {
        margin-left: 10px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }
    .radioBoxGrid {
        display: flex;
        gap: 20px;
        margin-top: 30px;
        margin-bottom: 33px;
    }
    .grayText {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: #B1B1B1;
        margin-top: 15px;
    }
    .join {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 167px;
        height: 50px;
        background: #FF6A6A;
        border: none;
        margin-top: 39px;
        margin-bottom: 96px;
        cursor: pointer;
    }
    .joinText {
        color: #FFF;
        text-align: center;
    }
    .joinText::after {
        content: url("../img/Arrow.svg");
        width: 17px;
        margin-left: 20px;
    }
    .promoText {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }
    .promoHeading {
        margin-bottom: 22px;
    }
    .promoIntro {
        margin-bottom: 22px;
    }
    .promoList {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .promoListElement {
        list-style-type: none;
    }
    .promoListElement::before {
        content: url("../img/Marker.svg");
        margin-right: 23px;
    }
</style>