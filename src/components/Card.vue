<script>
export default {
  name: "Card",
  props: {
    infos: {}
  }
}
</script>

<template>
  <div class="card">
    <!-- <img src="" alt=""> -->
    <h3>{{ infos.name }}</h3>
    <!-- <p v-for="stats in infos.stats">
      Status name: {{ stats.stat.name }}, status value: {{ stats.base_stat }}
    </p> -->
  </div>
</template>



<style lang="scss">
.card{
  width: 130px;
  height: 100px;
  
  border-radius: 2px;
}
</style>