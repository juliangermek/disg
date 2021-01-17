import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      questions: [
        {
          id: "q1",
          question: "Frage 1",
          answer1: "Frage 1 - Antwort 1",
          answer2: "Frage 1 - Antwort 2",
          answer3: "Frage 1 - Antwort 3",
          answer4: "Frage 1 - Antwort 4",
        },
        {
          id: "q2",
          question: "Frage 2",
          answer1: "Frage 2 - Antwort 1",
          answer2: "Frage 2 - Antwort 2",
          answer3: "Frage 2 - Antwort 3",
          answer4: "Frage 2 - Antwort 4",
        },

        {
          id: "q3",
          question: "Frage 3",
          answer1: "Frage 3 - Antwort 1",
          answer2: "Frage 3 - Antwort 2",
          answer3: "Frage 3 - Antwort 3",
          answer4: "Frage 3 - Antwort 4",
        },
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