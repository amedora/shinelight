const state = {
  commandList: []
}

const mutations = {
  INIT (state, list) {
    state.commandList = list
  },
  ADD_COMMAND (state, command) {
    state.commandList.push(command)
  },
  DELETE_COMMAND (state, command) {
    state.commandList = state.commandList.filter(e => e.name !== command.name)
  }
}

const actions = {
  init ({ commit }, list) {
    commit('INIT', list)
  },
  addCommand ({ commit }, command) {
    commit('ADD_COMMAND', command)
  },
  deleteCommand ({ commit }, command) {
    commit('DELETE_COMMAND', command)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
