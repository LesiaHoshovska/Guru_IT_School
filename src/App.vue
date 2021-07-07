<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/edit">Edit Product</router-link>
      <router-link to="/add">Add Product</router-link>
      <router-link to="/productsList">Product list</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
