<template>
  <ion-item>
    <ion-label position="floating">Select</ion-label>
    <ion-select>
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';

export default{
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
};
</script>