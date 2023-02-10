<script>
import { defineComponent } from 'vue';

defineComponent({
  name: "header"
})
</script>


<template>
  <header>
    <h3>PokeAPI - CopyBase</h3>
  </header>
</template>

<style lang="scss">
header{
  background-color: black;
  color: #f5f5f5;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  box-shadow: 1px 2px 7px 1px rgba(0,0,0,0.5);

  h3{
    letter-spacing: 1.6px;

    font-weight: 400;
    font-size: 24px;
  }
}

</style>
