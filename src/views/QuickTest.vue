<template>
  <base-layout page-title="Schnelltest: Verkäufertyp">
    <ion-content class="ion-padding">

      <form @submit.prevent="submitForm">

        <quicktest-question :questions="questions"></quicktest-question>

      </form>

    </ion-content>
  </base-layout>
</template>

<script>
import { IonContent, } from "@ionic/vue";

import QuicktestQuestion from "../components/quicktest/QuicktestQuestion.vue";

export default {
  components: {
    IonContent,
    QuicktestQuestion
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    }
  },
}
</script>