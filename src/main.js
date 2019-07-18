import Vue from "vue"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
import axios from "axios"
import Ripple from "vue-ripple-directive"

const vmAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

const token = localStorage.getItem("user-token")
if(token) {
  vmAxios.defaults.headers.common["Authorization"] = token
}

Vue.config.productionTip = false
Vue.prototype.$env = process.env
Vue.prototype.$axios = vmAxios

Ripple.color = "rgba(255, 255, 255, 0.35)"
Vue.directive("ripple", Ripple)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
