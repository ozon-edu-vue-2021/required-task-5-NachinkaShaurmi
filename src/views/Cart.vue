<template>
  <div>
    <Header :title="'Cart'" :path="'/'" :linkTitle="'to Catalog'" />
    <ul class="cartList" v-if="inCart.length">
      <li class="listEl" v-for="food in inCart" :key="food.id">
        <span class="listEl__title">{{ food.title }}:</span>
        <input class="cart__count" v-model="food.count" type="number" min="1" />
        x {{ food.price }} $
        <button class="button" @click="remove(food.uid)">remove</button>
      </li>
    </ul>
    <div v-else>
      <h3>Cart is empty</h3>
    </div>
    <h2>Total {{ getFullCost }} $</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "Cart",
  components: {
    Header,
  },
  props: [],
  computed: {
    ...mapState(["inCart"]),
    ...mapGetters(["getFullCost"]),
  },
  methods: {
    remove(id) {
      this.$store.commit("REMOVE_FROM_CART", id);
    },
  },
};
</script>

<style scoped>
.listEl {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart__count {
  width: 40px;
}
.listEl__title {
  width: 320px;
}
</style>
