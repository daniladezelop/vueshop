<template>
    <headerComponent class="header-component"/>
    <div class="cart">
        <div class="intro">
            <div class="wrapperIntro container">
                <p class="textIntro">SHOPPING CART</p>
            </div>
        </div>
        <div class="wrapper container">
            <div class="cartBox">
                <div class="cartElement" v-for="element in this.getCart" :key="element">
                    <img v-bind:src=element.imgurl alt="" class="cartImg">
                    <div class="cartInfo">
                        <div class="headerCartElement">
                            <p class="cartInfoName">{{ element.name }}</p>
                            <img src="../img/close.svg" alt="closeButton" class="closeButton">
                        </div>
                        <div class="parametrBox">
                            <p class="cartInfoParametr">Price: <span class="cartPink">{{ element.price }}</span></p>
                            <p class="cartInfoParametr">Color: <span class="cartGray">{{ element.color }}</span></p>
                            <p class="cartInfoParametr">Size: <span class="cartGray">{{ element.size }}</span></p>
                            <p class="cartInfoParametr">Quantity:   <span class="cartGray">1</span></p>
                        </div>
                    </div>
                </div>
                <div class="buttonBox">
                    <button class="buttonForm buttonCart">CLEAR SHOPPING CART</button>
                    <router-link to="/catalog"><button class="buttonForm buttonCart">CONTINUE SHOPPING</button></router-link>
                </div>
            </div>
            <div class="cartForm">
                    <p class="introForm">SHIPPING ADRESS</p>
                    <div class="inputBox">
                        <input type="text" class="inputForm" placeholder="Your country" />
                        <input type="text" class="inputForm" placeholder="State">
                        <input type="text" class="inputForm" placeholder="Postcode / Zip">
                    </div>
                    <button class="buttonForm">GET A QUOTE</button>
                    <div class="totalForm">
                        <p class="subTotal">SUB TOTAL         ${{ this.finalPrice }}</p>
                        <p class="grandTotal">GRAND TOTAL      <span class="priceTotal">${{ this.finalPrice }}</span></p>
                        <hr class="hrTotal">
                        <button class="buttonTotal">PROCEED TO CHECKOUT</button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from "./headerComponent.vue";
    export default {
        name: 'CartComponent',
        components: {
            headerComponent
        },
        computed: {
            getCart() {
                return this.$store.getters.getCart
            },
            finalPrice() {
                return this.$store.getters.getFinalPrice
            }
        },
        methods: {
            deleteCart(index) {
                this.$store.dispatch("deleteElementCart", index)
            }
        },
        async mounted() {
            if (this.getCart.length != 1) {
                let cartElements = await fetch("https://raw.githubusercontent.com/danila-derenchenko/forApi/main/cart.json")
                let result = await cartElements.json()
                this.$store.dispatch("firstLoadingCart", result)
            }
        }
    }
</script>

<style scoped>
    .cartEl {
        border: 1px solid black;
        width: 200px;
        height: 200px;
        margin: auto;
    }
    .cart {
        width: 100%;
        padding-top: 75px;
    }
    .cartImg {
        width: 262px;
        height: 306px;
    }
    .cartElement {
        width: 100%;
        height: 306px;
        box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
        margin-bottom: 40px;
        display: flex;
        gap: 0px;
    }
    .parametrBox {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .cartInfo {
        width: 390px;
        height: 306px;
        padding-top: 22px;
        padding-left: 31px;
        padding-bottom: 62px;
        padding-right: 22px;
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
    .wrapper {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
    }
    .cartBox {
        width: 652px;
        margin-bottom: 72px;
    }
    .introForm {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
    }
    .inputBox {
        margin-top: 20px;
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .inputForm {
        padding-top: 13px;
        padding-bottom: 16px;
        padding-left: 17px;
        width: 360px;
    }
    .buttonForm {
        border: 1px solid #A4A4A4;
        background: #FFFF;
        color: #4A4A4A;
        padding: 9px 14px;
    }
    .buttonCart {
        padding: 16px 38px;
    }
    .buttonBox {
        display: flex;
        justify-content: space-between;
    }
    .buttonForm:hover {
        cursor: pointer;
    }
    .totalForm {
        margin-top: 57px;
        width: 360px;
        height: 214px;
        background: #F5F3F3;
        margin-bottom: 342px;
        padding: 37px;
    }
    .subTotal {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #4A4A4A;
        margin-bottom: 12px;
    }
    .grandTotal {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
    }
    .hrTotal {
        width: 100%;
        margin-top: 21px;
        margin-bottom: 17px;
        background: #E2E2E2;
    }
    .buttonTotal {
        width: 100%;
        padding: 16px 40px;
        border: none;
        background: #F16D7F;
        color: #FFF;
    }
    .buttonTotal:hover {
        cursor: pointer;
    }
    .priceTotal {
        color: #F16D7F;
    }
    .headerCartElement {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 42px;
    }
    .cartInfoName {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #222222;
    }
    .closeButton:hover {
        cursor: pointer;
    }
    .cartInfoParametr {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #575757;
    }
    .cartPink {
        color: #F16D7F;
    }
    .cartGray {
        color: #656565;
    }
</style>