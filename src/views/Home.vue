<template>
  <div>
    <Header
      :title="'Catalog'"
      :secondButton="true"
      :path="'/cart'"
      :path2="'/favorites'"
      :linkTitle="'to Cart'"
      :linkTitle2="'to Favorites'"
    />
    <div class="cards">
      <Card
        v-for="food in foods"
        :key="food.uid"
        :title="food.dish"
        :price="food.id"
        :id="food.uid"
        :path="food.imgPath"
        :isFavorite="food.isFavorite"
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

<style>
.cards {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
