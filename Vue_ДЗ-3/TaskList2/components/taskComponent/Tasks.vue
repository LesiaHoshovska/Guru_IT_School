<template>
    <div class="container">
        <div><p>{{taskName}}</p></div>
        <div>
            <button><img :src="editLink" alt="edit"></button>
            <button><img :src="deleteLink" alt="delete"></button>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        props: {
            taskName: {
                type: String,
                default: 'No task'
            },
            editLink: {
                type: String,
                default: "https://img.icons8.com/cotton/2x/edit.png"
            },
            deleteLink: {
                type: String,
                default: "https://img.icons8.com/cotton/2x/delete-sign--v2.png"
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    display: inline-flexbox;
}
img{
    height: 20px;
    width: 20px;
}
</style>