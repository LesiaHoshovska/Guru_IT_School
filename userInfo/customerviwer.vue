<template>
    <div>
        <customer-card v-model="name" 
        :customer-phone-number.sync="phoneNumber"
        :customer-age.sync="age"/>

        


    </div>
</template>

<script>
import { CustomerCard } from "./customercard/customercard.vue";
    export default {
        name: 'CustomerViwer',
        components: {CustomerCard},
        data() {
            return {
                name: "John",
                age: 25,
                phoneNumber: null
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>