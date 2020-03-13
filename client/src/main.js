import Vue from 'vue'
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import GAuth from 'vue-google-oauth2'


const gauthOption = {
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)

Vue.use(VueSweetalert2);


const base = axios.create({
  baseURL: 'http://localhost:3000'
});

Vue.prototype.$axios = base;

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



new Vue({ render: createElement => createElement(App) }).$mount('#app')