<template>
  <base-layout page-title="DISG - Das Ist Sehr Gut">
    

    <select-type
      title="Verkäufertyp wählen"
      explaination=" Wählen Sie hier den Verkäufertyp (Ihren Typ). Falls Sie unsicher sind,
      wählen Sie 'Schnelltest'. Um Ihren Typ zu verifizieren oder um generell
      mehr über DISG zu erfahren, wählen Sie 'Verifizieren'."
      v-model:passedSelectedType="selectedSellerType"
    ></select-type>
  </base-layout>
</template>

<script>
import { } from "@ionic/vue";

import SelectType from "../components/SelectType.vue";

export default {
  components: {
    SelectType,
  },
  data() {
    return {
      selectedSellerType: this.$store.getters.sellerType,
    };
  },
};
</script>
