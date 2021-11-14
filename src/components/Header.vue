<template>
  <div class="header">
    <h2 class="title">{{ title }}</h2>
    <router-link :to="path" class="button">{{ linkTitle }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    path: {
      type: String,
      default: "/",
    },
    linkTitle: {
      type: String,
      default: "to Home",
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
}
.title {
  text-align: center;
}
</style>
