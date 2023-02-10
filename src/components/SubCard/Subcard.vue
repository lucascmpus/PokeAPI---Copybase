<script>
import axios from 'axios';
import '@/components/SubCard/Subcard.scss'

export default {
  name: "Subcard",
  props: {
    infos: {}
  },
  data() {
    return {
      pokemonChain: [],
      pokemonChainSpecies: {}
    }
  },
  methods: {
    getSearch() {
      axios.get(`${this.infos.url}`)
      .then((res) => {
        this.pokemonChain = res.data.chain;
        this.pokemonChainSpecies = res.data.chain.species
      })
    },
  },
  mounted() {
    this.getSearch();
  },
  watch: {
    infos(newInfo, oldInfo){
      this.getSearch();
    }
  },
}
</script>

<template>
  <div class="evolutions">
    <h3>Evoluções</h3>
    <p>{{ pokemonChainSpecies.name }}</p>
    <p v-for="evolves in pokemonChain.evolves_to">
      {{ evolves.species.name }}
    <p v-for="x in evolves.evolves_to">
      {{ x.species.name }}
    </p>
  </p> 
  </div>
</template>