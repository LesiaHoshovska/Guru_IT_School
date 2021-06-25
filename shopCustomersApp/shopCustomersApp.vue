<template>
<div>
    <div>
        <customer-card  v-model="name" 
        :customer-phone-number.sync="phoneNumber"
        :customer-age.sync="age"/>
    </div>    
        
        <div>
            <customers-list :name="name"
            :age="age"
            :phoneNumber="phoneNumber"/>
        </div>

</div>
  
       
</template>

<script>
import customerCard from './customerCard/customerCard.vue'
import CustomersList from './customersList/customersList.vue'
export default {
    name: 'ShopCustomersApp',
  components: { customerCard, CustomersList },
  data() {
            return {
                name: "John",
                age: 25,
                phoneNumber: null
            }
        },

}
</script>

<style>

</style>
