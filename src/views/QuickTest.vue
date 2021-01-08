<template>
  <base-layout page-title="Schnelltest">

    <quicktest-form></quicktest-form>

  </base-layout>
</template>

<script>
import QuicktestForm from "../components/quicktest/QuicktestForm.vue";

export default {
  components: {
    QuicktestForm
  },
}
</script>