<template>
  <div class="container" @click="handleGallarClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "commonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGallarClick() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="stylus">
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .swiper-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #ffffff;
    }

    .swiper-pagination-fraction {
      bottom: -100px;
    }
  }
}
</style>
