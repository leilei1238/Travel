<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {};
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
  display: flex;
  height: 188px;
  overflow: hidden;

  .item-img {
    width: 160px;
    height: 160px;
    padding: 20px;
  }

  .item-info {
    flex: 1;
    padding: 10px;
    min-width: 0;

    .item-title {
      line-height: 54px;
      font-size: 32px;
    }

    .item-desc {
      line-height: 40px;
      color: #ccc;
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
