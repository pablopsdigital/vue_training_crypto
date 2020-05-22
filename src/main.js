import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";

//Importar el filtro de redondeo
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";

//Registrar el filtro en la aplicación Vue
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
