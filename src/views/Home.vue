<template>
  <base-layout page-title="DISG - Das Ist Sehr Gut">
    <ion-content class="ion-padding">
      <!-- Verkäufertyp -->
      <h4>Verkäufertyp wählen</h4>
      <p>
        Wählen Sie hier den Verkäufertyp (Ihren Typ). Falls Sie unsicher sind,
        wählen Sie "Schnelltest". Um Ihren Typ zu verifizieren oder um generell
        mehr über DISG zu erfahren, wählen Sie "Verifizieren".
      </p>

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
            <ion-button expand="full" color="primary">Verifizieren</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      
    </ion-content>
  </base-layout>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonContent,
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
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      selectedSellerType: this.$store.getters.sellerType,
    };
  },
};
</script>

<style scoped>
/* Check for more advanced styling: https://ionicframework.com/docs/api/select-option */
.dominant {
  --background: var(--ion-color-danger);
  --color: var(--ion-color-danger-contrast);
}
.initiativ {
  --background: var(--ion-color-warning);
  --color: var(--ion-color-warning-contrast);
}
.stetig {
  --background: var(--ion-color-success);
  --color: var(--ion-color-success-contrast);
}
.gewissenhaft {
  --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
}
</style>
