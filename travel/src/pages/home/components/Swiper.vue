<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeWeekend",
  props: {
    list: {
      type: Array
    }
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="stylus">
// >>> 样式穿透，不受scroped限制
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper >>> .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%; // 实现图片的宽高比
  background: #ccc;

  .swiper-img {
    width: 100%;
  }
}
</style>
