<template>

    <body class="bg-grey-lighter h-screen font-sans">
        <div class="container mx-auto h-full flex justify-center items-center pb-20">
            <div class="w-1/3">
                <h1 class="font-hairline mb-6 text-center">Register to our Website</h1>
                <div
                    class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">First name</label>
                        <input type="text"
                            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                            placeholder="Your First name">
                    </div>

                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Last name</label>
                        <input type="text"
                            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                            placeholder="Your Last name">
                    </div>

                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Email</label>
                        <input type="text"
                            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                            placeholder="Your Email">
                    </div>

                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Birthdate</label>

                        <input type="date" class="bg-gray-300 p-2" v-model="localValue" @change="onChange">
                    </div>

                    <div class="mb-4">
                        <label class="font-bold text-grey-darker block mb-2">Password</label>
                        <input type="text"
                            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                            placeholder="Your Password">
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-green-999 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                            Register
                        </button>


                    </div>

                </div>
                <div class="text-center">
                    <p class="text-grey-dark text-sm">Already have an account ? <a href="/login"
                            class="no-underline text-blue font-bold">Please log in</a>.</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    export default {

        name: "InputDate",
        props: {
            value: String
        },
        data() {
            return {
                localValue: this.value
            }
        },
        methods: {
            onChange(e) {
                this.$emit('update:value', e.target.value)
            }
        }
    }
</script>
