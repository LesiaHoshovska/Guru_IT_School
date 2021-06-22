<template>
    <div class="container">
        <div>
            Число
        </div>
        <div class="numbersContainer">
            <div class="gameNumber">
            <span :value="firstNumber"></span>
        </div>
        <div class="gameNumber">
            <span :value="secondNumber"></span>
        </div>
        <div class="gameNumber">
            <span :value="thirdNumber"></span>
        </div>

        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: 'GameField',
        props: {
            firstNumber: {
                type: Number,
                default: null
            },
            secondNumber: {
                type: Number,
                default: null
            },
            thirdNumber: {
                type: Number,
                default: null
            }
        },
    }
</script>

<style lang="css" scoped>
.gameNumber{
    border: 2px solid black;
    height: 30px;
    width: 30px;
    background-color: red;
    
}
.numbersContainer{
    display: inline-flex;
}
.container{
    display: inline-flex;
}
</style>