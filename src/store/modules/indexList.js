import Vue from 'vue'

export const PULL_LIST = 'PULL_LIST' //登录成功
// export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
        list:[]
    },
    mutations: {
        [PULL_LIST](state, list) {
            console.log(state)
            state.list=list;
            console.log(state)
        }
    },
    actions: {
        [PULL_LIST]({commit}, list) {
            commit(PULL_LIST, list)
        }
    }
}
