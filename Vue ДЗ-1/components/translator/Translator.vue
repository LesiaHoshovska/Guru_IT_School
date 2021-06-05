<template>
  <div>
    <label>
      Ваше слово
      <input type="text" v-model="wordForTranslate" /> </label
    ><br />
    <label>
      Переклад
      <input type="text" v-model="translateWord" /> </label    Ви тільки виводите переведене слово, тому достатньо односторонньої прив"язки даних <input type="text" :value="translateWord" />
      ><br />
    <button @click="getTranslation">Перекласти</button>
  </div>
</template>


<script>
export default {
  name: "Translator",
  data() {
    return {
      wordForTranslate: "",
      translateWord: "",
      translationArr: [
        { ukrWord: "яблуко", englWord: "apple" },
        { ukrWord: "суниця", englWord: "strawberry" },
        { ukrWord: "персик", englWord: "peach" },
        { ukrWord: "груша", englWord: "pear" },
        { ukrWord: "слива", englWord: "plum" },
        { ukrWord: "малина", englWord: "raspberry" },
      ]
    };
  },
  methods: {
    getTranslation() {
      
      for (let i = 0; i < this.translationArr.length; i++) {
        if (this.wordForTranslate === this.translationArr[i].ukrWord) {
          return (this.translateWord = this.translationArr[i].englWord);
        } else {
          return (this.translateWord =
            "Sorry, we haven't this word in vocabulary");
        }
      }
    },
  },
};
</script>
