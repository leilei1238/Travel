<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages"  :key="index">
        <div class="icon"  v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "必游榜单"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc: "踏青赏花"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          desc: "故宫"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          desc: "古北水镇"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          desc: "古北水镇"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/fe1915e1d20bcc02.png",
          desc: "定制游"
        },
        {
          id: "0010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "演出"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
  padding-bottom: 50%; // 宽高比为2
  overflow: hidden;
}

.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%; // 宽高比为2
  overflow: hidden;

  .icon {
    float: left;
    width: 25%; // 宽度25%
    padding-bottom: 25%; // 高度都是25%
    overflow: hidden;
    position: relative;
    height: 0;

    .icon-img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 44px;
      box-sizing: border-box;
      padding: 10px;

      .icon-img-content {
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
