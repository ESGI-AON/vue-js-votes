import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
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
            import ('../components/Register.vue')
    },
    {
        path: '/vote',
        name: 'vote',
        component: () =>
            import ('../components/Vote.vue')
    },
    {
        path: '/user-profile',
        name: 'userprofile',
        component: () =>
            import ('../components/UserProfile.vue')
    },
    {
        path: '/edit-vote',
        name: 'editvote',
        component: () =>
            import ('../components/EditVote.vue')
    },
    {
        path: '/list-vote',
        name: 'listvote',
        component: () =>
            import ('../components/ListVote.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router