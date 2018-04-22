<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
      </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  },
  name: "HomeHeader"
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.header {
  display: flex;
  height: $headerHeight;
  background: $bgColor;
  color: #ffffff;
  line-height: $headerHeight;

  .header-left {
    width: 64px;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 40px;
    }
  }

  .header-input {
    flex: 1;
    margin-top: 12px;
    height: 64px;
    line-height: 64px;
    margin-left: 20px;
    background: #fff;
    border-radius: 10px;
    color: #cccccc;
    padding-left: 20px;
  }

  .header-right {
    width: 126px;
    float: right;
    text-align: center;
    color: #ffffff;

    .arrow-icon {
      font-size: 24px;
    }
  }
}
</style>
