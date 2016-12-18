import * as types from './mutation-types'


export default {
  IS_LOADED ({ commit }) {
    commit(types.IS_LOADED)
  },
   IS_LOADING ({ commit }) {
    commit(types.IS_LOADING)
  }

}
