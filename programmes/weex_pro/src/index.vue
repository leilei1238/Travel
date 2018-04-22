<template>
  <div class="wrapper">
    <router-link to="/web" class="link">web</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
    };
  }
};
</script>
<style scoped>
.link{
  font-size: 40px;
}
</style>


