import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

//Importar el filtro de redondeo
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";

//Especificamos a vue que use la libreria
Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

//Registrar el filtro en la aplicación Vue
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
