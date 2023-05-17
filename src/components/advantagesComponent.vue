<template>
    <div class="advantagesComponent">
        <div class="wrapper container">
            <div class="advantage">
                <img src="../img/advantageImg-1.svg" alt="advantageImg" class="advantageImg-1">
                <p class="advantageHeading">Free Delivery</p>
                <p class="advantageText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="advantage">
                <img src="../img/advantageImg-2.svg" alt="advantageImg" class="advantageImg-2">
                <p class="advantageHeading">Sales & discounts</p>
                <p class="advantageText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="advantage">
                <img src="../img/advantageImg-3.svg" alt="advantageImg" class="advantageImg-3">
                <p class="advantageHeading">Quality assurance</p>
                <p class="advantageText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    .advantagesComponent {
        width: 100%;
        height: 341px;
        background: #222224;
    }
    .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .advantage {
        width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
    .advantageImg-1 {
        width: 45px;
        margin-left: auto;
        margin-right: auto;
    }
    .advantageImg-2 {
        width: 40px;
        margin-left: auto;
        margin-right: auto;
    }
    .advantageImg-3 {
        width: 47px;
        margin-left: auto;
        margin-right: auto;
    }
    .advantageHeading {
        font-weight: 400;
        font-size: 19.96px;
        line-height: 24px;
        text-align: center;
        color: #FBFBFB;
    }
    .advantageText {
        font-weight: 300;
        font-size: 13.972px;
        line-height: 17px;
        text-align: center;
        color: #FBFBFB;
    }
</style>