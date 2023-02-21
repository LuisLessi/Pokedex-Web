<script setup>
import {ref} from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/HomeView.vue'


</script>

<template>
  <div>
    <Navbar/>

    <!-- CONTENT -->
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
</script>

<style >
body{
  
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(213,50,39,1) 50%, rgba(69,180,252,1) 100%);}
</style>