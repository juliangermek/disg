<template>
  <base-layout page-title="Auswertung" defaultBackLink="/home">
    <p>Typ des Verkäufers: {{ sellerType }}</p>
    <p>Typ des Käufers: {{ buyerType }}</p>

    <p><span v-html="info[0][0][2]"></span></p>
    {{ phases }}
    <div v-for="phase in phases.length" :key="phase">
      <p>Phase {{phase}}</p>
      <span v-html="info[0][0][phase-1]"></span>
      <br><br>
    </div>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      sellerType: this.$store.getters.sellerType,
      buyerType: this.$store.getters.buyerType,
    };
  },
  computed: {
    info() {
      return this.$store.getters.info;
    },
    phases() {
      return this.$store.getters.phases;
    },
  },
};
</script>