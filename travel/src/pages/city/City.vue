<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from "./components/Header.vue";
import citySearch from "./components/Search.vue";
import cityList from "./components/List.vue";
import cityAlphabet from "./components/Alphabet.vue";
export default {
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
};
</script>

<style scoped>

</style>
