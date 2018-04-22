<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl';

.title {
  line-height: 80px;
  background: #eee;
  text-indent: 20px;
  margin-top: 10px;
}

.item {
  .item-img-wrapper {
    overflow hidden;
    height: 0;
    padding-bottom: 33.9%;

    .item-img {
      width 100%
    }
  }

  .item-info {
    flex: 1;
    padding: 10px;
    min-width: 0;

    .item-title {
      line-height: 54px;
      font-size: 28px;
    }

    .item-desc {
      line-height: 40px;
      color: #616161;
      font-size 18px
      ellipsis();
    }

    .item-button {
      margin-top: 16px;
      background: #ff9300;
      padding: 0 20px;
      border-radius: 3px;
      color: #ffffff;
      line-height: 44px;
    }
  }
}
</style>
