<template>
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
