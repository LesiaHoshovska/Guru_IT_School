<template>
  <div>
    <div>Add Product</div>
    <div>
      <label>
        Product tittle
        <input type="text" v-model="tittle" />
      </label>
    </div>
    <div>
      <label>
        Product price
        <input type="number" v-model="price" />
      </label>
    </div>
    <div>
      <label>
        Product description
        <input type="text" v-model="description" />
      </label>
    </div>
    <div><button @click="onSave">Save</button></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddProduct",
  data() {
    return {
      tittle: null,
      price: null,
      description: null,
      id: null,
    };
  },
  computed: {
    ...mapGetters(["getProductById"]),
    productkId() {
      return this.$route.params.product_id;
    },
  },
  methods: {
...mapActions(['addProduct']),
onSave(){
    this.addProduct({
        tittle: this.tittle,
        price: this.price,
        description: this.description,
        id: this.productId
    })
}
  }
};
</script>

<style></style>
