<template>
    <div class="footer">
        <div class="wrapper container">
            <p class="textFooter">
                © 2023  Brand  All Rights Reserved.
            </p>
            <div class="socialNetwork">
                <div class="socialNetworkBlock">
                    <img class="socialNetworkimg" src="../img/facebook.svg" alt="facebook">
                </div>
                <div class="socialNetworkBlock">
                    <img class="socialNetworkimg" src="../img/instagram.svg" alt="instagram">
                </div>
                <div class="socialNetworkBlock">
                    <img class="socialNetworkimg" src="../img/pinterest.svg" alt="pinterest">
                </div>
                <div class="socialNetworkBlock">
                    <img class="socialNetworkimg" src="../img/twitter.svg" alt="twitter">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .footer {
        width: 100%;
        height: 79px;
        background-color: #222224;
        display: flex;
        align-items: center;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
    }
    .textFooter {
        color: #FFF;
        font-weight: 400;
        font-size: 16px;
    }
    .socialNetwork {
        display: flex;
        gap: 8px;
    }
    .socialNetworkBlock {
        width: 32px;
        height: 32px;
        background-color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .socialNetworkBlock:hover {
        background-color: #F16D7F;
        cursor: pointer;
        .socialNetworkimg {
            filter: invert(1);
        }
    }
</style>