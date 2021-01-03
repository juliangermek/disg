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
  <p>counter: {{counter}}</p>
  <p>max_keys: {{max_keys}}</p>

  <h3>Ergebnisse</h3>
  <ion-list>
    <ion-item>
      Dominant: {{counter["d"]}}
    </ion-item>
    <ion-item>
      Initiativ: {{counter["i"]}}
    </ion-item>
    <ion-item>
      Stetig: {{counter["s"]}}
    </ion-item>
    <ion-item>
      Gewissenhaft: {{counter["g"]}}
    </ion-item>
  </ion-list>

  <div v-if="max_keys.length == 1">
    <p>Das Testergebnis ist eindeutig. Drücken Sie hier, um den entsprechenden Typ zu übernehmen.</p>
    <ion-button>{{ max_keys }} übernehmen</ion-button>
  </div>
  <div v-else>
    <p>Das Testergebnis ist nicht eindeutig. Für diese Typen sprechen gleich viele Angaben: {{ max_keys }}</p>
    <p>{{ max_keys }}</p>
  </div>
  
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
      counter: {},
      max_keys: [],
    }
  },
  methods: {
    evaluate: function() {
      console.log("now in evaluate function");

      var responses = Object.values(this.responses);
      this.counter = this.count_responses(responses);
      var {max_keys, max_value} = this.get_max_types(this.counter);
      this.max_keys = max_keys;

      console.log("max_keys: ", max_keys, "max_value: ", max_value);
    },
    count_responses: function(results) {
      var counter = {"d":0, "i":0, "s":0, "g":0};
      for (let i = 0; i < results.length; i++) {
        counter[results[i]]++;
      }

      return counter;
    },
    get_max_types: function(counter) {
      // Get max value
      var values = Object.values(counter);
      var max_value = Math.max(...values);

      // Add keys if max_value to array
      var max_keys = [];
      var keys = Object.keys(counter);
      for (let i = 0; i < keys.length; i++) {
        if (counter[keys[i]] == max_value) {
          max_keys.push(keys[i]);
        }
      }

      return {"max_keys": max_keys, "max_value": max_value};
    }
  },
}

// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }


// const map = {"first" : "2", "second" : "2"};
// console.log(getKeyByValue(map,"2"));

</script>