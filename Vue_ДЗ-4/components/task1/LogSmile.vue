<template>
  <div>
    <label>
      Login
      <input type="text" v-model="userLogin" />
    </label>
    <br />
    <label>
      Password
      <input type="text" v-model="userPassword" />
    </label>
    <br />

    <button @click="user">Go</button>
    <br />
    <img
      v-if="user===true"
      src="https://365psd.com/images/istock/previews/2121/21212345-big-smile-emoticon.jpg"
      alt="Smile"
    />
    <span v-else>Invalid Username or Password</span>
  </div>
</template>

<script>
export default {
  name: "LogSmile",
  props: {
    userDataArr: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      userLogin: null,
      userPassword: null,
      filteredUser: false,
    };
  },
  methods: {
    user() {
      if (
        (this.userDataArr
          .filter((val) => {
            val.log === this.userLogin ?? val.pass === this.userPassword;
          })===true)
          
      ) {
         (this.filteredUser = true);
      } else {
        (this.filteredUser = false);
      }
    },
  },
};
</script>

<style lang="css" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>