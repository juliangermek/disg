<template>
  <div v-bind:class="{ isHidden: inEvaluation }">
    <p>
      Wählen Sie immer die am meisten passende Auswahlmöglichkeit. Sollten Sie
      sich äußerst unsicher sein, können Sie eine Frage auch auslassen. Das
      Testergebnis wird jedoch mit jeder bearbeiteten Frage genauer.
    </p>

    <form @submit.prevent="submitForm">
      <ion-list>
        <ion-radio-group
          v-for="question in questions"
          :key="question.id"
          v-model="responses[question.id]"
        >
          <ion-list-header>
            <ion-label style="font-size: 18px;">{{
              question.question
            }}</ion-label>
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
  </div>

  <div v-bind:class="{ isHidden: !inEvaluation }">
    <h3>Ergebnisse</h3>
    <ion-list>
      <ion-item> Dominant: {{ counter["d"] }} </ion-item>
      <ion-item> Initiativ: {{ counter["i"] }} </ion-item>
      <ion-item> Stetig: {{ counter["s"] }} </ion-item>
      <ion-item> Gewissenhaft: {{ counter["g"] }} </ion-item>
    </ion-list>

    <div v-if="max_keys.length == 1">
      <p>
        Das Testergebnis ist eindeutig. Drücken Sie hier, um
        <b>{{ max_keys_formatted }}</b> als Typ zu übernehmen.
      </p>
      <ion-button @click="confirmResult()">{{ max_keys_formatted }} übernehmen</ion-button>
    </div>
    <div v-else>
      <p>
        Das Testergebnis ist nicht eindeutig. Für diese Typen sprechen gleich
        viele Angaben: <b>{{ max_keys_formatted }}</b
        >.
      </p>
      <p>
        Gehen Sie zurück und wählen Sie den Typen dieser Auswahl, der Ihnen am
        passensten erscheint. Über den Button 'Verifizieren' erhalten Sie
        hierfür eine Hilfestellung.
      </p>
    </div>
  </div>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonButton,
} from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonRadio,
    IonRadioGroup,
    IonButton,
  },
  props: ["type"],
  data() {
    return {
      questions: this.$store.getters.questions,
      responses: {},
      counter: {},
      max_keys: [],

      inEvaluation: false,
    };
  },
  computed: {
    max_keys_formatted() {
      var formatted = [];

      this.max_keys.forEach(function(item) {
        switch (item) {
          case "d":
            formatted.push("Dominant");
            break;
          case "i":
            formatted.push("Initiativ");
            break;
          case "s":
            formatted.push("Stetig");
            break;
          case "g":
            formatted.push("Gewissenhaft");
            break;
          default:
        }
      });

      return formatted.join(", ");
    },
  },
  methods: {
    evaluate: function() {
      // Get responses and count them
      var responses = Object.values(this.responses);
      this.counter = this.count_responses(responses);
      var max_keys = this.get_max_types(this.counter);
      this.max_keys = max_keys;

      // Hide form and show results
      this.inEvaluation = true;
    },
    count_responses: function(results) {
      var counter = { d: 0, i: 0, s: 0, g: 0 };
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

      return max_keys;
    },
    confirmResult() {
      var type = this.type;
      var value = this.max_keys_formatted.toLowerCase();
      const updateData = {
        type: type,
        value: value,
      }

      this.$store.dispatch("updateType", updateData);
      this.$router.replace("/home") //replace: no going back (as against 'push')
    },
  },
};
</script>

<style scoped>
.isHidden {
  display: none;
}
</style>
