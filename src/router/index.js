import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history", // 路由路径不带#号
  routes,
});
export default router;
