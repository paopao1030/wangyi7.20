<template>
  <div class="tabBar">
    <div class="tabItem" @click="goFirst">
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </div>
    <div class="tabItem" @click="goFenlei">
      <i class="iconfont icon-fenlei"></i>
      <p>分类</p>
    </div>
    <div class="tabItem" @click="gobuy">
      <i class="iconfont icon-mai"></i>
      <p>值得买</p>
    </div>
    <div class="tabItem" @click="goCart">
      <i class="iconfont icon-gouwuche"></i>
      <p>购物车</p>
    </div>
    <div class="tabItem" @click="goPerson">
      <i class="iconfont icon-geren"></i>
      <p>个人</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goFenlei() {
      this.$router.push("/fenlei");
    },
    goFirst() {
      this.$router.push("/first");
    },
    gobuy() {
      this.$router.push("/buy");
    },
    goCart() {
      this.$router.push("/cart");
    },
    goPerson() {
      this.$router.push("/person");
    },
  },
};
</script>

<style lang="stylus">
.tabBar
  
  width 100%
  height 97px
  background pink
  border-top: 1px solid #d9d9d9;
  display: flex
  align-items: center
  justify-content: space-around
  .tabItem
    display: flex
    flex-direction: column
    align-items: center
    height 71px
    .iconfont
      font-size: 35px
</style>
