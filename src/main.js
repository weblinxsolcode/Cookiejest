import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons/";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
