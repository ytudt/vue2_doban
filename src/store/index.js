import Vue from 'vue'
import Vuex from 'vuex'
import indexList from './modules/indexList'
// import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
 strict: true, //使用严格模式
    modules: {
        indexList
    }


})
