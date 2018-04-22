<template>
  <div class="search">
    <input
     class="search-input"
     type="text"
     placeholder="输入城市名或拼音"
     v-model="keyword"
    >
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
         v-for="item of list"
         :key="item.id"
         class="search-item border-bottom"
         @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li
        class="search-item border-bottom"
        v-show="hasNoData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "citySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  components: {
    BScroll
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  methods: {
    ...mapMutations(["changeCity"]),
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.search {
  height: 74px;
  background: $bgColor;
  padding: 0 10px;

  .search-input {
    width: 100%;
    height: 62px;
    line-height: 62px;
    text-align: center;
    border-radius: 60px;
    color: #666666;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .search-content {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    background: #fff;
    top: 158px;
    left: 0;
    right: 0;
    bottom: 0;

    .search-item {
      line-height: 62px;
      padding-left: 20px;
      color: #666666;
      background: #fff;
    }
  }
}
</style>
