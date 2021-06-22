<template>
    <div>
        <div>
            Гравець <span>{{gamerNumber}}</span>
        </div>
        <div>
            <label>
                Цифра
                <input type="number" v-model="gamerNumberInput">
            </label>
        </div>
        <div>
            <button @click="makeStep">Зробити хід</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'GamerCard',
        props: {
            gamerNumber: {
                type: Number,
                default: null
            },
        },
        data() {
            return {
                gamerStepNumber: null,
                gamerNumberInput: null
            }
        },
        
        methods: {
            makeStep() {
                this.gamerStepNumber = this.gamerNumberInput
                this.$emit('madeStep', this.gamerStepNumber)
                
            }
        },

    }
</script>

<style lang="css" scoped>


</style>