<template>
  <div>
    <button @click="getPrediction">Get prediction</button>
    <label>
      <input type="text" :value="prediction" />
    </label>
  </div>
</template>


<script>
export default {
  name: "Predicter",
  data() {
    return {
      prediction: "",
      predictionArr: [
        "be yourself",
        "Everything goes by",
        "You are amazing",
        "Goog luck",
        "Dont worry, be happy!!!",
      ],
    };
  },
  methods: {
    getPrediction() {
      const predictionNumber =
        1 + (Math.floor(Math.random() * this.predictionArr.length));
      for (let i = 0; i < this.predictionArr.length; i++) {
        if (predictionNumber === i) {
          return (this.prediction = this.predictionArr[i]);
        }
      }
    },
  },
};
</script>
