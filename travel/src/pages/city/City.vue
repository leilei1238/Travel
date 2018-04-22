<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import cityHeader from "./components/Header.vue";
import citySearch from "./components/Search.vue";
import cityList from "./components/List.vue";
import cityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
      console.log(res);
    }
  }
};
</script>

<style scoped>

</style>
