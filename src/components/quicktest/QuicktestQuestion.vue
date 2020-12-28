<template>
  <ion-list>
    <ion-radio-group v-for="question in questions" :key="question.id" v-model="responses[question.id]">
      <ion-list-header>
        <ion-label style="font-size: 18px;">{{ question.question }}</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label class="ion-text-wrap">{{ question.answer1 }}</ion-label>
        <ion-radio slot="start" value="d"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label class="ion-text-wrap">{{ question.answer2 }}</ion-label>
        <ion-radio slot="start" value="i"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label class="ion-text-wrap">{{ question.answer3 }}</ion-label>
        <ion-radio slot="start" value="s"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label class="ion-text-wrap">{{ question.answer4 }}</ion-label>
        <ion-radio slot="start" value="g"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
  <p>{{responses["q2"]}}</p>
</template>

<script>
import { IonList, IonItem, IonLabel, IonListHeader, IonRadio, IonRadioGroup } from "@ionic/vue";

export default {
  props: ["questions"],
  components: {
    IonList, IonItem, IonLabel, IonListHeader, IonRadio, IonRadioGroup
  },
  data () {
    return {
      responses: [],
    }
  },
}
</script>