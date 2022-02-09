import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import VModal from "vue-js-modal";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
