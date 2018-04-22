<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "cityAlphabet",
  props: {
    cities: Object
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
