<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from './components/HeaderApp.vue'

</script>

<template>
  <div class="app">
    <HeaderApp />


  </div>
  <RouterView />
</template>

<style lang="scss">
.app{
  width: 100vw;
}

</style>
