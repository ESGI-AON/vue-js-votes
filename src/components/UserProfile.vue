<template>

    <body class="bg-grey-lighter h-screen font-sans">
        <div class="flex float-right justify-between">
            <button class="bg-red-600 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                Delete user
            </button>
        </div>
        <div class="container mx-auto h-full flex justify-center items-center pb-20">
            <div class="w-1/3">
                          <h1 class="font-hairline mb-6 text-center uppercase font-bold text-2xl pt-2">Edit your profile</h1>
                          
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
                        <label class="font-bold text-grey-darker block mb-2">Password</label>
                        <input type="text"
                            class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                            placeholder="Your Password">
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-green-999 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>


                    </div>

                </div>

            </div>
        </div>
    </body>
</template>