<template>
    <div class="content">
        <web
         class="web"
         ref="myweb"
         :src="src"
         @pagestart="start"
         @pagefinish="finished"
         @error="error"
        >
        </web>
        <div><text @click="pre">上一页</text></div>
        <div><text @click="reload">刷新</text></div>
        <div><text @click="next">下一页</text></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      src: "http://imooc.com"
    };
  },
  methods: {
    pre(e) {
      const webview = weex.requireModule("webview");
      webview.goBack(this.$refs.myweb);
    },
    reload(e) {
      const webview = weex.requireModule("webview");
      console.log("reload test");
      webview.reload(this.$refs.myweb);
    },
    next(e) {
      const webview = weex.requireModule("webview");
      webview.goForward(this.$refs.myweb);
    },
    start(e) {
      console.log("start");
    },
    finished(e) {
      console.log("finish");
    },
    error(e) {
      console.log("error");
    }
  }
};
</script>

<style scoped>
.content {
  width: 750px;
  height: 300px;
}

.web {
  height: 300px;
  width: 750px;
}
</style>