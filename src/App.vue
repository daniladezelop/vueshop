<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
  <router-view />
  <subscribeComponent />
  <footerComponent />
</template>

<script>
import footerComponent from "./components/footerComponent.vue";
import subscribeComponent from "./components/subscribeComponent.vue";

export default {
  name: 'App',
  components: {
    footerComponent,
    subscribeComponent,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    box-sizing: border-box;
  }
  .container {
    width: 1140px;
    margin: 0 auto;
  }
  .forHeader {
    padding-top: 75px;
  }
  .header-component {
    position: fixed;
    z-index: 1;
  }
  @media (max-width: 768px) and (min-width: 375px) {
    .container {
      width: 736px;
    }
  }
</style>