<template>
    <div>
        <div>
            <span>{{status}}</span>
        </div>
        <div>
            <span>{{cardNumber}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TaskStatus",
        props: {
            status: {
                type: String,
                default: 'in-Progress'
            },
            cardNumber: {
                type: Number,
                default: 1
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>