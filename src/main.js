import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
// import Barang from './components/Barang.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')