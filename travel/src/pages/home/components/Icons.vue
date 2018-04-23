<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages"
                    :key="index">
        <div class="icon"
             v-for="item in page"
             :key="item.id">
          <div class="icon1-img">
            <img class="icon1-img-content"
                 :src="item.imgUrl"
                 alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    pages () {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  width: 100%;
  height: 0;
  padding-bottom: 54%; // 宽高比为2
  overflow: hidden;
}

.icons {
  width: 100%;
  height: 0;
  padding-bottom: 54%; // 宽高比为2
  overflow: hidden;
  margin-top: 10px;

  .icon {
    float: left;
    width: 25%; // 宽度25%
    padding-bottom: 25%; // 高度都是25%
    overflow: hidden;
    position: relative;
    height: 0;

    .icon1-img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 44px;
      box-sizing: border-box;
      padding: 10px;

      .icon1-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: darkTextColor;
      ellipsis();
    }
  }
}
</style>
