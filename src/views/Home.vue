<template>
  <base-layout page-title="DISG - Das Ist Sehr Gut">
    <p>
      Wählen Sie hier Ihren Typ und den Typ ihres Gegenüber. Falls Sie unsicher
      sind, wählen Sie 'Schnelltest'. Um Ihren Typ zu verifizieren oder um
      generell mehr über DISG zu erfahren, wählen Sie 'Verifizieren'
    </p>

    <select-type
      title="Verkäufertyp"
      type="seller"
      v-model:passedSelectedType="selectedSellerType"
    ></select-type>

    <select-type
      title="Käufertyp"
      type="buyer"
      v-model:passedSelectedType="selectedBuyerType"
    ></select-type>

    {{selectedSellerType}}
  </base-layout>
</template>

<script>
import {} from "@ionic/vue";

import SelectType from "../components/SelectType.vue";

export default {
  components: {
    SelectType,
  },
  computed: {
    selectedSellerType() {
      return this.$store.getters.sellerType;
    },
    selectedBuyerType() {
      return this.$store.getters.buyerType;
    }
  },
};
</script>
