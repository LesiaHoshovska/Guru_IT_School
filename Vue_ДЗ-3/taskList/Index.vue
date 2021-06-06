<template>
  <div>
    <task-satatus :status="status" :cardNumber="cardNumber" />
    <task-card v-for="task in taskList" :key="task.id" 
    :taskName="task.taskName"
    :personImg="task.personImg"
    :days="task.days"
    />
  </div>
</template>

<script>
import TaskSatatus from "./taskStatus/TaskSatatus.vue";
import TaskCard from "./taskCard/TaskCard.vue";

export default {
  name: "Index",
  components: {
    TaskSatatus,
    TaskCard,
  },
  
    };
  
</script>

<style lang="scss" scoped>
</style>