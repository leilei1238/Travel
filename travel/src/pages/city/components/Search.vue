<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: "citySearch"
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
.search
  height: 74px;
  background $bgColor
  padding 0 10px
  .search-input
      width 100%
      height 62px
      line-height 62px
      text-align center
      border-radius 60px
      color #666666
      padding 0 10px
      box-sizing border-box
</style>
