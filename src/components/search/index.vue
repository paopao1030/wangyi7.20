<template>
  <div class="searchContainer">
    <div class="top">
      <i class="iconfont icon-search"></i>
      <input type="text" ref="input" v-model="keyWord" />
      <button>取消</button>
    </div>
    <div class="bottom">
      <div class="header">热门搜索</div>
      <div class="list" v-if="placeTitle.data">
        <div
          class="item"
          v-for="(item, index) in placeTitle.data.hotKeywordVOList"
          :key="index"
          :class="{ active: item.highlight === 0 }"
        >
          {{ item.keyword }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.styl";
export default {
  data() {
    return {
      keyWord: "",
      placeTitle: {},
    };
  },
  async mounted() {
    let result = await this.$API.getPlaceholder();
    this.placeTitle = result.data;
    this.$refs.input.placeholder = this.placeTitle.data.defaultKeyword.keyword;
  },
};
</script>

<style></style>
