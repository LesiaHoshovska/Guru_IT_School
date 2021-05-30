<template>
  <div>
    <label>
      Ваше слово
      <input type="text" v-model="wordForTranslate" /> </label
    ><br />
    <label>
      Переклад
      <input type="text" v-model="translateWord" /> </label
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
    };
  },
  methods: {
    getTranslation() {
      let translationArr = [
        { ukrWord: "яблуко", englWord: "apple" },
        { ukrWord: "суниця", englWord: "strawberry" },
        { ukrWord: "персик", englWord: "peach" },
        { ukrWord: "груша", englWord: "pear" },
        { ukrWord: "слива", englWord: "plum" },
        { ukrWord: "малина", englWord: "raspberry" },
      ];
      for (let i = 0; i < translationArr.length; i++) {
        if (this.wordForTranslate === translationArr[i].ukrWord) {
          return (this.translateWord = translationArr[i].englWord);
        } else {
          return (this.translateWord =
            "Sorry, we haven't this word in vocabulary");
        }
      }
    },
  },
};
</script>
