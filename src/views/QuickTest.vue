<template>
  <base-layout :page-title="'Schnelltest: ' + typeTitle" defaultBackLink="/home">
    <quicktest-form :type="type"></quicktest-form>

  </base-layout>
</template>

<script>
import QuicktestForm from "../components/quicktest/QuicktestForm.vue";

export default {
  components: {
    QuicktestForm
  },
  data() {
    return {
      type: this.$route.params.type,
    };
  },
  computed: {
    typeTitle() {
      if (this.type == "seller") {
        return "Verkäufertyp"
      } else if (this.type == "buyer"){
        return "Käufertyp"
      } else {
        return "Error"
      }
    },
  },
}
</script>