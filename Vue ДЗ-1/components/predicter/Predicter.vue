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
    };
  },
  methods: {
    getPrediction() {
      let predictionArr = [
        "be yourself",
        "Everything goes by",
        "You are amazing",
        "Goog luck",
        "Dont worry, be happy!!!",
      ];
      const predictionNumber =
        1 + Math.floor(Math.random() * predictionArr.length);
      for (let i = 0; i < predictionArr.length; i++) {
        if (predictionNumber === i) {
          return (this.prediction = predictionArr[i]);
        }
      }
    },
  },
};
</script>