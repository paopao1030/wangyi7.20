import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible";
import ElementUI from "element-ui";
Vue.config.productionTip = false;
import router from "./router";
// import Tabbar from "./pages/tabbar";
import store from "./store";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
// import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
Vue.use(Mint);
import Swiper from "./components/Carousel";
import * as API from "./api";
Vue.use(ElementUI);
// Vue.component("Tabbar", Tabbar);
Vue.component("Swiper", Swiper);
Vue.prototype.$API = API;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
