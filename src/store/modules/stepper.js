const state = {
  activeIndex: 0,
}

const mutations = {
  updateActiveIndex(state, index) {
    state.activeIndex = index
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
