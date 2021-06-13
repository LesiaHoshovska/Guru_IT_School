<template>
  <div>
    <img :src="getWord" />
    <p>{{ getWord }}</p>
    <label>
      Ваш переклад:
      <input type="text"  v-model="userWord"/>
      <button @click="compareTranslate">Перевірити</button>
    </label>
    <span v-if="compareTranslate">Добре. Молодець!</span>
    <span v-else>Невірно, спробуйте ще раз</span>
  </div>
</template>

<script>
export default {
  name: "EnglishTraineer",
  props: {
    traineerArr: {
      type: Array,
      default: () => {},
    },
    data() {
      return {
        imgSrc: "",
        wordForTranslate: "",
        userWord: ""
      };
    },
    computed: {
      getWord() {
        const wordNumber = Math.floor(Math.random() * this.traineerArr + 1);
        this.imgSrc = this.traineerArr[wordNumber].imgSrc;
        this.wordForTranslate = this.traineerArr[wordNumber].word;
      },
    },
  },
  methods: {
      compareTranslate() {
          return this.userWord.toLowerCase()===this.wordForTranslate.toLowerCase()?true:false
      }
  },
  
};
</script>

<style lang="scss" scoped>
</style>