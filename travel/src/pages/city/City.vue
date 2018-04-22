<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import cityHeader from "./components/Header.vue";
import citySearch from "./components/Search.vue";
export default {
  components: {
    cityHeader,
    citySearch
  }
};
</script>

<style scoped>

</style>
