<template>
  <base-layout page-title="Auswertung" defaultBackLink="/home">
    <h6 style="margin-bottom:3px; font-size:1.1em">Ihre Auswahl</h6>
    <p>Typ des Verkäufers: <span v-bind:class="sellerType">{{ capitalizeFirstLetter(sellerType) }}</span></p>
    <p>Typ des Käufers: <span v-bind:class="buyerType">{{ capitalizeFirstLetter(buyerType) }}</span></p>

    <br>
    <h6 style="margin-bottom:3px; font-size:1.1em">Ihre Empfehlung</h6>
    <div v-for="(phase, index) in phases" :key="index">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Phase {{ index + 1 }}</ion-card-subtitle>
          <ion-card-title>{{ phase }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <span v-html="info[sellerTypeNumber][buyerTypeNumber][index]"></span>
        </ion-card-content>
      </ion-card>
    </div>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
  },
  data() {
    return {
      sellerType: this.$store.getters.sellerType,
      buyerType: this.$store.getters.buyerType,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  computed: {
    info() {
      return this.$store.getters.info;
    },
    phases() {
      return this.$store.getters.phases;
    },
    sellerTypeNumber() {
      switch (this.sellerType) {
        case "dominant":
          return 0;
        case "initiativ":
          return 1;
        case "stetig":
          return 2;
        case "gewissenhaft":
          return 3;
        default:
          return 0;
      }
    },
    buyerTypeNumber() {
      switch (this.buyerType) {
        case "dominant":
          return 0;
        case "initiativ":
          return 1;
        case "stetig":
          return 2;
        case "gewissenhaft":
          return 3;
        default:
          return 0;
      }
    },
  },
};
</script>

<style scoped>
hr {background: grey;}

.dominant{
  color: var(--dominant-color);
}
.initiativ{
  color: var(--initiativ-color);
}
.stetig{
  color: var(--stetig-color);
}
.gewissenhaft{
  color: var(--gewissenhaft-color);
}
</style>
