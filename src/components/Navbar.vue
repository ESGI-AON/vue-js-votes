<template>
  <div>
    <nav class="flex items-center flex-wrap border-b-2 border-green-999 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img class="fill-current h-10 w-16 mr-2" src="../assets/vote.svg">
        <span class="font-semibold text-xl tracking-tight">Votes</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        </button>
      </div>
      <div class="block ">
        <div class="float-left mr-4 my-2">
          <router-link class=" hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white"
            v-for="(property, name) in linksFiltered" v-bind:key="name" :to="property.path">{{ name }}
          </router-link>
          <button v-if="userPermission > 0"
                  @click="logout"
                  class="hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white"
          >
            Logout
          </button>
        </div>
      </div>

      <div class="my-2 ml-auto">
        <router-link class=" hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white"
          v-for="(property, name) in links2Filtered" v-bind:key="name" :to="property.path">{{ name }}
        </router-link>

      </div>
      <router-link to="/user-profile">
        <div
          class="hover:bg-green-999 lg:inline-block lg:mt-0  text-black mr-4 px-4 rounded-full bg-white rounded-full py-2 px-4 border border-black"
          v-if="user.first_name">
          Welcome {{ user.first_name }} {{ user.last_name }}
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import {
    mapGetters, mapMutations,
    mapState
  } from "vuex";

  export default {
    name: 'Navbar',
    data() {
      return {
        links: {
          Home: {
            path: '/',
            permission: 0
          },
          Vote: {
            path: '/vote',
            permission: 2
          },
          Register: {
            path: '/register',
            permission: 2
          },
          Login: {
            path: '/login',
            permission: 0
          }
        },
        links2: {
          ListVote: {
            path: '/list-vote',
            permission: 1
          },
          ListUsers: {
            path: '/list-users',
            permission: 2
          },
          UserProfile: {
            permission: 2,
          }
        }
      }
    },
    created() {
      this.links2.UserProfile.path = `/user-profile/${this.user.uuid}`
    },
    methods: {
      ...mapMutations(['setUser']),
      logout(){
        localStorage.removeItem('jwt')
        this.setUser({})
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters(['userPermission']),
      linksFiltered: function () {
        const filtered = {};
        for (const [name, properties] of Object.entries(this.links)) {
          if (properties.permission <= this.userPermission) {
            filtered[name] = properties
          }
        }
        return filtered
      },
      links2Filtered: function () {
        const filtered = {};
        for (const [name, properties] of Object.entries(this.links2)) {
          if (properties.permission <= this.userPermission) {
            filtered[name] = properties
          }
        }
        return filtered
      }
    }
  }
</script>
