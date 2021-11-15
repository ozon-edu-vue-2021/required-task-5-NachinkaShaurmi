<template>
  <div class="card">
    <img
      class="card__img"
      :src="`./images/${path}.webp`"
      alt="food image"
      width="200"
    />
    <div class="card__first-line">
      <div class="card__price">{{ price }} $</div>
      <button class="button card__button" @click="add">+ Add</button>
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="input-wrapper">
      <label for="count" class="input-wrapper__label">Count</label>
      <input
        id="count"
        class="card__count"
        v-model="count"
        type="number"
        min="1"
      />
      <button class="button" :class="{ fav: isFavorite }" @click="toFavorite">
        add to Fav
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    count: 1,
  }),
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Default title",
    },
    price: {
      type: Number,
      default: 1000,
    },
    path: {
      type: String,
      default: "6123150777",
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    add() {
      this.$store.commit("ADD_TO_CART", {
        uid: this.id,
        title: this.title,
        price: this.price,
        count: this.count,
      });
    },
    toFavorite() {
      this.$store.commit("TOGGLE_TO_FAVORITES", this.id);
    },
  },
};
</script>

<style scoped>
.card {
  border: 2px #555 solid;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ccc;
}

.card__img {
  border-radius: 10px;
}

.input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__count {
  width: 40px;
}

.card__first-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fav {
  background-color: pink;
}
</style>
