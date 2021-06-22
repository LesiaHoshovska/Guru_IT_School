<template>
  <div class="container">
    <div>
      <game-field
        :firstNumber="firstNumber"
        :secondNumber="secondNumber"
        :thirdNumber="thirdNumber"
      />
    </div>

    <div class="gamers">
      <gamer-card
        v-for="gamer in gamersArray"
        :key="gamer.id"
        :gamerNumber="gamer.number"
        @madeStep="checkNumber"
        
      />
    </div>
    <br /><br />
    <div>
      <button :value="generateNumberArr">Start Game</button>
    </div>
  </div>
</template>

<script>
import GameField from "./gameField/GameField.vue";
import GamerCard from "./Gamer/GamerCard.vue";
export default {
  name: "Game",
  components: {
    GameField,
    GamerCard,
  },
  data() {
    return {
      gamersArray: [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
      ],
      firstNumber: null,
      secondNumber: null,
      thirdNumber: null,
      numberArr: [],
    };
  },

  methods: {
    generateNumberArr() {
      for (let i = 0; i < 4; i++) {
        this.numberArr.push(Math.floor(Math.random) * 10);
        console.log(this.numberArr);
      }
    },
    checkNumber(gamerNumber) {
      if (this.numberArr.includes(gamerNumber)) {
        // this.firstNumber = gamerNumber;
      }
    },
    

  },
};
</script>

<style lang="css" scoped>
.gamers {
  display: inline-flex;
}
.containerP {
  display: inline-block;
}
</style>