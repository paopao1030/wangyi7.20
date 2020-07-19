import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible";
import ElementUI from "element-ui";
Vue.config.productionTip = false;
import router from "./router";
import Tabbar from "./pages/tabbar";
Vue.use(ElementUI);
Vue.component("Tabbar", Tabbar);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
