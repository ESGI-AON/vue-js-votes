<!--<template>-->

<!--  <body class="bg-grey-lighter h-screen font-sans">-->
<!--  <div class="container mx-auto h-full flex justify-center items-center pb-20">-->
<!--    <div class="w-1/3">-->
<!--      <h1 class="font-hairline mb-6 text-center">Register to our Website</h1>-->
<!--      <div-->
<!--              class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">-->
<!--        <div class="mb-4">-->
<!--          <label class="font-bold text-grey-darker block mb-2">First name</label>-->
<!--          <input type="text"-->
<!--                 class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"-->
<!--                 placeholder="Your First name">-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label class="font-bold text-grey-darker block mb-2">Last name</label>-->
<!--          <input type="text"-->
<!--                 class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"-->
<!--                 placeholder="Your Last name">-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label class="font-bold text-grey-darker block mb-2">Email</label>-->
<!--          <input type="text"-->
<!--                 class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"-->
<!--                 placeholder="Your Email">-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label class="font-bold text-grey-darker block mb-2">Birthdate</label>-->

<!--          <input type="date" class="bg-gray-300 p-2" v-model="localValue" @change="onChange">-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--          <label class="font-bold text-grey-darker block mb-2">Password</label>-->
<!--          <input type="text"-->
<!--                 class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"-->
<!--                 placeholder="Your Password">-->
<!--        </div>-->

<!--        <div class="flex items-center justify-between">-->
<!--          <button class="bg-green-999 hover:bg-teal text-white font-bold py-2 px-4 rounded">-->
<!--            Register-->
<!--          </button>-->


<!--        </div>-->

<!--      </div>-->
<!--      <div class="text-center">-->
<!--        <p class="text-grey-dark text-sm">Already have an account ? <a href="/login"-->
<!--                                                                       class="no-underline text-blue font-bold">Please log in</a>.</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  </body>-->
<!--</template>-->

<template>
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
</template>

<script>

  import Formik from "./Form/Formik";
  import FormGroup from "./Form/FormGroup";

  export default {
    name: "Register",
    components: {
      Formik,
      FormGroup
    },
    data() {
      return {
        fields: [
          {
            type: 'text',
            name: 'firstname',
            label: 'Prénom',
            value: ''
          },
          {
            type: 'text',
            name: 'lastname',
            label: 'Nom',
            value: ''
          },
          {
            type: 'email',
            name: 'email',
            label: 'Email',
            value: ''
          },
          {
            type: 'password',
            name: 'password',
            label: 'Mot de passe',
            value: ''
          },
          {
            type: 'date',
            name: 'birth_date',
            label: 'Date de naissance',
            value: ''
          },
        ]
      }
    },
    methods: {
      submit: function (values) {
        fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: values
        })
          .then(res => res.json())
          .then(data => console.log(data)
        );
        alert (JSON.stringify(values, null, 2));
      }
    }
  }
</script>
