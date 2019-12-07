<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap border-b-2 border-green-999 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img class="fill-current h-10 w-16 mr-2" src="../assets/vote.svg">
        <span class="font-semibold text-xl tracking-tight">Votes</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="float-left mr-4 my-2 ">
          <router-link class=" hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white  "
            v-for="routes in linksFiltered" v-bind:key="routes.id" :to="routes.page">{{routes.text}}
          </router-link>
        </div>
      </div>

      <div class="float-right ml-64 my-2 ">
        <router-link class=" hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white  "
          v-for="routes in links2Filtered" v-bind:key="routes.id" :to="routes.page">{{routes.text}}
        </router-link>
      </div>
      <div v-if="user.first_name">Welcome {{ user.first_name }} {{ user.last_name }}</div>
    </nav>
  </div>
</template>

<script>
  import {mapGetters, mapState} from "vuex";

  export default {
    name: 'Navbar',
    data() {
      return {
        links: [
          {
            id: 0,
            text: 'Home',
            page: '/',
            permission: 0
          },
          {
            id: 1,
            text: 'Vote',
            page: '/vote',
            permission: 2
          },
          {
            id: 2,
            text: 'Login',
            page: '/login',
            permission: 0
          },
        ],
        links2: [
          {
            id: 0,
            text: 'EditVote',
            page: '/edit-vote',
            permission: 2
          },
          {
            id: 1,
            text: 'ListVote',
            page: '/list-vote',
            permission: 1
          },
          {
            id: 2,
            text: 'UserProfile',
            page: '/user-profile',
            permission: 2
          },
        ],
      }
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters(['userPermission']),
      linksFiltered: function () {
        return this.links.filter(l => l.permission <= this.userPermission)
      },
      links2Filtered: function () {
        return this.links2.filter(l => l.permission <= this.userPermission)
      }
    }
  }
</script>
