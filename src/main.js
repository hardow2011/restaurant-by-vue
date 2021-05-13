import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
require('@/assets/css/main.scss');


createApp(App).use(router).mount("#app");

require('@/assets/js/script.js');
