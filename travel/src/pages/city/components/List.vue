<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div
     class="area"
     v-for="(item, key) in cities"
     :key="key"
     :ref="key"
    >
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
        <div class="item border-topbottom">{{innerItem.name}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  components: {
    BScroll
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        console.log(element);
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.border-topbottom {
  &::before {
    border-color: #ccc;
  }

  &::after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 158px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .title {
    line-height: 54px;
    background: #eeeeee;
    padding-left: 20px;
    color: #666666;
    font-size: 26px;
  }

  .button-list {
    padding: 10px;
    overflow: hidden;
    padding: 10px 60px 10px 10px;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 10px 10px;
        border: 2px solid #cccccc;
        padding: 10px 0;
        border-radius: 3px;
      }
    }
  }

  .item-list {
    .item {
      line-height: 76px;
      padding-left: 20px;
    }
  }
}
</style>
