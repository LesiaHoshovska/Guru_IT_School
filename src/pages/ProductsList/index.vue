<template>
<div>
 <div>Products List</div>
 <div v-for="product in getProductsList" :key="product.id">
     {{product.tittle}} - {{product.price}} - {{product.description}}
     <button @click="onEdit(product.id)">Edit</button>
     <button @click="onDelete(product.id)">Delete</button>
     <button @click="onAdd(product.id)">Add</button>
 </div>
</div>
 
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
name: 'ProductsList',
computed: {
    ...mapGetters(['getProductsList'])
},
methods: {
    ...mapActions(['deleteProduct']),
onDelete(id){
    this.deleteProduct(id)
},
onEdit(id){
    this.$router.push({
        name: 'edit',
        params: {
            product_id: id
        }
    })
},
onAdd(id){
    this.$router.push({
        name: 'add',
        params: {
product_id: id
        }
    })
}
}

}
</script>

<style>

</style>