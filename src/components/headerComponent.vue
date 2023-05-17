<template>
    <div class="header">
        <div class="container wrapper">
            <div class="headerRightGroup">
                <router-link to="/" class="icon"><img class="icon-1" src="../img/index.svg" alt="index"></router-link>
                <img class="icon icon-2" src="../img/search.svg" alt="">
            </div>
            <div class="headerLeftGroup">
                <img src="../img/burgerMenu.svg" alt="" class="icon icon-3" @click="click">
                <router-link to="/registration" class="icon"><img src="../img/registration.svg" alt="" class="icon-4"></router-link>
                <router-link to="/cart" class="icon"><img src="../img/cart.svg" alt="" class="icon-5"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            click() {
                this.$emit("clickBurger")
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 75px;
        background-color: #222222;
    }
    a {
        text-decoration: none;
    }
    .wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headerRightGroup {
        display: flex;
        gap: 41px;
        align-items: center;
    }
    .headerLeftGroup {
        display: flex;
        gap: 33px;
        align-items: center;
    }
    .icon {
        transition-duration: 0.5s;
        cursor: pointer;
    }
    .icon-1 {
        width: 44px;
    }
    .icon-2 {
        width: 26px;
    }
    .icon-3 {
        width: 32px;
    }
    .icon-4 {
        width: 29px;
    }
    .icon-5 {
        width: 32px;
    }
    .icon:hover {
        transition-duration: 0.5s;
        transform: scale(1.5, 1.5);
    }
</style>