<template>
  <div>
      <div>
            Customer name: {{name}}
        </div>
        <div>
            Customer phone number: {{phoneNumber}}
        </div>
        <div>
            Customer age {{age}}
        </div>

  </div>
</template>

<script>
export default {
name: 'CustomersList',
props: {
    name: {
        type: String,
        default: 'No name'
    },
    phoneNumber: {
        type: Number,
        default: null
    },
    age: {
        type: Number,
        default: 25
    }
}
}
</script>

<style>

</style>