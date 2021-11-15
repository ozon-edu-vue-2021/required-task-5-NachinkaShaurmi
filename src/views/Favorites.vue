<template>
  <div>
    <Header :title="'Favorites'" :path="'/'" :linkTitle="'to Catalog'" />
    <div v-if="getFavorites.length" class="cards">
      <Card
        v-for="food in getFavorites"
        :key="food.uid"
        :title="food.dish"
        :price="food.id"
        :id="food.uid"
        :path="food.imgPath"
        :isFavorite="food.isFavorite"
      />
    </div>
    <div v-else>
      <h3>No favorite foods</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Favorites",
  components: {
    Header,
    Card,
  },
  computed: {
    ...mapGetters(["getFavorites"]),
  },
  methods: {},
};
</script>

<style scoped></style>
