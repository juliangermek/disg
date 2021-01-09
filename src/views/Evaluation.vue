<template>
  <base-layout page-title="Auswertung" defaultBackLink="/home">
    <p>Typ des Verkäufers: {{sellerType}}</p>
    <p>Typ des Käufers: {{buyerType}}</p>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      sellerType: this.$store.getters.sellerType,
      buyerType: this.$store.getters.buyerType,
    }
  }
  
}
</script>