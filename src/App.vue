<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$store.dispatch("loadFoods");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 0 12px;
  box-sizing: border-box;
}

body {
  margin: 20px auto;
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - 40px);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
