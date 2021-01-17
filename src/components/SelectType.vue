<template>
  <h4>{{ title }}</h4>

  <ion-item class="selectBackground">
    <ion-label position="floating">Verkäufertyp</ion-label>
    <ion-select
      v-bind:class="{
        dominant: selectedType == 'dominant',
        initiativ: selectedType == 'initiativ',
        stetig: selectedType == 'stetig',
        gewissenhaft: selectedType == 'gewissenhaft',
      }"
      v-model="selectedType"
    >
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
        <ion-button
          expand="full"
          color="light"
          :router-link="'/quicktest/' + role"
          >Schnelltest</ion-button
        >
      </ion-col>
      <ion-col>
        <ion-button expand="full" color="light" router-link="verify"
          >Verifizieren</ion-button
        >
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

  props: ["title", "role", "passedSelectedType"],
  data() {
    return {
      selectedType: this.passedSelectedType,
    };
  },
  emits: ["update:passedSelectedType"],
  watch: {
    selectedType() {
      // Update store
      var role = this.role;
      var type = this.selectedType;
      const updateData = {
        role: role,
        type: type,
      };
      this.$store.dispatch("updateType", updateData);
    },
    passedSelectedType() {
      this.selectedType = this.passedSelectedType;
    },
  },
};
</script>

<style scoped>
/* Check for more advanced styling: https://ionicframework.com/docs/api/select-option */
.selectBackground {
  --background: #f2f2f2;
}

.dominant::part(text) {
  color: rgb(228,30,66);
}
.initiativ::part(text) {
  color: rgb(254,220,0);
}
.stetig::part(text) {
  color: rgb(0,146,91);
}
.gewissenhaft::part(text) {
  color: rgb(0,110,179);
}
</style>
