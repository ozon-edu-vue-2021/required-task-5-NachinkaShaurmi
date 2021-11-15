<template>
  <li>
    {{ title }}:
    <input class="cart__count" v-model="count" type="number" min="1" />
    x {{ price }} $
  </li>
</template>

<script>
export default {
  name: "CartElement",
  data: () => ({
    countInCart: {
      type: Number,
      default: this.count
    },
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
    count: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style></style>
