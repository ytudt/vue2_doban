import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import indexList from './modules/indexList'
Vue.use(Vuex)
export const IS_LOADED = 'IS_LOADED'
export const IS_LOADING = 'IS_LOADING'
export const SAVE_SCROLL_TOP = 'SAVE_SCROLL_TOP'
export default new Vuex.Store({
  state,
  actions,
  mutations,
 strict: true, //使用严格模式
 modules: {
        indexList
    }
})
