import Vue from 'vue'
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
});

export const store = new Vuex.Store({
    state: {
        user: {},
    },
    getters: {
        isAuthenticated: ({ user }) => Object.entries(user).length > 0,
        isAdmin: ({ user }, { isAuthenticated }) => isAuthenticated && user["access_level"] === 1,
        userPermission: (state, { isAdmin, isAuthenticated }) => {
            if (isAdmin) return 2;
            if (isAuthenticated) return 1;
            return 0;
        }
    },
    mutations: {
        setUser: function(state, user) {
            state.user = user
        }
    },
    actions: {

    },
    plugins: [vuexLocalStorage.plugin]
});