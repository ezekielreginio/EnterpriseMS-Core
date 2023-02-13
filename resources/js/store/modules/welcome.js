export default {
    namespaced: true,
    state:{
        currentView: 'login-form'
    },
    getters:{
        getCurrentView: (state) => {
            return state.currentView
        }
    },
    mutations:{
        SET_CURRENT_VIEW : (state, currentView) => {
            state.currentView = currentView
        }
    },
    actions:{
        setCurrentView: ({ commit }, currentView) => {
            commit('SET_CURRENT_VIEW', currentView)
        }
    }
}