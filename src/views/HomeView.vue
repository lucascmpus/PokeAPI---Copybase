<template>
  <section>
    <div class="input-search">
      <label for="search">Digite o nome ou id do Pokemon</label><br>
      <input v-model="searchPokemon" @change="getSearch" id="search" type="text" placeholder="Ex: Bulbasaur, 1, charmander">
    </div>

    <div v-if="!loading">
      <Card :infos="pokemon.data" />
      <Subcard :infos="pokemonChain" />
    </div>
  </section>
<!-- 
  <div v-for="(poke, i) in renderPokemons" :key="i">
    <Card v-bind:infos="poke" />
  </div> -->
  
</template>


<script>
import { apiInstance } from '@/services/api';
import axios from 'axios';
import Card from '@/components/Card/Card.vue';
import Subcard from '@/components/SubCard/Subcard.vue'

export default {
  name: "Home",
  data() {
    return {
      searchPokemon: '',
      loading: true,
      pokemon: [],
      pokemonChain: [],
    };
  },
  methods: {
    getSearch() {
      apiInstance.get(`/pokemon/${this.searchPokemon}`)
        .then((res) => { this.pokemon = res; })
        .catch((err) => console.log(err))
        .finally(() => {
          this.getSearchEvolutions();
        });      
    },
    getSearchEvolutions() {
      apiInstance.get(`/pokemon-species/${this.searchPokemon}`)
        .then((res) => { this.pokemonChain = res.data.evolution_chain })
        .catch((err) => console.log(err))
        .finally(() => { this.loading = false; });
    }
    
  },
  // mounted() {
  //   apiInstance.get("/pokemon?limit=20").then((res) => {
  //       this.listofPokemons = res.data.results;
  //   });
  //   for (let i = 1; i <= 20; i++) {
  //       this.endpoints.push(`/pokemon/${i}/`);
  //   }
  //   axios.all(this.endpoints.map((endpoint) => apiInstance.get(endpoint).then((res) => {
  //     this.renderPokemons.push(res.data);
  //     }))      
  //   );
  // },
  components: { Card }
}

</script>

<style lang="scss">
section{
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 15px;
  
  .input-search{
    max-width: 1266px;
    /* height: 20px; */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input{
      width: 180px;
      padding: 2px;
      margin-top: -5px;
    }
  }
}
</style>

