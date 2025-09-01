import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { router } from "./route";
import "./assets/scss/style.scss";
import "bootstrap";
import {createPinia} from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css'


const app = createApp(App);
app.use(createPinia())
app.use(router);

app.mount("#app");

AOS.init()