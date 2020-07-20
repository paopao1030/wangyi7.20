<template>
  <div class="one">
    <router-view></router-view>
    <MyTabbar
      v-if="this.$route.path !== '/search' && this.$route.path !== '/person'"
    />
  </div>
</template>

<script>
import MyTabbar from "./pages/tabbar";
export default {
  name: "App",
  data() {
    return {
      selected: 0,
    };
  },
  components: {
    MyTabbar,
  },
  watch: {},
  methods: {},
};
</script>

<style lang="stylus">
html,body
  width 100%
  height 100%
  position relative
  .one
    width 100%
    height 100%
</style>
