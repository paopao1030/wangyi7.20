<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content" v-if="List.index" ref="cont">
      <li
        class="item"
        ref="item"
        @click="goTitle(0)"
        :class="{ active: titleIndex === 0 }"
      >
        推荐
      </li>
      <li
        class="item"
        ref="item"
        :class="{ active: titleIndex === index + 1 }"
        v-for="(item, index) in List.index.kingKongModule.kingKongList"
        :key="index"
        @click="goTitle(index + 1)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 async mounted() {
    let result = await this.$API.getIndexData();
    this.List = result.data;
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
          this.verScroll();
        }
      }, 0);
    });
    methods: {
       verScroll() {
      let width = this.List.length * 60; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
          });
        } else {
          // this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    },
    }
  },
}
</script>

<style lang="stylus">
.wrapper
       width 750px
       height 60px
       line-height: 60px
       position relative
       font-size 0
       overflow hidden
       .content
          position absolute;
          left 0
          bottom 0
          font-size 12px;
          text-align center;
          list-style: none;
          white-space: nowrap;
          display: flex
          padding-left 30px
         .item
           position relative
           font-size: 27px
           color: #333
           display inline-block;
           margin: 0 32px
           box-sizing border-box
           &.active::after
             content ''
             height 4px
             width 130%
             position absolute
             bottom 0
             left -13px
             background #BB2C08
</style>
