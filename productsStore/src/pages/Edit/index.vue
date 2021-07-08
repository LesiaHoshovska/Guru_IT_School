<template>
<div>
 <div>{{pageTittle}}</div>
 <div>
     <label>
         Product tittle 
         <input type="text" v-model="tittle">
     </label>
 </div>
 <div>
     <label>
         Product price 
         <input type="number" v-model="price">
     </label>
 </div>
 <div>
     <label>
         Product description 
         <input type="text" v-model="description">
     </label>
 </div>
 <div>
     <label>
         Product image 
         <input type="text" v-model="imgSrc">
     </label>
 </div>
 <div><button @click="onSave">{{btnTittle}}</button></div>
</div>
 
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
name: 'Edit',
data(){
    return{
        tittle: null,
        price: null,
        description: null,
        imgSrc: null,
        id: null
    }
},
computed: {
    ...mapGetters(['getProductById']),
    productId(){
        return this.$route.params.product_id
    },
    pageTittle(){
        return this.productId ? 'Edit product': 'Add product'
    },
    btnTittle(){
        return this.productId ? 'Save' : 'Add'
    }
},
watch:{
    productId(newValue){
        if(!newValue){
            this.tittle = null
            this.price = null 
            this.description = null 
            this.imgSrc = null 
            this.id = null

        }
    }
},
methods: {
    ...mapActions(['changeProduct', 'addProduct']),
    onSave(){
        if(this.productId){
            this.changeProduct({
                tittle: this.tittle,
                price: this.price,
                description: this.description,
                imgSrc: this.imgSrc,
                id: this.id
            })
        }else{
            this.addProduct({
                tittle: this.tittle,
                price: this.price,
                description: this.description,
                imgSrc: this.imgSrc
            })
        }
        this.$router.push({name: 'home'})
    }
},
mounted(){
    if(this.productId){
        const product = this.getProductById(this.productId)
        this.tittle = product.tittle 
        this.price = product.price 
        this.description = product.description 
        this.imgSrc = product.imgSrc 
        this.id = product.id
    }
}
}
</script>

<style>

</style>