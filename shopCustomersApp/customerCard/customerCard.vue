<template>
  <div>
    <div>
      <label>
      Name 
      <input type="text" :value="value"
      @input="$emit('input', $event.target.value)">
    </label>
    <label>
      Phone Number 
      <input type="number" :min="0"
      :value="customerPhoneNumber"
      @input="$emit('update:customerPhoneNumber', $event.target.value)"> 
    </label>
    <label>
      Age 
      <input type="number"
      :value="customerAge"
      @input="$emit('update:customerAge', $event.target.value)"
      >
    </label>
    </div>
   </div>
</template>

<script>
export default {
name: 'CustomerCard',
props: {
      value: {
        type: String,
        default: 'No name'
      },
      customerPhoneNumber:{
        type: Number,
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