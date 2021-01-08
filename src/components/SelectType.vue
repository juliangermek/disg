<template>
  <h4>{{ title }}</h4>

  <ion-item
    v-bind:class="{
      dominant: selectedType == 'dominant',
      initiativ: selectedType == 'initiativ',
      stetig: selectedType == 'stetig',
      gewissenhaft: selectedType == 'gewissenhaft',
    }"
  >
    <ion-label position="floating">Verkäufertyp</ion-label>
    <ion-select v-model="selectedType">
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
        <ion-button expand="full" color="primary" router-link="quicktest">Schnelltest</ion-button>
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
    "passedSelectedType",
  ],
  data() {
    return {
      selectedType: this.passedSelectedType,
    }
  },
  emits: [
    "update:selectedType"
  ],
  watch: {
    selectedTyp() {
      this.$emit("update:selectedType", this.selectedType);
    }
  },
  
}
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