<template>
  <div id="app">
    <tittle-task-list
      :taskListTittle="tasksListTittle"
      :taskNumber="tasksNumber"
    />
    <tasks v-for="task in tasksList" :key="task.id" :taskName="task.taskName" 
    />
  </div>
</template>

<script>
import TittleTaskList from "./components/mainTaslComponent/TittleTaskList.vue";
import Tasks from "./components/taskComponent/Tasks.vue";

export default {
  name: "App",
  components: {
    TittleTaskList,
    Tasks,
  },
  data() {
    return {
      tasksListTittle: "Task List",
      tasksNumber: "3 tasks",
      tasksList: [
        {
          id: 1,
          taskName: "Practice Javascript",
          
        },
        {
          id: 2,
          taskName: "Learn Laravel",
          
        },
        {
          id: 3,
          taskName: "Workout",
          
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
