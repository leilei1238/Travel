<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201403/10/b892e5069c3508f7b017a91121502223.jpg_600x330_b421353e.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">古北水镇</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe679;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import commonGallary from "common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        {
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201403/10/b892e5069c3508f7b017a91121502223.jpg_r_800x800_eee6d3b0.jpg"
        },
        {
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1803/e3/e3d06119c2dd8de7a3.img.jpg_r_800x800_ebc6ecd2.jpg"
        }
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    commonGallary
  }
};
</script>

<style scoped lang="stylus">
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 60px;
    color: #ffffff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 32px;
      padding: 10px;
    }

    .banner-num {
      margin-top: 10px;
      padding: 0 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      background: #000;
      font-size: 24px;

      .banner-icon {
        font-size: 28px;
        margin-right: 10px;
      }
    }
  }
}
</style>
