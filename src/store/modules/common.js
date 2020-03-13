export default {
  namespaced: true,
  state: {
    device: ''
  },
  mutations: {
    'SET_DEVICE' (state, newValue) {
      state.device = newValue
    }

  },
  actions: {
    setDevice ({ commit }, newValue) {
      return commit('SET_DEVICE', newValue)
    }
  }
}
