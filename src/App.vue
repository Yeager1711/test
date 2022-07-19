<template>
  <div id="app">
   <comp-header />
    <!-- <comp-cart /> -->

    <comp-products />

  </div>
</template>

<script>

import CompHeader from './components/CompHeader.vue'
import CompProducts from './components/CompProducts.vue'
// import CompCart from './components/CompCart.vue'

export default {
  name: 'App',
  components: {
    CompHeader,
    CompProducts,
    // CompCart
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400;1,500&family=Nunito:wght@200;300;400;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,500;1,700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.2s;
}

html {
  font-size: 62.5%;
  overflow-x: none;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  transition: all .2s;
}

section {
  padding: 3rem 10%;
}

body{
  margin:0;
}

.heading {
  text-align: center;
  font-size: 3rem;
  color: #333;
  padding-bottom: 1rem;
  span {
    color: #3cb815;
  }
}

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}

</style>
