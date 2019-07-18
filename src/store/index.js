import Vue from "vue"
import Vuex from "vuex"

import auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
  },
})
