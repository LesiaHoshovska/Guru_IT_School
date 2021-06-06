<template>
  <div id="app">
    <index v-for="items in dataList" :key="items.id"/>
  </div>
</template>

<script>
import Index from './components/taskList/taskCard/TaskCard.vue'

export default {
  name: 'App',
  components: {
    Index,
  
  data() {
    return {
      status: "Open",
      cardNumber: "2",
      taskList: [
        {
          id: 1,
          taskName: "About page content outline",
          personImg:
            "https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png",
          days: "3 day(s)",
        },
        {
          id: 2,
          taskName: "Code new homepage",
          personImg:
            "https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png",
          days: "2 days(s)",
        },
      ]
}
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
