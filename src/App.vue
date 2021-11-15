<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
  padding-right: calc(20px - (100vw - 100%));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.button {
  border: 1px #2c3e50 solid;
  border-radius: 5px;
  background-color: turquoise;
  padding: 4px 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.6s;
}

.button:hover {
  background-color: #aaffff;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style-type: none;
}

ul {
  padding-left: 12px;
}
</style>
