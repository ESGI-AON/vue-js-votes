<template>
  <Formik @onSubmit="editUser" :initial-values="initialValues">
    <FlashMessage v-if="isSuccessful" :message="message" class="success"/>
    <FormGroup
      v-for="(value, name) in fields"
      :key="name"
      :name="name"
      :value="value.value"
      :label="value.label"
      :type="value.type"
    >
    </FormGroup>
  </Formik>
</template>

<script>
    import Formik from "./Form/Formik";
    import FormGroup from "./Form/FormGroup";
    import FlashMessage from "./UI/FlashMessage";
    import {api} from "../utils";
    import {mapMutations, mapState} from "vuex";

    export default {
      name: 'UserProfile',
      components: {
        Formik,
        FormGroup,
        FlashMessage
      },
      data() {
        return {
          fields: {
            "first_name": {
              label: "Firstname",
              type: "text",
              value: ""
            },
            "last_name": {
              label: "Lastname",
              type: "text",
              value: ""
            },
            "email": {
              label: "Email",
              type: "email",
              value: ""
            }
          },
          initialValues: {},
          isSuccessful: false,
          message: "Edit successful"
        }
      },
      computed: {
        ...mapState(['user'])
      },
      mounted() {
        this.getUser()
      },
      methods: {
        ...mapMutations(['setUser']),
        getUser() {
          api(`/users/${this.$route.params.uuid}`,null, 'GET')
          .then(user => {
            Object.entries(user).forEach(([key, value]) => {
              if (this.fields[key]) {
                this.fields[key]["value"] = value
                this.initialValues[key] = value
              }
            });
          })
        },
        editUser(body) {
          api(`/users/${this.$route.params.uuid}`, body, 'PUT')
          .then((updatedUser) => {
            this.isSuccessful = true;
            if (this.user.uuid === updatedUser.uuid) {
              this.setUser({...this.user, ...updatedUser})
            }
          })
        }
      }

    }
</script>
