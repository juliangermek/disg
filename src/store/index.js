import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      questions: [
        {
          id: "q1",
          question: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr?",
          answer1: "At vero eos et accusam et justo duo dolores et ea rebum.",
          answer2: "No sea takimata sanctus est Lorem ipsum dolor sit amet.",
          answer3: "Invidunt ut labore et dolore magna aliquyam erat.",
          answer4: "Sed diam nonumy eirmod tempor.",
        },
        {
          id: "q2",
          question: "q2",
          answer1: "q2a1",
          answer2: "q2a2",
          answer3: "q2a3",
          answer4: "q2a4",
        },

        {
          id: "q3",
          question: "q3",
          answer1: "q3a1",
          answer2: "q3a2",
          answer3: "q3a3",
          answer4: "q3a4",
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
      console.log("type: ", updateData.type);
      console.log("value: ", updateData.value);

      if (updateData.type == "seller") {
        console.log("now in seller");
        state.sellerType = updateData.value;
      }
      if (updateData.type == "buyer") {
        state.buyerType = updateData.value;
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