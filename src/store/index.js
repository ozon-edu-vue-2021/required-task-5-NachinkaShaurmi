import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    foods: [],
    favorite: [],
    inCart: [],
  },
  actions: {
    loadFoods({ commit }) {
      axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((r) => r.data)
        .then((foods) => {
          commit("SET_FOODS", foods);
        })
        .catch((e) => {
          console.warn(e);
        });
    },
  },
  mutations: {
    SET_FOODS(state, payload) {
      state.foods = payload;
    },
    REMOVE_FROM_CART(state, payload) {
      state.inCart = state.inCart.filter((el) => el.id !== payload);
    },
    ADD_TO_CART(state, payload) {
      const alreadyInCart = state.inCart.some((el) => el.id === payload.id);
      console.log(alreadyInCart);
      if (alreadyInCart)
        state.inCart = state.inCart.map((el) => {
          if (el.id === payload.id) el.count = payload.count;
          return el;
        });
      else state.inCart = [...state.inCart, payload];
    },
  },
  getters: {
    getFullCost: (state) => {
      return state.inCart.length
        ? state.inCart.reduce((acc, el) => acc + el.count * el.price, 0)
        : 0;
    },
  },
});
