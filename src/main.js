import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index";
import axios from "axios";
import VueAxios from "vue-axios";
// 1. axios 전역 설정
axios.defaults.withCredentials = true; // withCredentials 전역 설정

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router).mount("#app");
