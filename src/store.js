import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    isAuthenticated: ({user}) => Object.entries(user).length > 0,
    isAdmin: ({user}, {isAuthenticated}) => isAuthenticated && user["access_level"] === 1,
    userPermission: (state, {isAdmin, isAuthenticated}) => {
      if (isAdmin) return 2;
      if (isAuthenticated) return 1;
      return 0;
    }
  },
  mutations: {
    setUser: function (state, user) {
      state.user = user
    }
  },
  actions: {

  }
});
