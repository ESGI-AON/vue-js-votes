<template>
  <div class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center pt-0">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center">Register to our Website</h1>
        <div class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
  <Formik @onSubmit="register">
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
       <div class="text-center">
          <p class="text-grey-dark text-sm">Already have an account? <a href="/login" class="no-underline text-blue font-bold">Log into your account</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Formik from "./Form/Formik";
  import FormGroup from "./Form/FormGroup";
  import {api} from "../utils";
  import {mapMutations} from "vuex";
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
            name: 'first_name',
            label: 'Prénom',
          },
          {
            type: 'text',
            name: 'last_name',
            label: 'Nom',
          },
          {
            type: 'email',
            name: 'email',
            label: 'Email',
          },
          {
            type: 'password',
            name: 'pass',
            label: 'Mot de passe',
          },
          {
            type: 'date',
            name: 'birth_date',
            label: 'Date de naissance',
          },
        ]
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      register: function (body) {
        const [year, month, day] = body['birth_date'].split('-');
        body['birth_date'] = `${day}-${month}-${year}`;
        api('/users', body, 'POST')
          .then(user => {
            this.setUser(user)
          })
      }
    }
  }
</script>