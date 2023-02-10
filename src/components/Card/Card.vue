<script>
import './Card.scss';

export default {
  name: "Card",
  props: {
    infos: {}
  }
}
</script>

<template>
  <div class="card">
    <div class="info-card">
      <div class="infos-card-title">
        <span style="text-transform: capitalize;" v-for="types in infos.types">
        {{ types.type.name }} 
        </span>

        <h2 style="text-transform: capitalize;">{{ infos.name }}</h2>

      </div>

      <img :src="infos.sprites.other['official-artwork'].front_default" :alt="'img'+infos.name">
    </div>  

    <div class="status-card">
      <h3 class="">
        Stats
      </h3>

      <div class="status-info">
        <div v-for="stats in infos.stats">
          {{ stats.stat.name }} <input type="range" :value="stats.base_stat" min="0" max="100" step="1" disabled> {{ stats.base_stat }}
        </div>
      </div>
    </div>

    <span class="id">#<span>{{ infos.id }}</span></span>
  </div>
</template>



