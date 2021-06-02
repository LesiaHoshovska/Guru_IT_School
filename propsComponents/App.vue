<template>
  <div id="app">
    <converter-component
      v-for="(item, index) in currencyList"
      :key="index"
      :currency-name="item.currencyName"
      :currency-value="item.currencyValue"
    />
    <br><br><br>
    <student-list-component
    v-for="(item, index) in studentList" :key="index"
    :sequence-number = "item.sequenceNumber"
    :student-name = "item.studentName"/>
    <br><br><br>
    <NewsList/>

  </div>
</template>

<script>
import ConverterComponent from "./components/propsComponents/converterComponent/ConverterComponent";

import StudentListComponent from './components/propsComponents/studentListComponent/StudentListComponent.vue';

import NewsList from "./components/propsComponents/newsComponent/NewsList";

export default {
  name: "App",
  components: {
    ConverterComponent,
    StudentListComponent,
    NewsList 
  },
  data() {
    return {
      currencyList: [
        {
          id: 1,
          currencyName: "Долар",
          currencyValue: 28,
        },
        {
          id: 2,
          currencyName: "Євро",
          currencyValue: 33,
        },
      ],
      studentList: [
        {
          id: 1,
          sequenceNumber:1,
          studentName: "Іванов І.І."
        },
        {
          id: 2,
          sequenceNumber:2,
          studentName: "Петров П.П."
        },
        {
          id: 3,
          sequenceNumber:3,
          studentName: "Степанов С.С."
        },
        {
          id: 4,
          sequenceNumber:4,
          studentName: "Воронін А.С."
        },
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
