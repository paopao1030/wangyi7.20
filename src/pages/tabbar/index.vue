<template>
  <mt-tabbar
    v-model="selected"
    fixed
    class="container"
    style="background:white"
  >
    <mt-tab-item id="0" class="item">
      <img
        slot="icon"
        src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
      />
      首页
    </mt-tab-item>
    <mt-tab-item id="1" class="item">
      <img
        slot="icon"
        src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
      />
      分类
    </mt-tab-item>
    <mt-tab-item id="2" class="item">
      <img
        slot="icon"
        src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
      />
      值得买
    </mt-tab-item>
    <mt-tab-item id="3" class="item">
      <img
        slot="icon"
        src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
      />
      购物车
    </mt-tab-item>
    <mt-tab-item id="4" class="item">
      <img
        slot="icon"
        src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
      />
      个人
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
    };
  },
  watch: {
    selected: function(val) {
      switch (val) {
        case "0":
          this.$router.push("/first");
          break;
        case "1":
          this.$router.push("/fenlei");
          break;
        case "2":
          this.$router.push("/buy");
          break;
        case "3":
          this.$router.push("/cart");
          break;
        case "4":
          this.$router.push("/person");
          break;
      }
    },
  },
  methods: {},
};
</script>

<style lang="stylus">
.container
  width 100%
  background-color white
  border-top: 1px solid #d9d9d9;
  display: flex
  align-items: center
  justify-content: space-around
  .item
    display: flex
    flex-direction: column
    height 71px
    line-height 71px
    .mint-tab-item-icon
      width 40px
      height 40px
      img
        width 40px
        height 40px
    .mint-tab-item-label
      font-size 25px
</style>
