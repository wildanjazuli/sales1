<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Menu />
    <div>
      Content
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import VueRouter from ''
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Menu,
    Footer
  }
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
