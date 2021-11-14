<template>
  <div>
    <Header title="Cart" path="/" linkTitle="to Catalog" />
    <ul class="cartList" v-if="inCart.length">
      <li class="listEl" v-for="food in inCart" :key="food.id">
        {{ food.title }}:
        <input class="cart__count" v-model="food.count" type="number" min="1" />
        x {{ food.price }} $
        <button class="button" @click="remove(food.id)">remove</button>
      </li>
      <!-- <CartElement
        v-for="food in inCart"
        :key="food.id"
        :id="food.id"
        :title="food.title"
        :price="food.price"
        :count="food.count"
      /> -->
    </ul>
    <h2>Total {{ getFullCost }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
// import CartElement from "@/components/CartElement.vue";

export default {
  name: "Cart",
  components: {
    Header,
    // CartElement,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
