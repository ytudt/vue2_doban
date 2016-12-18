const IS_LOADED='IS_LOADED'
const IS_LOADING='IS_LOADING'

// import * from './mutation-types.js'
export default{
  [IS_LOADED](state) {
    state.isLoading = false;
  },
  [IS_LOADING](state){
    state.isLoading = true;
  }
}
