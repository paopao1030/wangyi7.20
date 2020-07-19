import First from "../components/first";
import Fenlei from "../components/fenlei";
import Buy from "../components/buy";
import Cart from "../components/cart";
import Person from "../components/person";
import Search from "../components/search";
export default [
  {
    path: "/",
    component: First,
  },
  {
    path: "/first",
    component: First,
  },
  {
    path: "/fenlei",
    component: Fenlei,
  },
  {
    path: "/buy",
    component: Buy,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/person",
    component: Person,
  },
  {
    path: "/search",
    component: Search,
  },
];
