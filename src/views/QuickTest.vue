<template>
  <base-layout page-title="Schnelltest: Verkäufertyp">
    <ion-content class="ion-padding">

      <quicktest-form></quicktest-form>

    </ion-content>
  </base-layout>
</template>

<script>
import { IonContent, } from "@ionic/vue";

import QuicktestForm from "../components/quicktest/QuicktestForm.vue";

export default {
  components: {
    IonContent,
    QuicktestForm
  },
}
</script>