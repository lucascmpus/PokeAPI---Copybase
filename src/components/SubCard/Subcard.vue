<script>
import axios from 'axios';

export default {
  name: "Subcard",
  props: {
    infos: {}
  },
  data() {
    pokemonChain: []
  },
  mounted() {
    axios.get(`${this.infos.url}`)
      .then((res)=> console.log(res.data))
  }
}
</script>

<template>
  <p>{{ infos.url }}</p>
</template>