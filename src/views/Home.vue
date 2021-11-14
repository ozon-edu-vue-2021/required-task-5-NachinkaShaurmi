<template>
  <div>
    <Header title="Catalog" path="/cart" linkTitle="to Cart" />
    <div class="cards">
      <Card
        v-for="food in foods"
        :key="food.uid"
        :title="food.dish"
        :price="food.id"
        :id="food.uid"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Card,
    Header,
  },
  props: [],
  computed: mapState(["foods"]),
  methods: {},
};
</script>

<style scoped>
.cards {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
