<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "cityAlphabet"
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
.list
  display flex
  flex-direction column
  justify-content center
  text-align center
  line-height 44px
  position absolute
  top 158px
  right 0
  bottom 0
  width 44px
  color $bgColor

</style>
