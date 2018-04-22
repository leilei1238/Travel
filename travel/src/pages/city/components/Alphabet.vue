<template>
  <ul class="list">
    <li
    class="item"
    v-for="item in letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "cityAlphabet",
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      // 思路：求出A距离顶部的高度 和 当前元素距离顶部的高度的 差值 / 每个元素的高度，求出点击的元素的索引
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => { // 定时器，是为了函数截流，提高moveTouch多次触发的性能
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 22);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 40px;
  position: absolute;
  top: 158px;
  right: 0;
  bottom: 0;
  width: 40px;
  color: $bgColor;
}
</style>
