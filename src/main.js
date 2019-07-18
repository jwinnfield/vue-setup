import Vue from "vue"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
import axios from "axios"

const vmAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

Vue.config.productionTip = false
Vue.prototype.$env = process.env
Vue.prototype.$axios = vmAxios

const token = localStorage.getItem("user-token")
if(token) {
  vmAxios.defaults.headers.common["Authorization"] = token
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
