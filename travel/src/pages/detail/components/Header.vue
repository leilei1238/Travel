<template>
  <div>
    <router-link to="/"
                 class="header-abs"
                 v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top < 140 ? top / 140 : 1;
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.header-abs {
  position: fixed;
  left: 20px;
  top: 20px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
  background: #000;
  text-align: center;

  .header-abs-back {
    color: #ffffff;
    font-size: 40px;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;

  .header-fixed-back {
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
