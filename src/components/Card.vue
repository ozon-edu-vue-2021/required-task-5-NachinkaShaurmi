<template>
  <div class="card">
    <img
      class="card__img"
      :src="`./images/${imgPath}.webp`"
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
    </div>
  </div>
</template>

<script>
import randomImg from "@/helpers/randomImg";

export default {
  name: "Card",
  data: () => ({
    imgPath: randomImg(),
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
  },
  computed: {},
  methods: {
    add() {
      this.$store.commit("ADD_TO_CART", {
        id: this.id,
        title: this.title,
        price: this.price,
        count: this.count,
      });
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
  display: flex;
  align-items: center;
}

.input-wrapper__label {
  margin-right: 20px;
}

.card__count {
  width: 40px;
}

.card__first-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
