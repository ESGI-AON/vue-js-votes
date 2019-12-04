import Vue from 'vue'
import Vuex from 'vuex';
import { api } from './utils'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    jwt: localStorage.getItem('jwt')
  },
  getters: {
  },
  mutations: {
    setJwt: function (state, jwt) {
      localStorage.setItem('jwt', jwt)
    }
  },
  actions: {
    login: function ({commit}, body) {
      api('/login', body)
        .then(data => commit('setJwt', data.jwt))
    }
  }
});
