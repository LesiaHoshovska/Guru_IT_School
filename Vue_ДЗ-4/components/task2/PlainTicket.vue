<template>
    <div>
        <label >
            Choose ticket class:
            <select v-model="ticketClass" >
                <option >{{business}}</option>
                <option >{{economy}}</option>

            </select>
            
        </label>
        <br>
        <label v-if="business">
            Choose koniak and the newspaper
            <select>
                <option >3 star</option>
                <option >4 star</option>
                <option >5 star</option>
            </select>
            <br>
            <select >
                <option >Daily Telegraph</option>
                <option >New Yourk Times</option>
                <option >The Guardians</option>
            </select>
        </label>
        
        <label v-else>
            Choose chips and the beer
            <select >
                
                <option >Chips 1</option>
                <option >Chips 2</option>
                <option >Chips 3</option>
            </select>
            
            <select >
                
                <option >Beer 1</option>
                <option >Beer 2</option>
                <option >Beer 3</option>
            </select>
        </label>

    </div>
</template>

<script>
    export default {
        name: 'PlainTicket',
        
        data() {
            return {
                ticketClass: '',
                business: 'business',
                economy: 'economy'
            }
        },
        computed: {
            businessClass() {
                
            }
        },


    }
</script>

<style lang="scss" scoped>

</style>
