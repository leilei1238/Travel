<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
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
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
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
      font-size: 18px;
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
