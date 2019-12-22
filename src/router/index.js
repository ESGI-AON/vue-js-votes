import Vue from 'vue'
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'
import { store } from '../store'

Vue.use(VueRouter)

const isAuthenticated = function(to, from, next) {
    if (store.getters.isAuthenticated) {
        next()
    } else {
        next({
            name: 'login',
            query: { redirectFrom: to.fullPath }
        })
    }
};

const isAdmin = function(to, from, next) {
    if (store.getters.isAdmin) {
        next()
    } else {
        next({
            name: 'home',
            query: { redirectFrom: to.fullPath }
        })
    }
};


const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../components/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../components/Login.vue')

    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../components/Register.vue'),
    },
    {
        path: '/vote',
        name: 'vote',
        component: () =>
            import ('../components/Vote.vue'),
        beforeEnter: multiguard([isAuthenticated, isAdmin])
    },
    {
        path: '/user-profile',
        name: 'userprofile',
        component: () =>
            import ('../components/UserProfile.vue'),
        beforeEnter: multiguard([isAuthenticated])
    },
    {
        path: '/edit-vote/:uuid',
        name: 'editvote',
        component: () =>
            import ('../components/EditVote.vue'),
        beforeEnter: multiguard([isAuthenticated, isAdmin])
    },
    {
        path: '/list-vote',
        name: 'listvote',
        component: () =>
            import ('../components/ListVote.vue'),
        beforeEnter: multiguard([isAuthenticated])
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
