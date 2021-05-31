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
  name: "Login",
  data() {
    return {
      log: "",
      pass: "",
      logArr: [
        { log: "password", pass: "p@ssw0rd" },
        { log: "11545", pass: "564" },
        { log: "nianai", pass: "68547" },
      ],
    };
  },
  methods: {
    validateLog() {
      for (let i = 0; i < this.logArr.length; i++) {
        if (
          this.log.value === this.logArr[i].log &&
          this.pass.value === this.logArr[i].pass
        ) {
          return alert("Welcome");
        } else {
          return alert("invalid pass or log");
        }
      }
    },
  },
};
</script>
