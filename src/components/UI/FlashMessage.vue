<template>
    <p class="inline-block mx-auto my-4 px-4 py-3 rounded-lg">{{ this.message }}</p>
</template>

<script>
  export default {
    name: "FlashMessage",
    props: ['message'],
  }
</script>

<style scoped>
  .success{
    @apply bg-green-200
  }
  .error {
    @apply bg-red-200
  }
</style>
