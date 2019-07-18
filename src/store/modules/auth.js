const state = {
  token: localStorage.getItem("user-token") || "",
  status: "",
}

const getters = {
  isAuthenticated: state => !!state.token,
}

const mutations = {
  AUTH_REQUEST: state => {
    state.status = "loading"
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = "success"
    state.token = token
  },
  AUTH_ERROR: state => {
    state.status = "error"
  },
}

const actions = {
  AUTH_REQUEST: function({ commit }, user) {
    new Promise( (resolve, reject) => {
      commit("AUTH_REQUEST")

      this._vm.$axios({
        url: "auth",
        data: user,
        method: "POST",
      }).then( ({ data }, resp) => {
        const { token } = data
        localStorage.setItem("user-token", token)
        this._vm.$axios.defaults.headers.common["Authorization"] = token
        commit("AUTH_SUCCESS", token)
        resolve(resp)
      }).catch(err => {
        commit("AUTH_ERROR", err)
        localStorage.removeItem("user-token")
        reject(err)
      })
    })
  },
  AUTH_LOGOUT: function({ commit }) {
    new Promise(resolve => {
      commit("AUTH_LOGOUT")
      localStorage.removeItem("user-token")
      delete this._vm.$axios.defaults.headers.common["Authorization"]
      resolve()
    })
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
