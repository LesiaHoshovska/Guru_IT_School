<template>
  <div class="container">
    <div>
      <h1>{{ taskListTittle }}</h1>
    </div>
    <div>
      <p>{{ taskNumber }}</p>
    </div>
    <div>
        <input type="text" fieldset="Add task...">  Навіщо це?
    </div>
  </div>
</template>

<script>
export default {
  name: "TittleTaskList",
  props: {
    taskListTittle: {
      type: String,
      default: "No List",
    },
    taskNumber: {
      type: String,
      default: "No task",
    },
  },
};
</script>

<style lang="css" scoped>
.container{
    text-align: left;
}
h1{
    text-align: left;
}
p{
    text-align: left;
}
input{
    justify-content: left;
    width: 200px;
    padding-right: 700px;
}
</style>
