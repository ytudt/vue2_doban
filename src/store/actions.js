import * as types from './mutation-types'


export default {
  IS_LOADED ({ commit }) {
    commit(types.IS_LOADED)
  },
   IS_LOADING ({ commit }) {
    commit(types.IS_LOADING)
  },
  SAVE_SCROLL_TOP({commit},scrollInfo){
    commit(types.SAVE_SCROLL_TOP,scrollInfo)
  }

}
