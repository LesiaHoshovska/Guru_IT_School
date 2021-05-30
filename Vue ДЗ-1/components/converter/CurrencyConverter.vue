<template>
  <div>
    <label>
      Гривні:
      <input type="number" v-model = "grn"/>
    </label>
    <label>
      <br />
      <label>
        Долари:
        <input type="text" :value = "doll" />
      </label>
      <br />
      <button @click="getDoll">Перевести</button>
    </label>
  </div>
</template>

<script>
export default {
    name: 'CurrencyConverter',  
    data() {
        return {
            grn: "",
            doll: 0,            
        }
    }, 
    methods: {
        getDoll() {
            const currencyRate = 28
            this.doll = parseFloat(this.grn)*currencyRate
        }
    }, 
}

</script>