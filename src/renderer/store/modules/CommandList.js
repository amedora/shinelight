const state = {
  commandList: []
}

const mutations = {
  INIT (state, list) {
    state.commandList = list
  },
  ADD_COMMAND (state, command) {
    state.comandList.push(command)
  }
}

const actions = {
  init ({ commit }, list) {
    commit('INIT', list)
  },
  addCommand ({ commit }, command) {
    commit('ADD_COMMAND', command)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
