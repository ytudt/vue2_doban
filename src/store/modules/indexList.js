import Vue from 'vue'

export const PULL_LIST = 'PULL_LIST' //登录成功
export const MODIFY_TAB = 'MODIFY_TAB' //修改激活TAB
// export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
       activeTitle:'正在热映',
       list:[]
    },
    mutations: {
        [PULL_LIST](state, list) {
            state.list=list;
        },
         [MODIFY_TAB](state, tabText) {
            state.activeTitle=tabText;
        }
    },
    actions: {
        [PULL_LIST]({commit}, list) {
            commit(PULL_LIST, list)
        },
        [MODIFY_TAB]({commit},tabText){
          commit(MODIFY_TAB, tabText)
        }
    }
}
