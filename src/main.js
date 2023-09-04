import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

// Plugins
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import { Icon } from "@iconify/vue2";

Vue.component("i-icon", Icon);

import $request from "./axios";
Vue.prototype.$request = $request;

Vue.prototype.$axios = axios

// import VueQrcode from 'vue-qrcode'
import VueQr from 'vue-qr'
Vue.component("v-qr",VueQr);

import VueToast from 'vue-toast-notification';
// Import one of the available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.use(VueToast);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// import services from "./services.js";

import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
