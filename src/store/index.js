import { createStore } from "vuex";

export default createStore({
    state: {
        indexIncart: 0,
        cart: [],
        finalPrice: 0
    },
    mutations: {
        addElementToCart(state, element) {
            element.index = state.indexIncart
            state.cart.push(element)
            state.indexIncart = state.indexIncart + 1
            state.finalPrice = state.finalPrice + element.price
        },
        deleteElementCart(state, index) {
            state.cart.splice(index, 1)
            state.indexIncart = state.indexIncart - 1
            for (let i = 0; i < state.cart.length; i++) {
                state.cart[i].index = i
            }
        }
    },
    actions: {
        addElementToCart(ct, element) {
            ct.commit("addElementToCart", element)
        },
        firstLoadingCart(ct, elements) {
            for (let i of elements) {
                ct.commit("addElementToCart", i)
            }
        },
        deleteElementCart(ct, index) {
            ct.commit("deleteElementCart", index)
        }
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getFinalPrice(state) {
            return state.finalPrice
        }
    }
})