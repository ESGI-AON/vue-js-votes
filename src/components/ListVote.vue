<template>
  <div class="w-2/3 mx-auto">
                          <h1 class="font-hairline mb-6 text-center uppercase font-bold text-2xl pt-2">List vote</h1>

    <div class="bg-white shadow-md rounded my-6">
      <table class="text-left w-full border-collapse">

        <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
        <thead>
          <tr>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Title
            </th>
            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">
              Description
            </th>

            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-900 border-b border-gray-100">Actions
            </th>
          </tr>
        </thead>
        <tbody>

          <tr class="hover:bg-gray-100" v-for="vote in votes">
            <td class="py-4 px-6 border-b border-gray-100">{{ vote.title }}</td>
            <td class="py-4 px-6 border-b border-gray-100">{{ vote.desc }}</td>

            <td class="py-4 px-6 border-b border-gray-100">
              <button v-if="!isAdmin"
                      @click="putVote(vote.uuid)"
                      class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-999 hover:bg-green-400 ">
                Vote
              </button>
              <router-link
                      :to="{name: 'editvote', params: {'uuid': vote.uuid}}"
                      class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-999 hover:bg-green-400 mx-2"
              >
                Edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {api} from '../utils'
  import {mapGetters} from "vuex";
  export default {
    name: 'ListVote',
    data(){
      return {
        votes: []
      }
    },
    computed: {
      ...mapGetters(['isAdmin'])
    },
    mounted(){
      this.getVotes()
    },
    methods: {
      getVotes(){
        api('/votes', null, 'GET')
        .then(votes => this.votes = votes)
      },
      putVote(uuid){
        api(`/votes/${uuid}`, {"start_date": "01-01-2019","end_date": "02-01-2019"}, 'PUT')
      }
    }
  }
</script>
