<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>№ п.п</th>
                    <th>ПІБ</th>
                </tr>
            </thead>
            <tbody class="studentList">
                <tr v-for="student in studentsList" :key="student.id">
                    <td>{{student.number}}</td>
                    <td>{{student.name}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'StudentList',
        props: {
            studentsList: {
                type: Array,
                default: ()=>[]
            },
        },
    }

   
    
</script>

<style lang="css" scoped>
.studentList{
    text-align: left;
}
table{
    border: 10px, solid;
    border-color: black;
    
}
</style>