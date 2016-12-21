const IS_LOADED='IS_LOADED'
const IS_LOADING='IS_LOADING'
const SAVE_SCROLL_TOP='SAVE_SCROLL_TOP'

// import * from './mutation-types.js'
export default{
  [IS_LOADED](state) {
    state.isLoading = false;
  },
  [IS_LOADING](state){
    state.isLoading = true;
  },
  [SAVE_SCROLL_TOP](state,scrollInfo){
    console.log(scrollInfo)
    state.scrollTop[scrollInfo.routerPath]=scrollInfo.scrollTop;
  }
}
