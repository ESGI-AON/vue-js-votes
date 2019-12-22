<template>
  <div>
    <Formik @onSubmit="editVote" :initial-values="initialValues">
      <FlashMessage v-if="isSuccessful" :message="message" class="success"/>
      <FormGroup v-for="field in fields"
        :name="field.name"
        :type="field.type"
        :label="field.label"
        :value="field.value"
      />
    </Formik>
  </div>
</template>

<script>
  import FormGroup from "./Form/FormGroup";
  import Formik from "./Form/Formik";
  import FlashMessage from "./UI/FlashMessage";
  import {api} from "../utils"

  export default {
    name: 'EditVote',
    components: {
      Formik,
      FormGroup,
      FlashMessage
    },
    data(){
      return {
        fields: {
          title: {
            type: 'text',
            name: 'title',
            label: 'Title',
            value: ''
          },
          desc: {
            type: 'text',
            name: 'desc',
            label: 'Description',
            value: ''
          },
        },
        initialValues: {},
        isSuccessful: false,
        message: "Edition successful"
      }
    },
    mounted() {
      this.getVote()
    },
    methods: {
      getVote(){
        api(`/votes/${this.$route.params.uuid}`, null, 'GET')
        .then(vote => {
          Object.entries(vote).forEach(([key, value]) => {
            if (this.fields[key]) {
              this.fields[key]['value'] = value
              this.initialValues[key] = value
            }
          })
        })
      },
      editVote(body){
        api(`/votes/${this.$route.params.uuid}`, body, 'PUT')
        .then(() => this.isSuccessful = true)
      }
    }
  }
</script>
