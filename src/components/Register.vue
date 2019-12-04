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
