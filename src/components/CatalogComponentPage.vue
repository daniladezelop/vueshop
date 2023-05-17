<template>
    <headerComponent class="header-component"/>
    <div class="catalogComponent">
        <div class="intro">
            <div class="wrapperIntro container">
                <p class="textIntro">NEW ARRIVALS</p>
                <p class="smallTextIntro">HOME / MEN / <span class="active">NEW ARRIVALS</span></p>
            </div>
        </div>
        <div class="filterBox container">
            <div class="listFilter filter filterActive">
                <p class="filterText active">FILTER</p>
                <div class="submenu">
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </div>
            </div>
        </div>
        <CatalogCartBoxComponent class="catalog" />
    </div>
</template>

<script>
import headerComponent from "./headerComponent.vue";
import CatalogCartBoxComponent from "./catalogCartBoxComponent.vue";
    export default {
        name: 'CatalogComponent',
        components: {
            headerComponent,
            CatalogCartBoxComponent
        }
    }  
</script>

<style scoped>
    .active {
        color: #F16D7F;
    }
    .catalogComponent {
        padding-top: 75px;
    }
    .catalog {
        margin-top: 64px;
    }
    .intro {
        width: 100%;
        height: 148px;
        background: #F8F3F4;
        margin-bottom: 96px;
    }
    .wrapperIntro {
        display: flex;
        justify-content: space-between;
    }
    .smallTextIntro {
        line-height: 148px;
        font-weight: 300;
        font-size: 14px;
        color: #636363;
    }
    .textIntro {
        font-weight: 400;
        font-size: 24px;
        line-height: 148px;
        color: #F16D7F;
    }
    .listFilter {
        max-width: 360px;
        padding: 13px 16px;
    }
    .filterActive {
        box-shadow: 2px 2px 22px 7px rgba(34, 60, 80, 0.2);
    }
    .filterText {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
    .filterText::after {
        content: url("../img/Filter.svg");
        margin-left: 11px;
    }
</style>