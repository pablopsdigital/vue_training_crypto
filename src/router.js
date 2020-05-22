//Definición de rutas
import Vue from "vue";
import Router from "vue-router";

//Import views for router
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
    {
      path: "/coin/:id",
      name: "conin-detail",
      component: CoinDetail,
    },
  ],
});
