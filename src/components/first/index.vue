<template>
  <div id="app">
    <div class="topContainer">
      <!-- 固定定位 -->
      <div class="fixed">
        <div class="top">
          <img src="../../image/logo.png" />
          <div class="search" @click="goSearch">
            <i class="iconfont  icon-search"></i>
            <i>搜索商品 , 共11200款好物</i>
          </div>
          <el-button class="button">登录</el-button>
        </div>
        <!-- 头部导航列表 -->
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
          <!-- 点击弹出div的按钮 -->
          <div class="rightButton" @click="toggle">
            <i
              class="iconfont "
              :class="{
                'icon-xiala': clickXia === false,
                'icon-shangla': clickXia === true,
              }"
            ></i>
          </div>
        </div>
        <!-- 右侧点击弹出的列表 -->
        <div class="hideList" ref="hideList" v-if="clickXia">
          <p class="header">全部频道</p>
          <div class="moreCate" v-if="List.index">
            <button
              class="item"
              v-for="(item, index) in List.index.kingKongModule.kingKongList"
              :key="index"
            >
              {{ item.text }}
            </button>
          </div>
        </div>
      </div>
      <!-- 留出固定定位的高度 -->
      <div class="hezi"></div>
      <!-- swiper -->
      <Swiper />
      <!-- 中间文字 -->
      <div class="zhongTitle" v-if="List.index">
        <div
          class="item"
          v-for="(item, index) in List.index.policyDescList"
          :key="index"
        >
          <img :src="item.icon" />
          <p>{{ item.desc }}</p>
        </div>
      </div>
      <!-- 图片列表区域 -->
      <div v-if="List.index">
        <div class="imgList" v-if="List.index.kingKongModule">
          <div
            class="item"
            v-for="(item, index) in List.index.kingKongModule.kingKongList"
            :key="index"
          >
            <img :src="item.picUrl" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <!-- 广告区域 -->
      <div class="guanggao">
        <img
          src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75"
          alt=""
        />
      </div>
      <!-- 广告2号 -->
      <div class="guanggao2">
        <img
          src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0"
        />
        <img
          class="last"
          src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt=""
        />
      </div>
      <!-- 新人专享 -->
      <div class="newPerson">
        <div class="title">
          <p>新人专享礼</p>
        </div>
        <div class="group">
          <div class="left">
            <div class="title">新人专享礼包</div>
            <div class="xinrenimg">
              <img
                src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                alt=""
              />
            </div>
          </div>
          <div class="right">
            <div class="topa">
              <div class="picWrap">
                <img
                  src="https://yanxuan-item.nosdn.127.net/02b395ef8e9c2c2f4e8b5a530c24fafa.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
                <div class="discount">$ 85</div>
                <div class="wenzi">
                  <p class="fu">福利社</p>
                  <p>今日特价</p>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="picWrap">
                <img
                  src="https://yanxuan-item.nosdn.127.net/0064e22029d052276c2f8e49b1f3973d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt=""
                />
                <div class="discount">$ 4.7</div>
                <div class="wenzi1">
                  <p class="fu">新人拼团</p>
                  <p class="one" style="padding:0 3px">一元起包邮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import "./app.styl";
import BScroll from "better-scroll";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      List: {},
      titleIndex: 0,
      clickXia: false,
    };
  },
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
  },
  computed: {},
  methods: {
    //点击列表右边弹出div
    toggle() {
      this.clickXia = !this.clickXia;
    },
    goTitle(index) {
      this.titleIndex = index;
    },
    goSearch() {
      this.$router.push("/search");
    },
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
  },
};
</script>

<style lang="stylus"></style>
