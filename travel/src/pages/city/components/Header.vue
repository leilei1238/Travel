<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "cityHeader"
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.header {
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  position: relative;

  .header-back {
    position: absolute;
    width: 64px;
    text-align: center;
    font-size: 40px;
    left: 0;
    top: 0;
    color: #ffffff;
  }
}
</style>
