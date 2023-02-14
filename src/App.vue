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

<style>

</style>