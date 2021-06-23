<template>
  <base-layout page-title="Sales Assistant">
    <p class="hide">
      Wählen Sie hier Ihren Typ und den Typ ihres Gegenüber. Falls Sie unsicher
      sind, wählen Sie 'Schnelltest'. Um Ihren Typ zu verifizieren oder um
      generell mehr über DISG zu erfahren, wählen Sie 'Verifizieren'
    </p>

    <select-type
      title="Verkäufertyp"
      role="seller"
      v-model:passedSelectedType="selectedSellerType"
    ></select-type>

    <select-type
      title="Käufertyp"
      role="buyer"
      v-model:passedSelectedType="selectedBuyerType"
    ></select-type>

    <hr />

    <ion-button
      expand="full"
      color="primary"
      router-link="/evaluation"
      v-bind:class="{ hide: !readyForEvaluation }"
      >Zur Auswertung</ion-button
    >

    <div class="footer">
      <a style="text-decoration: none" href="/impressum">Impressum</a>
    </div>
  </base-layout>
</template>

<script>
import { IonButton } from "@ionic/vue";

import SelectType from "../components/SelectType.vue";

export default {
  components: {
    IonButton,
    SelectType,
  },
  computed: {
    selectedSellerType() {
      return this.$store.getters.sellerType;
    },
    selectedBuyerType() {
      return this.$store.getters.buyerType;
    },
    readyForEvaluation() {
      if (this.selectedSellerType != "" && this.selectedBuyerType != "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding: 15px;
}
</style>
