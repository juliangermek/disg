<template>
  <form @submit.prevent="submitForm">
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

    <ion-button color="primary" @click="evaluate">Auswertung</ion-button>
  </form>
  <p>response q2: {{responses}}</p>
</template>

<script>
import { IonList, IonItem, IonLabel, IonListHeader, IonRadio, IonRadioGroup, IonButton, } from "@ionic/vue";

export default {
  components: {
    IonList, IonItem, IonLabel, IonListHeader, IonRadio, IonRadioGroup, IonButton,
  },
  data () {
    return {
      questions: this.$store.getters.questions,
      responses: {},
    }
  },
  methods: {
    evaluate: function() {
      console.log("now in evaluate function");
      var {max_key, max_value} = this.get_max(Object.values(this.responses));
      console.log(max_key, max_value);
    },
    get_max: function(arr) {
      var counter = {"d":0, "i":0, "s":0, "g":0};
      for (let i = 0; i < arr.length; i++) {
        counter[arr[i]]++;
      }
      console.log(counter);

      var keys = Object.keys(counter);
      var max_key = keys.reduce((a, b) => counter[a] > counter[b] ? a : b);

      var values = Object.values(counter);
      var max_value = Math.max(...values);

      return {"max_key": max_key, "max_value": max_value};
    }
  },
}

</script>