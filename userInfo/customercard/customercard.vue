<template>
  <div>
    <div>
      <label>
      Name 
      <input type="text" :value="customerName"
      @input="$emit('input', $event.target.value)">
    </label>
    <label>
      Phone Number 
      <input type="number" 
      :value="customerPhoneNumber"
      @input="$emit('update: customerPhoneNumber', $event.target.value)"> 
    </label>
    <label>
      Age 
      <input type="number"
      :value="customerAge"
      @input="$emit('update: customerAge', $event.target.value)"
      >
    </label>
    </div>
   </div>
</template>

<script>
export default {
name: 'CustomerCard',
props: {
      customerName: {
        type: String,
        default: 'No name'
      },
      customerPhoneNumber:{
        type: String,
        default: null
      },
      customerAge: {
        type: Number,
        default: 25
      }
    },
}
</script>

<style>

</style>
