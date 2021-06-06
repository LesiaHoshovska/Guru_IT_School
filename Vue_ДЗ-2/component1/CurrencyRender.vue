<template>
<div>
    <table class="table">
        <tr>
            <td>Назва валюти</td>
            <td>Курс валюти у гривнях</td>
        </tr>
        <tr>
            <td>{{currencyName}}</td>
            <td>{{currencyValue}}</td>
        </tr>
    </table>
</div>
  
</template>

<script>
export default {
    name: 'CurrencyRender',
    props: {
        currencyName: {
            type: String,
            default: 'no currency'
        },
        currencyValue: {
            type: Number,
            default: null
        } 
    },
   
}
</script>

<style lang="css">
.table{
   border: 3px solid black;
}
</style>