<template>
  <div id="app">
    <div class="topContainer">
      <div class="top">
        <img src="../../image/logo.png" />
        <div class="search" @click="goSearch">
          <i class="iconfont  icon-search"></i>
          <i>搜索商品,共11200商品</i>
        </div>
        <el-button class="button">登录</el-button>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import "./app.styl";
export default {
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="stylus"></style>
