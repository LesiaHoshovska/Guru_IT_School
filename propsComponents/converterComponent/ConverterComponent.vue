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
    name: 'ConverterComponent',

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

<style>
.table{
   border: 20px, solid, black;

}
</style>
