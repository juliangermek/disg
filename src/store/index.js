import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      questions: [

        {id: "q1", question: "Wenn diese Person spricht, wirkt sie...", answer1: "selbstbewußt", answer2: "laut", answer3: "verhalten", answer4: "emotionslos"},
        {id: "q2", question: "Wenn Sie mit dieser Person zu Beginn Ihres Besuches smalltalken...", answer1: "läßt sie es kurz zu, bricht aber schnell ab und kommt zur Sache", answer2: "steigt sich gerne darauf ein und stellt sich dar", answer3: "läßt sie es höflichkeitshalber zu, bringt aber wenig eigene Beiträge", answer4: "steigt sie i.d.R. nicht darauf ein und signalisiert, daß sie zur Sache kommen möchte"},
        {id: "q3", question: "Wenn diese Person zuhört, verhält sie sich...", answer1: "eher ungeduldig und unterbricht andere", answer2: "freundlich, opti-mistisch; unterbricht oft, bringt immer wieder eigene Beiträge ein", answer3: "ruhig und ist ein geduldiger Zuhörer", answer4: "als guter Zuhörer und gibt diplomatische Antworten"},
        {id: "q4", question: "Wenn diese Person Fragen stellt, geht es ...", answer1: "hauptsächlich um das Wesentliche", answer2: "oft um eigene und die Gefühle andere", answer3: "meistens um „Wie“-Fragen", answer4: "meistens um weitere bzw. tiefergehende Informationen"},
        {id: "q5", question: "Bei längeren Besprechungen diskutiert diese Person...", answer1: "ausdauernd und hart", answer2: "lebhaft und emotional", answer3: "ausgleichend und entgegenkommend", answer4: "diszipliniert und sorgfältig"},
        {id: "q6", question: "Mit Personen aus ihrem eigenen Umfeld spricht diese Person...", answer1: "knapp und entschlossen", answer2: "offen, tempramentvoll und unbeschwert", answer3: "ausgeglichen und rücksichtsvoll", answer4: "diplomatisch und sorgfältig"},
        {id: "q7", question: "Wenn Sie Gestik und Mimik dieser Person beobachten, sehen Sie, daß sie...", answer1: "sich viel bewegt, fordernder Blick", answer2: "viel mit den Händen gestikuliert, animierender Gesichtsausdruck", answer3: "freundlichen Augenkontakt mit Ihnen bewahrt, warmer Gesichtsausdruck", answer4: "in ihrer Ausdrucksweise eher zurückhaltend ist, Pokerface"},
        {id: "q8", question: "Wenn Sie beaobachten, wie diese Person mit anderen umgeht, merken Sie, daß sie...", answer1: "versucht, die Führung zu übernehmen oder das Sagen zu haben", answer2: "ihre Gefühle offen zum Ausdruck bringt und schnell Kontakt findet", answer3: "sehr freundlich und nett ist", answer4: "viel beobachtet und zuhört, ohne die anderen zu unterbrechen"},
        {id: "q9", question: "Wenn diese Person mit Schwierigkeiten konfrontiert wird, reagiert sie ...", answer1: "unter Umständen schnell aggressiv und sucht Schuldige", answer2: "aktiv und will wissen, ob etwas davon auf sie zurückfallen könnte", answer3: "verunsichert und versucht, wieder eine stabile Situation herzustellen", answer4: "eher ängstlich und versucht, die Auswirkungen der Probleme zu analysieren"},
        {id: "q10", question: "Wenn diese Person zu Menschen/Ereignissen befragt wird, verhält sie sich ...", answer1: "unruhig, weiter jetzt!", answer2: "begeisternd, steigt darauf ein", answer3: "entspannt, beteiligt sich höflichkeitshalber", answer4: "distanziert, kommt wieder rasch zur Sache"},
        {id: "q11", question: "Wenn auf diese Person neue Aufgaben zukommen, dann ...", answer1: "kommt sie rasch zu Lösungen", answer2: "bevorzugt sie spontane Lösungen", answer3: "ist sie sehr kooperativ und bereitwillig", answer4: "ist sie eher vorsichtig und nachfragend"},
        {id: "q12", question: "Wenn auf diese Person eine Entscheidung treffen soll, erleben Sie sie eher ...", answer1: "schnell, direkt", answer2: "spontan, etwas unüberlegt", answer3: "langsam, nochmal überschlafen", answer4: "zögerlich, nur nichts falsch machen"},
        {id: "q13", question: "Meine allgemeine Wahrnehmung dieser Person ist...", answer1: "wirkt unter Druck, verbreitet Hektik, will dominieren", answer2: "wirkt locker, immer ein Scherz auf der Lippe, redet viel", answer3: "wirkt entspannt, zurückhaltend, muß Vieles aus der Nase ziehen", answer4: "wirkt sachlich, diszanziert, will wenig persönlichen Kontakt, etwas unterkühlt"},
        
      ],
      sellerType: "",
      buyerType: "",
    }
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    sellerType(state) {
      return state.sellerType;
    },
    buyerType(state) {
      return state.buyerType;
    },
  },
  mutations: {
    updateType(state, updateData) {
      if (updateData.role == "seller") {
        state.sellerType = updateData.type;
      }
      if (updateData.role == "buyer") {
        state.buyerType = updateData.type;
      }
    }
  },
  actions: {
    updateType(context, updateData) {
      context.commit("updateType", updateData); // Place to store in backend server
    }
  },
});

export default store;