<template>
<div>
     <table>
      <tr>
          <td>№ п.п</td>
          <td>ПІБ</td>
      </tr>
      <tr>
          <td>{{sequenceNumber}}</td>
          <td>{{studentName}}</td>
      </tr>
  </table>
</div> 
</template>

<script>
export default {
    name: 'StudentListComponent',
    props: {
        sequenceNumber: {
            type: Number,
            default: null
        },
        studentName: {
            type: String,
            default: "No name"
        }
    }
    }
</script>

<style>

</style>