<template>
<body class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center pb-24">
        <div class="w-1/3">
            <h1 class="font-hairline mb-6 text-center">Create voting proposal</h1>
            <div class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Title</label>
                    <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Title">
                </div>

                <div class="mb-4">
                    <label class="font-bold text-grey-darker block mb-2">Description</label>
                    <textarea type="text" class="block appearance-none w-full h-64 bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Description">
               </textarea>
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-green-999 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>

                  
                </div>
                
            </div>
           
        </div>
    </div>
</body>
</template>
