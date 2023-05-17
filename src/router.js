import { createRouter, createWebHashHistory } from "vue-router";
import IndexComponentPage from "./components/IndexComponentPage.vue";
import CatalogComponentPage from "./components/CatalogComponentPage.vue";
import ProductComponentPage from "./components/ProductComponentPage.vue";
import RegistrationComponentPage from "./components/RegistrationComponentPage.vue";
import CartComponentPage from "./components/CartComponentPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: IndexComponentPage
        },
        {
            path: "/catalog",
            component: CatalogComponentPage
        },
        {
            path: "/product",
            component: ProductComponentPage
        },
        {
            path: "/registration",
            component: RegistrationComponentPage
        },
        {
            path: "/cart",
            component: CartComponentPage
        }
    ]
})