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
      
      switch (this.wordForTranslate) {
        case "яблуко":
          return (this.translateWord = "apple");

        case "скрипка":
          return (this.translateWord = "violin");

        case "огірок":
          return (this.translateWord = "cucumber");

        default:
        return this.translateWord = "Unfortunatelly, we haven't this word in our dictionary";
          
      }
    },
  },
};
</script>