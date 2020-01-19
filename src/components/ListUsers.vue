<template>
  <div class="w-2/3 mx-auto">
    <h1 class="font-hairline mb-6 text-center uppercase font-bold text-2xl pt-2">List users</h1>

    <div class="bg-white shadow-md rounded my-6">
      <table class="text-left w-full border-collapse">

        <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
        <thead>
          <tr>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Firstname</th>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Lastname</th>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Email</th>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-100" v-for="user in users">
            <td class="py-4 px-6 border-b border-gray-100">{{ user.first_name }}</td>
            <td class="py-4 px-6 border-b border-gray-100">{{ user.last_name }}</td>
            <td class="py-4 px-6 border-b border-gray-100">{{ user.email }}</td>
            <td class="py-4 px-6 border-b border-gray-100">
              <router-link
                      :to="{name: 'userprofile', params: {'uuid': user.uuid}}"
                      class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-500 hover:bg-green-400 mx-2"
              >
                Edit
              </router-link>
              <button class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-red-500 hover:bg-red-400 mx-2"
                @click="deleteUser(user.uuid)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {api} from '../utils'
  import {mapGetters, mapState} from "vuex";
  export default {
    name: 'ListUsers',
    data(){
      return {
        users: []
      }
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters(['isAdmin'])
    },
    mounted(){
      this.getUsers()
    },
    methods: {
      getUsers(){
        api('/users', null, 'GET')
          .then(users => this.users = users)
      },
      deleteUser(uuid){
        api(`/users/${uuid}`, null, 'DELETE')
          .then(data => this.getUsers())
      }
    }
  }
</script>
