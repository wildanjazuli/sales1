<template>
    <div class="menu">
        <!-- <router-link to="barang">Master Barang</router-link> -->
        <router-link :to="{name: 'barang'}">Master Barang</router-link>
        <!-- <div>Master Barang</div> -->
        <div>Transaksi</div>
        <router-link to="/foo">Go to Foo</router-link>
        <!-- renders as -->
        <li>foo</li>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Barang from './Barang.vue'

Vue.use(VueRouter)

export default {
    name: 'Menu'
}

const routes = [
  {path: '/barang', component: Barang, name: 'barang'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

</script>

<style>
.menu {
    background-color: #222d32;
    color: #b8c7ce;
}
</style>