<template>

  <div class="bg-grey-lighter h-screen font-sans">
    <div class="container mx-auto h-full flex justify-center items-center pb-64">
      <div class="w-1/3">
        <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
        <div class=" border-t-2 border-green-999 border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

          <Formik @onSubmit="login">
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
          <p class="text-grey-dark text-sm">Don't have an account? <a href="/register" class="no-underline text-blue font-bold">Create an Account</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Formik from "./Form/Formik";
  import FormGroup from "./Form/FormGroup";
  import { mapActions } from "vuex";

  export default {
    name: "Login",
    components: {
      FormGroup,
      Formik
    },
    data: function () {
      return {
        fields: [
          {
            label: 'Email',
            name: 'email',
            type: 'email',
          },
          {
            label: 'Mot de passe',
            name: 'password',
            type: 'password',
          }
        ],
      }
    },
    methods: {
      ...mapActions(['login', 'createVote'])
    }
  }
</script>
