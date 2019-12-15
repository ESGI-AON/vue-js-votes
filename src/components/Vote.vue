<template>
<body class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center pb-24">
        <div class="w-1/3">
                          <h1 class="font-hairline mb-6 text-center uppercase font-bold text-2xl pt-2">Create voting proposal</h1>
            <div class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

                    <Formik @onSubmit="submit">
                        <FormGroup v-for="field in fields"
                                   :key="field.name"
                                   :type="field.type"
                                   :name="field.name"
                                   :value="field.value"
                                   :label="field.label"
                        >
                        </FormGroup>
                    </Formik>
                  

                
            </div>
           
        </div>
    </div>
</body>
</template>

<script>
    import Formik from "./Form/Formik";
    import FormGroup from "./Form/FormGroup";
    import axios from "axios";

    export default {
        name: "Votes",
        components: {
            FormGroup,
            Formik
        },
        data: function () {
            return {
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        type: 'text',
                    },
                    {
                        label: 'Description',
                        name: 'desc',
                        type: 'textarea',
                    }
                ],
            }
        },
        methods: {
            submit(values){
                fetch("http://localhost:4000/votes", {
                    "method": "Post",
                    "headers": {
                        "Authorization": "Bearer "+ localStorage.jwt,
                        "content-type": "application/json"
                    },
                    "body": JSON.stringify(values)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => {
                        // console.log(err);
                    });
            }
        }
    }
</script>
