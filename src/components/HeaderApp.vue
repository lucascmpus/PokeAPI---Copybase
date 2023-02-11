<script>
import logoPokeApi from '@/assets/pokeapilogo.png'

export default {
  name: "HeaderApp",
  data() {
    return {
      logoPoke: 'src/assets/pokeapilogo.png'
    }
  }
}
</script>


<template>
  <header>
    <img v-bind:src="logoPoke" alt="logo">
  </header>
</template>

<style lang="scss">
header{
  background-color: #f5f5f5;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.5rem;

  box-shadow: 1px 2px 7px 1px rgba(255, 255, 255, 0.5);

  img {
    width: 120px;
  }
}

</style>
