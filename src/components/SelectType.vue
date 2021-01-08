<template>
  <h4>{{ title }}</h4>
  <p>{{ explaination }}</p>

  <ion-item
    v-bind:class="{
      dominant: selectedSellerType == 'dominant',
      initiativ: selectedSellerType == 'initiativ',
      stetig: selectedSellerType == 'stetig',
      gewissenhaft: selectedSellerType == 'gewissenhaft',
    }"
  >
    <ion-label position="floating">Verkäufertyp</ion-label>
    <ion-select v-model="selectedSellerType">
      <ion-select-option value="dominant">Dominant (D)</ion-select-option>
      <ion-select-option value="initiativ">Initiativ (I)</ion-select-option>
      <ion-select-option value="stetig">Stetig (S)</ion-select-option>
      <ion-select-option value="gewissenhaft"
        >Gewissenhaft (G)</ion-select-option
      >
    </ion-select>
  </ion-item>

  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button expand="full" color="primary">Schnelltest</ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="full" color="primary" router-link="verify">Verifizieren</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  components: {
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },

  props: [
    "title",
    "explaination",
  ],
  
}
</script>