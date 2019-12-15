<template>
  <div class="w-2/3 mx-auto">
                          <h1 class="font-hairline mb-6 text-center uppercase font-bold text-2xl pt-2">Edit vote</h1>

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
          <tr class="hover:bg-gray-100">
            <td class="py-4 px-6 border-b border-gray-100">MyVote1</td>
            <td class="py-4 px-6 border-b border-gray-100">It's my first vote</td>

            <td class="py-4 px-6 border-b border-gray-100">
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-999 hover:bg-green-400 ">Edit</a> 
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-blue-900 hover:bg-blue-400">View</a>
            </td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="py-4 px-6 border-b border-gray-100">MyVote2</td>
            <td class="py-4 px-6 border-b border-gray-100">It's my first vote</td>
            <td class="py-4 px-6 border-b border-gray-100">
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-999 hover:bg-green-400">Edit</a>
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-blue-900 hover:bg-blue-400">View</a>
            </td>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="py-4 px-6 border-b border-gray-100">MyVote3</td>
            <td class="py-4 px-6 border-b border-gray-100">It's my first vote</td>
            <td class="py-4 px-6 border-b border-gray-100">
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-green-999 hover:bg-green-400">Edit</a>
              <a href="#"
                class="text-gray-100 font-bold py-1 px-3 rounded text-xs bg-blue-900 hover:bg-blue-400">View</a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>
