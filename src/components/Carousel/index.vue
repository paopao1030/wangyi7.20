<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in url" :key="index">
        <img :src="item" alt="" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
// import "swiper/css/min.css";
export default {
  name: "Carousel",

  data() {
    return {
      url: [
        "https://yanxuan.nosdn.127.net/da67541e53669b388b8c664797549096.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/aeb01490aee3a747325725ddc06150d6.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      ],
    };
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      // 分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="stylus" scoped>
.swiper-container
  overflow hidden
  width 750px
  height 296px
  .swiper-wrapper
    display flex
    width 100%
    height 100%
    .swiper-lazy
      width 750px
      height 296px
</style>
