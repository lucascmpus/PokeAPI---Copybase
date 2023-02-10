<template>

  <section>
    <label for="search">Digite o nome do pokemon</label><br>
    <input v-model="searchPokemon" @change="getSearch" id="search" type="text">
    {{ searchPokemon }}
  </section>


  <div v-if="!loading">
    <Card v-bind:infos="pokemon.data" />
  </div>

<!-- 
  <div v-for="(poke, i) in renderPokemons" :key="i">
    <Card v-bind:infos="poke" />
  </div> -->
  
</template>


<script>
import { apiInstance } from '@/services/api';
import axios from 'axios';
import Card from '../components/Card.vue';

export default {
  name: "Home",
  data() {
    return {
      searchPokemon: '',
      loading: true,
      pokemon:[],          
      listofPokemons: [],
      endpoints: [],
      renderPokemons: [],
    };
  },
  methods: {
    getSearch() {
      console.log(this.searchPokemon)
      apiInstance.get(`/pokemon/${this.searchPokemon}`)
        .then((res) => { this.pokemon = res; })
        .catch((err) => console.log(err))
        .finally(() => {
          this.loading = false
        });      
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

