<template>
  <div id="app">
    <log-smile :userDataArr="userDataArr"/>
    
    <br>
    <!-- <plain-ticket /> -->
    <br>
    <english-traineer 
    :traineerArr="traineerArr"/>
  </div>
  
</template>

<script>

import LogSmile from "./components/task1/LogSmile.vue";
// import PlainTicket from './components/task2/PlainTicket.vue';
import EnglishTraineer from './components/task4/EnglishTraineer.vue';

export default {
  name: "App",
  components: {
    LogSmile,
    
    // PlainTicket,
    EnglishTraineer,
  },
  data() {
    return {
       traineerArr: [{imgSrc: "https://media.bonaldo.com/wp-content/uploads/2020/05/28165048/bonaldo-tavolo-bigtable-stilllife-1.jpg", word: "table"},{imgSrc: "https://previews.123rf.com/images/valentinarr/valentinarr1405/valentinarr140500151/28192517-red-apple-fruit-with-leaf-isolated.jpg", word: "apple"},{imgSrc: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/KvgbdmY6MvPdLaa3dyVNGOw1.png?w=440", word: "flower"},{imgSrc: "https://image.shutterstock.com/image-photo/color-butterfly-isolated-on-white-260nw-570560131.jpg", word: "butterfly"}],
      userDataArr: [
        { id: 1, log:'Don', pass: "345d6" },
        { id: 2, log:'Nick', pass: "12pr" },
        { id: 3, log: 'Bob', pass:"l123h" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
