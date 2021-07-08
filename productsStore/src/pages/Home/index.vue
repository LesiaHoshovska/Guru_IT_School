<template>
  <div>
    <div>Products List</div>
    <div v-for="product in getProductsList" :key="product.id">
      {{ product.tittle }} - {{ product.price }} - {{ product.description }}
      <img :src="product.imgSrc" />
      <button @click="onEdit(product.id)">Edit</button>
      <button @click="onDelete(product.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["getProductsList"]),
  },
  methods: {
    ...mapActions(["deleteProduct"]),
    onEdit(id) {
      this.$router.push({ name: "edition", params: { product_id: id } });
    },
    onDelete(id){
        this.deleteProduct(id)
    }
  },
};
</script>

<style lang="css" scoped>
img {
  height: 75px;
  width: 75px;
}
</style>
