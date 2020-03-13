export default {
  namespaced: true,
  state: {
    device: '',
    // channel代表当前频道，0为首页，1为音乐，2为视频
    channel: 0
  },
  mutations: {
    'SET_DEVICE' (state, newValue) {
      state.device = newValue
    },
    'SET_CHANNEL' (state, newValue) {
      state.channel = newValue
    }

  },
  actions: {
    setDevice ({ commit }, newValue) {
      return commit('SET_DEVICE', newValue)
    },
    setChannel ({ commit }, newValue) {
      return commit('SET_CHANNEL', newValue)
    }
  }
}
