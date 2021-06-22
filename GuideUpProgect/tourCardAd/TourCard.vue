<template>
    <div>
        <div><img :src="imgSrc" alt="Everest Base camp"></div>
        <div>
            <h1>{{tourTittle}}</h1>
        </div>
        <div>
            <h1>{{toursDaysAmount}}</h1>
        </div>
        <div>
            <h1>{{toursTotalDistance}}</h1>
        </div>
        <div>
            <h1>{{toursPrice}}</h1>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'TourCard',
        props: {
            imgSrc: {
                type: String,
                default: 'https://extremeguide.pro/wp-content/uploads/2018/12/BXiM0Jy2AY8.jpg' 
            },
            tourTittle: {
                type: String,
                default: 'Trekking to Everest base Camp'
            },
            toursDaysAmount:{
                type: Number,
                default: 14
            },
            toursTotalDistance:{
                type: Number,
                default: 90
            },
            toursPrice: {
                type: String,
                default: '950$'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>