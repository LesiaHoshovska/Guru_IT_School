<template>
  <div>
    <label>
      Login:
      <input type="text" v-model="log" />
    </label>
    <br />
    <label>
      Password:
      <input type="text" v-model="pass" /> </label
    ><br />
    <button @click="validateLog">Go</button>
  </div>
</template>

<script>
export default {
  name: "Login",           Якщо для компонента використовуєте папку, то файл у середині паки можна називати index.vue
  data() {
    return {
      log: "",
      pass: "",
      logArr: [
        { login: "password", password: "p@ssw0rd" },
        { login: "11545", password: "564" },
        { login: "nianai", password: "68547" },
      ],
    };
  },
  methods: {
    validateLog() {
      for (let i = 0; i < this.logArr.length; i++) {   Краще використовувати спеціалізовані методи обробки масивів some
        if (
          this.log === this.logArr[i].login &&
          this.pass === this.logArr[i].password
        ) {
          alert("Welcome");
        } else {
          alert("invalid pass or log");
        }
      }
    },
  },
};
</script>
