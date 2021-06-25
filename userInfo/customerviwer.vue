<template>
<div>
    <customer-card  v-model="name" 
        :customer-phone-number.sync="phoneNumber"
        :customer-age.sync="age"/>
        <div>
            Customer name: {{name}}
        </div>
        <div>
            Customer phone number: {{phoneNumber}}
        </div>
        <div>
            Customer age {{age}}
        </div>

</div>
  
       
</template>

<script>
import customerCard from './customerCard/customerCard.vue'
export default {
    name: 'ShopCustomersApp',
  components: { customerCard },
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
