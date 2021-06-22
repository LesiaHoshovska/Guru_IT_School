<template>
    <div>
        <div>
            Гравець 1
        </div>
        <div>
            <label>
                Цифра
                <input type="number" v-model="firstGamerNumber">
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
        data() {
            return {
                firstGamerNumber: null,
            }
        },
        methods: {
            makeStep() {
                
                
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>