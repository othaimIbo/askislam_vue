<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

import wallpaper from "/assets/images/wallpaper.jpg";

</script>

<template>
  <Navbar/>
    <main :style="{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
     <router-view/>
    </main>
  <Footer/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
