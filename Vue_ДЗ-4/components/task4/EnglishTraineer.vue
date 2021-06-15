<template>
  <div>
    <img :src="traineerArr[0].imgSrc" />
    <p>{{ traineerArr[0].wordEng }}</p>
    <div v-if="translation">
      <label>
        Ваш переклад:
        <input type="text" v-model="userWord" />
        <button @click="compareTranslate">Перевірити</button>
      </label>
      <span v-if="translation === true">Добре. Молодець!</span>
      <span v-else>Невірно, спробуйте ще раз</span>
    </div>
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
        userWord: null,
        translation: null,
      };
    },
  },
  methods: {
    compareTranslate() {
      if (
        this.userWord.toLowerCase() === this.traineerArr.wordUkr.toLowerCase()
      ) {
        return (this.translation = true);
      } else {
        return (this.translation = false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
