import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    foods: [],
  },
  actions: {
    loadFoods({ commit }) {
      axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((r) => r.data)
        .then((foods) => {
          commit("SET_FOODS", foods);
        });
    },
  },
  mutations: {
    SET_FOODS(state, foods) {
      state.foods = foods;
    },
  },
});
