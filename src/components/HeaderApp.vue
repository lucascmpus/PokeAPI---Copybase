<script>
export default {
  name: "HeaderApp",
  data() {
    return {
      logoPokeApi: '../../public/pokeapi_256.png'
    }
  }
}
</script>


<template>
  <header>
    <img :src="logoPokeApi" alt="logo">
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
