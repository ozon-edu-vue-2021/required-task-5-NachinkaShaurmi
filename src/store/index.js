import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import randomImg from "@/helpers/randomImg";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    foods: [],
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
      state.foods = payload.map((el) => ({
        ...el,
        isFavorite: false,
        inCart: false,
        imgPath: randomImg(),
      }));
    },
    REMOVE_FROM_CART(state, payload) {
      state.inCart = state.inCart.filter((el) => el.uid !== payload);
    },
    ADD_TO_CART(state, payload) {
      const alreadyInCart = state.inCart.some((el) => el.uid === payload.uid);
      if (alreadyInCart)
        state.inCart = state.inCart.map((el) => {
          if (el.uid === payload.uid) el.count = payload.count;
          return el;
        });
      else state.inCart = [...state.inCart, payload];
    },
    TOGGLE_TO_FAVORITES(state, payload) {
      state.foods = state.foods.map((el) => {
        if (el.uid === payload) el.isFavorite = !el.isFavorite;
        return el;
      });
    },
  },
  getters: {
    getFullCost: (state) => {
      return state.inCart.length
        ? state.inCart.reduce((acc, el) => acc + el.count * el.price, 0)
        : 0;
    },
    getFavorites: (state) => {
      return state.foods.filter((el) => el.isFavorite);
    },
  },
});
